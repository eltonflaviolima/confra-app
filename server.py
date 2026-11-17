#!/usr/bin/env python3
"""
CONFRA JBSN — SERVIDOR DE SINCRONIZAÇÃO EM TEMPO REAL
Serve os arquivos estáticos e sincroniza os dados entre celular e PC/Telão.
"""

import http.server
import socketserver
import json
import os
import sys
import threading
import time
import socket

PORT = int(os.environ.get("PORT", 3000))
STATE_FILE = os.environ.get("STATE_FILE", "confra_state.json")

# Gerenciador de clientes SSE (Server-Sent Events) para Realtime instantâneo
sse_clients = []
sse_lock = threading.Lock()

def broadcast_sse(event_type, data):
    with sse_lock:
        dead_clients = []
        payload = f"event: {event_type}\ndata: {json.dumps(data)}\n\n".encode('utf-8')
        for client in sse_clients:
            try:
                client.write(payload)
                client.flush()
            except Exception:
                dead_clients.append(client)
        for dead in dead_clients:
            if dead in sse_clients:
                sse_clients.remove(dead)

def get_current_state():
    if os.path.exists(STATE_FILE):
        try:
            with open(STATE_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"Erro ao ler {STATE_FILE}: {e}")
    return None

def save_current_state(state_data):
    try:
        with open(STATE_FILE, "w", encoding="utf-8") as f:
            json.dump(state_data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"Erro ao salvar {STATE_FILE}: {e}")
        return False

class ConfraRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Habilita CORS e desativa cache em rotas dinâmicas
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        clean_path = self.path.split('?')[0].rstrip('/')
        if not clean_path:
            clean_path = '/'

        # 1. Endpoint SSE para Real-Time Push (/api/events)
        if clean_path == '/api/events':
            self.send_response(200)
            self.send_header('Content-Type', 'text/event-stream')
            self.send_header('Cache-Control', 'no-cache')
            self.send_header('Connection', 'keep-alive')
            self.send_header('X-Accel-Buffering', 'no')
            self.end_headers()
            
            with sse_lock:
                sse_clients.append(self.wfile)
            
            # Envia o estado inicial imediatamente
            current = get_current_state()
            if current:
                initial_msg = f"event: state\ndata: {json.dumps(current)}\n\n".encode('utf-8')
                try:
                    self.wfile.write(initial_msg)
                    self.wfile.flush()
                except Exception:
                    pass

            # Mantém conexão aberta
            try:
                while True:
                    time.sleep(15)
                    # Heartbeat ping para manter viva a conexão
                    ping_msg = b": ping\n\n"
                    self.wfile.write(ping_msg)
                    self.wfile.flush()
            except Exception:
                with sse_lock:
                    if self.wfile in sse_clients:
                        sse_clients.remove(self.wfile)
            return

        # 2. Endpoint REST para obter o estado atual (/api/state)
        elif clean_path == '/api/state':
            state = get_current_state()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Cache-Control', 'no-cache')
            self.end_headers()
            response_data = state if state is not None else {}
            self.wfile.write(json.dumps(response_data, ensure_ascii=False).encode('utf-8'))
            return

        # 2.1 Endpoint REST para listar arquivos de mídia (/api/media)
        elif clean_path == '/api/media':
            base_dir = os.path.dirname(os.path.abspath(__file__))
            instants_dir = os.path.join(base_dir, 'sounds', 'instants')
            if not os.path.exists(instants_dir):
                instants_dir = os.path.join(base_dir, 'instants')
            videos_dir = os.path.join(base_dir, 'videos')

            instants_files = []
            if os.path.exists(instants_dir):
                for f in sorted(os.listdir(instants_dir)):
                    if f.lower().endswith(('.mp3', '.wav', '.ogg')) and not f.startswith('.') and 'copia' not in f.lower():
                        instants_files.append(f)

            videos_files = []
            if os.path.exists(videos_dir):
                for f in sorted(os.listdir(videos_dir)):
                    if f.lower().endswith(('.mp4', '.webm')) and not f.startswith('.'):
                        videos_files.append(f)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Cache-Control', 'no-cache')
            self.end_headers()
            self.wfile.write(json.dumps({'instants': instants_files, 'videos': videos_files}, ensure_ascii=False).encode('utf-8'))
            return

        # 3. Rotas amigáveis para /tela e /host
        elif clean_path in ('/tela', '/tela/'):
            self.path = '/tela.html'
        elif clean_path in ('/host', '/host/'):
            self.path = '/host.html'

        # Arquivos estáticos normais
        return super().do_GET()

    def do_POST(self):
        clean_path = self.path.split('?')[0].rstrip('/')
        # Endpoint para atualizar estado (/api/state)
        if clean_path == '/api/state':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            try:
                state_data = json.loads(body)
                save_current_state(state_data)
                
                # Notifica instantaneamente todos os clientes conectados (TV, outros celulares)
                broadcast_sse('state', state_data)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(b'{"status":"ok"}')
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(f'{{"error":"{str(e)}"}}'.encode('utf-8'))
            return

        # Endpoint para disparar ação remota (som ou vídeo de dança) (/api/action)
        elif clean_path == '/api/action':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            try:
                action_data = json.loads(body)
                broadcast_sse('action', action_data)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(b'{"status":"ok"}')
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(f'{{"error":"{str(e)}"}}'.encode('utf-8'))
            return

        self.send_response(404)
        self.end_headers()

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "localhost"

class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True

if __name__ == '__main__':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass
    port = int(os.environ.get('PORT', sys.argv[1] if len(sys.argv) > 1 else PORT))
    server_address = ('', port)
    
    # Permite reusar a porta imediatamente
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        httpd = ThreadedHTTPServer(server_address, ConfraRequestHandler)
        ip = get_local_ip()
        print("=" * 60)
        print(f"🚀 SERVIDOR CONFRA JBSN INICIADO NA PORTA {port}")
        print("=" * 60)
        print(f"📱 No celular do líder: http://{ip}:{port}")
        print(f"📺 No PC do Telão:     http://localhost:{port}/tela")
        print("=" * 60)
        print("Sincronização em tempo real (SSE + API) ativada.")
        httpd.serve_forever()
    except Exception as e:
        print(f"Erro ao iniciar servidor: {e}")
