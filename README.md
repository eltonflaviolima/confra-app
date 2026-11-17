# Confra App — Gincana JBSN 🎉

Aplicação em tempo real para a Gincana da Juventude da **Igreja Batista Sol Nascente (JBSN)**. Possui sincronização instantânea via Server-Sent Events (SSE) entre o painel do líder/host no celular e o telão/TV do auditório.

---

## 🌐 Produção & Acesso

- 📱 **Painel do Líder / Host (Mobile)**: [https://gincana.eltonlima.tech/host](https://gincana.eltonlima.tech/host)
- 📺 **Visão do Telão / TV (Auditório)**: [https://gincana.eltonlima.tech/tela](https://gincana.eltonlima.tech/tela)
- 🏠 **Visão Geral**: [https://gincana.eltonlima.tech](https://gincana.eltonlima.tech)

---

## 🚀 Arquitetura & Infraestrutura

- **Backend**: Python 3 com servidor HTTP multithreaded assíncrono para streaming de SSE (`/api/events`), persistência de estado (`/api/state`) e disparos de ação remota (`/api/action`).
- **Frontend**: Vanilla JS moderno, PWA instalável offline-first e Design System tátil com paleta oficial (*Warm Biscuit Cream* `#FFF9EE` e *Deep Pomegranate Wine* `#3A001D`).
- **Proxy Reverso & SSL**: **Traefik** com certificado TLS automático via **Let's Encrypt** na VPS Hostinger.
- **Containerização**: Docker Compose com rede externa `web` conectada ao Traefik e volume persistente para o estado da gincana (`confra_state.json`).
- **CI/CD**: GitHub Actions com compilação e publicação automática de imagem no **GitHub Container Registry (`ghcr.io`)** e deploy automático via SSH na VPS Hostinger.

---

## ⚙️ Configuração de CI/CD (GitHub Actions)

O pipeline em [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) é acionado a cada `push` na branch `main` ou manualmente via `workflow_dispatch`.

### Secrets Necessários no GitHub (`Settings > Secrets and variables > Actions`):

| Secret | Valor Recomendado | Descrição |
| :--- | :--- | :--- |
| `VPS_HOST` | `187.127.22.69` | IP da VPS na Hostinger |
| `VPS_USER` | `root` | Usuário SSH da VPS |
| `VPS_SSH_KEY` | *(Sua chave privada SSH)* | Chave privada correspondente à chave `github-actions-deploy` autorizada na VPS |
| `VPS_PORT` | `22` *(opcional)* | Porta SSH |

---

## 🛠️ Comandos Úteis na VPS

A aplicação está instalada em `/docker/confra-app` na VPS:

```bash
# Ver status do container
docker ps -f name=confra-app

# Ver logs em tempo real
docker logs -f confra-app

# Reiniciar serviço
cd /docker/confra-app && docker compose restart confra-app
```
