/**
 * CONFRA JBSN — APP PRINCIPAL DA GINCANA
 * Juventude da Igreja Batista Sol Nascente
 */

// ==========================================
// 1. DADOS INICIAIS (SEED DATA)
// ==========================================
const INITIAL_PARTICIPANTS = [
  { id: 'p1', name: 'Cleber Jesus Dias Filho', phone: '79991802481', team: null, diet: 'Frango + Arroz + Feijão Tropeiro' },
  { id: 'p2', name: 'Talita Dantas Lima Santos', phone: '79 9946-3929', team: null, diet: 'Frango + Arroz + Feijão em Caldo' },
  { id: 'p3', name: 'Lucas Daniel Figueiredo', phone: '79 99878-8404', team: null, diet: 'Panqueca + Macarrão + Tropeiro + Maionese' },
  { id: 'p4', name: 'Ana Luyza Melo da Paixão', phone: '79998415031', team: null, diet: 'Panqueca + Arroz + Tropeiro + Vinagrete' },
  { id: 'p5', name: 'Keven Santana Martins', phone: '79981231152', team: null, diet: 'Frango + Arroz/Macarrão + Tropeiro + Vinagrete' },
  { id: 'p6', name: 'Catharina Santos Barreto', phone: '75999998318', team: null, diet: 'Frango + Arroz/Macarrão + Tropeiro + Vinagrete' },
  { id: 'p7', name: 'Grazielle Rocha Torres', phone: '79998857104', team: null, diet: 'Frango + Arroz/Macarrão + Tropeiro' },
  { id: 'p8', name: 'Heloíse Rodrigues Salgado', phone: '79988291140', team: null, diet: 'Carne + Arroz + Feijão em Caldo + Vinagrete' },
  { id: 'p9', name: 'Ian Marques Bandeira Silveira', phone: '79 996303054', team: null, diet: 'Carne + Macarrão + Feijão Tropeiro' },
  { id: 'p10', name: 'João Pedro Silva dos Santos', phone: '79998542147', team: null, diet: 'Carne assada + Somente Macarrão' },
  { id: 'p11', name: 'Marcos Aurélio de Melo Junior', phone: '79 99191-6029', team: null, diet: 'Carne + Arroz + Tropeiro + Vinagrete' },
  { id: 'p12', name: 'Gabrielle Silva', phone: '79981600622', team: null, diet: 'Panqueca + Arroz/Macarrão + Tropeiro + Vinagrete' },
  { id: 'p13', name: 'Mariana S. Andrade', phone: '75 999425480', team: null, diet: 'Panqueca + Arroz/Macarrão + Tropeiro + Maionese' },
  { id: 'p14', name: 'Rebeca Santos Ribeiro', phone: '94981290818', team: null, diet: 'Carne + Arroz/Macarrão + Tropeiro + Vinagrete' },
  { id: 'p15', name: 'Vitor de Assis Simões Araújo', phone: '79991238807', team: null, diet: 'Carne + Arroz/Macarrão + Tropeiro + Vinagrete' },
  { id: 'p16', name: 'Ana Lídia Feitosa Rocha Simões', phone: '79 9877-0558', team: null, diet: 'Frango + Arroz/Macarrão + Feijão Tropeiro' },
  { id: 'p17', name: 'Yuri', phone: '79999338091', team: null, diet: 'Frango + Somente Macarrão' },
  { id: 'p18', name: 'Larissa Vasconcelos Vieira', phone: '79998413012', team: null, diet: 'Carne + Arroz + Feijão em Caldo + Vinagrete' },
  { id: 'p19', name: 'Odilon Ferreira', phone: '(79) 99684-1795', team: null, diet: 'Carne + Arroz/Macarrão + Tropeiro + Maionese' },
  { id: 'p20', name: 'Gabriel Alves Santos', phone: '79996462727', team: null, diet: 'Panqueca + Macarrão + Tropeiro + Maionese' },
  { id: 'p21', name: 'Neto Teles', phone: '79999196173', team: null, diet: 'Carne + Macarrão + Tropeiro + Maionese' },
  { id: 'p22', name: 'Yuri Niemaia Rodrigues Santana', phone: '79988725839', team: null, diet: 'Frango + Arroz + Tropeiro + Vinagrete' },
  { id: 'p23', name: 'Thaiane Lorena Nascimento Silva', phone: '79991995558', team: null, diet: 'Carne + Arroz/Macarrão + Feijão Caldo + Maionese' },
  { id: 'p24', name: 'Raquel Souza dos Santos Marques', phone: '79999423109', team: null, diet: 'Frango + Macarrão + Feijão Tropeiro' },
  { id: 'p25', name: 'Danilo Silva dos Santos Marques', phone: '79988802444', team: null, diet: 'Frango + Arroz/Macarrão + Tropeiro + Vinagrete' },
  { id: 'p26', name: 'Renato da Silva Souza', phone: '79 9 9820-6282', team: null, diet: 'Panqueca de carne + Feijão Tropeiro' },
  { id: 'p27', name: 'Israel Teles', phone: '79996634247', team: null, diet: 'Frango + Arroz/Macarrão + Tropeiro + Maionese' }, // Duplicata resolvida
  { id: 'p28', name: 'Isabela Souza Silva', phone: '79 999332189', team: null, diet: 'Carne + Arroz + Feijão Tropeiro' },
  { id: 'p29', name: 'Mirella Victoria de Souza Cunha', phone: '79 9 9864-8617', team: null, diet: 'Panqueca + Macarrão + Tropeiro + Maionese' },
  { id: 'p30', name: 'Stephanie Melo Moacir Lima', phone: '79996129797', team: null, diet: 'Carne + Arroz/Macarrão + Tropeiro + Vinagrete' },
  { id: 'p31', name: 'Lucca de Queiroz e Paulon', phone: '(79) 99854-9286', team: null, diet: 'Carne + Arroz/Macarrão + Feijão Caldo + Maionese' }
];

const INITIAL_PROVAS = [
  {
    id: 'adesivos',
    title: 'Guerra dos Adesivos (O Dia Todo)',
    category: 'Furtividade & Resistência',
    duration: 'Dia Inteiro',
    icon: '🏷️',
    scoreRule: '1 ponto por adesivo mantido no adversário',
    summary: 'Cole adesivos nos membros da equipe rival sem ser percebido. Ao final do dia, cada adesivo que permaneceu vale ponto!',
    description: 'Cole adesivos nos membros da equipe adversária sem que eles percebam! Ao final do dia da confra serão contabilizados todos os adesivos fixados no corpo/roupas dos adversários. Cada adesivo colado e mantido até o final da gincana vale 1 ponto para a equipe que colou. Se a vítima flagrar a colagem no ato ou remover antes da contagem final oficial, o adesivo não é pontuado.',
    mediaType: 'rules_card',
    videoUrl: '',
    tips: [
      'Aja com naturalidade durante conversas, refeições e louvor.',
      'Locais estratégicos: costas das camisas, barras de calça, bonés.',
      'Proibido puxar roupas com força ou colar nos cabelos das pessoas.'
    ],
    pointsA: 0,
    pointsB: 0
  },
  {
    id: 'dois-corpos',
    title: 'Dois Corpos Ocupam o Mesmo Lugar',
    category: 'Equilíbrio & Estratégia',
    duration: '2 minutos',
    icon: '📦',
    scoreRule: '1 ponto por membro dentro dos limites 2x2m',
    summary: 'Colocar o maior número de pessoas dentro de um quadrado 2x2m por 10 segundos sustentados.',
    description: 'O objetivo é colocar o maior número de membros da equipe em um espaço delimitado de 2x2 metros demarcado com fita no chão. Pode subir nas costas, ombros e abraçar bem apertado! Para a pontuação ser validada, a equipe precisa se manter completamente dentro do limite por pelo menos 10 segundos sem que ninguém toque o chão fora da marcação.',
    mediaType: 'rules_card',
    videoUrl: '',
    tips: [
      'Os participantes com maior equilíbrio e base devem ficar no meio.',
      'Coloque os membros mais leves nos ombros e costas.',
      'Use o cronômetro oficial da prova com contagem regressiva para validar os 10 segundos!'
    ],
    pointsA: 0,
    pointsB: 0
  },
  {
    id: 'splash',
    title: 'Splash! Salto na Piscina',
    category: 'Aquática & Impacto',
    duration: '1 rodada por equipe',
    icon: '🌊',
    scoreRule: '5 pontos para o reservatório mais cheio',
    summary: 'Pule na piscina espirrando água para encher o balde/reservatório na borda. 1 pulo por membro!',
    description: 'Encher o reservatório com água da piscina através do impacto do salto! Os membros da equipe devem pular na piscina de modo que a água que espirra ao pular atinja e encha o balde/reservatório posicionado rigorosamente à beira da piscina. Cada membro só pode pular uma única vez! Ao término dos saltos de ambas as equipes, a que tiver o reservatório com maior volume ganha 5 pontos.',
    mediaType: 'rules_card',
    videoUrl: '',
    tips: [
      'Saltos tipo "bomba" ou "bala de canhão" geram o maior deslocamento de onda.',
      'Ajuste o ângulo do pulo para direcionar a onda em direção ao balde.',
      'Segurança em primeiro lugar: cuidado com a borda e escorregões!'
    ],
    pointsA: 0,
    pointsB: 0
  }
];

// Cores sortidas estilo arcade dome (MyInstants)
const ARCADE_COLORS = ['purple', 'yellow', 'green', 'blue', 'red', 'cyan', 'orange', 'pink'];

// Lista de Instants (lidos da pasta instants / sounds/instants)
let INSTANTS_LIST = [
  { id: 'chega', label: 'CHEGA', file: 'CHEGA.mp3', color: 'purple' },
  { id: 'celebration', label: 'celebration', file: 'celebration.mp3', color: 'yellow' },
  { id: 'e_brincadeira', label: 'e-brincadeira-hein', file: 'e-brincadeira-hein.mp3', color: 'green' },
  { id: 'mario_victory', label: 'mario-luigi-victory', file: 'mario-luigi-victory.mp3', color: 'blue' },
  { id: 'naruto', label: 'naruto-sad-music', file: 'naruto-sad-music.mp3', color: 'red' },
  { id: 'calma', label: 'que-isso-meu-filho-calma', file: 'que-isso-meu-filho-calma.mp3', color: 'cyan' },
  { id: 'spiderman', label: 'spiderman', file: 'spiderman.mp3', color: 'orange' },
  { id: 'tensao', label: 'tensao', file: 'tensao.mp3', color: 'pink' },
  { id: 'vine_boom', label: 'vine-boom', file: 'vine-boom.mp3', color: 'yellow' },
  { id: 'wow', label: 'wow', file: 'wow.mp3', color: 'green' },
  { id: 'wrong_answer', label: 'wrong-answer', file: 'wrong-answer.mp3', color: 'red' }
];

// Lista de Vídeos (lidos da pasta videos)
let VIDEOS_LIST = [
  { id: 'cat_dog', label: 'cat_dog_dancing', file: 'cat_dog_dancing.mp4', color: 'yellow' },
  { id: 'infinity', label: 'infinity_dancing', file: 'infinity_dancing.mp4', color: 'purple' },
  { id: 'kid_dancing', label: 'kid_dancing', file: 'kid_dancing.mp4', color: 'blue' },
  { id: 'revolution', label: 'revolution_dancing', file: 'revolution_dancing.mp4', color: 'green' }
];

// Canal de Comunicação em Tempo Real com o Telão (/tela)
const broadcast = new BroadcastChannel('confra_jbsn_channel');

function broadcastSync() {
  try {
    broadcast.postMessage({ type: 'SYNC' });
  } catch (e) {}
}

function broadcastSound(soundName) {
  const payload = { type: 'PLAY_SOUND', sound: soundName };
  try {
    broadcast.postMessage(payload);
  } catch (e) {}
  fetch('/api/action', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(() => {});
}

// ==========================================
// 2. SISTEMA DE ÁUDIO (SONS LOCAIS + SYNTH FALLBACK)
// ==========================================
class SoundManager {
  constructor() {
    this.audioCache = {};
  }

  play(filename, syncToTelao = false) {
    try {
      let src = filename;
      if (!src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('./') && !src.startsWith('/')) {
        if (src.startsWith('instants/') || src.startsWith('sounds/')) {
          src = './' + src;
        } else {
          src = `./instants/${filename}`;
        }
      }
      const audio = new Audio(src);
      audio.volume = 1;
      audio.play().catch(e => {
        if (src.includes('./instants/')) {
          const fallback = new Audio(src.replace('./instants/', './sounds/instants/'));
          fallback.volume = 1;
          fallback.play().catch(() => {});
        }
      });

      if (syncToTelao) {
        broadcastSound(filename);
      }
    } catch (e) {
      console.warn('Erro ao tocar áudio:', e);
    }
  }
}

const sounds = new SoundManager();

// Sintetizador Web Audio nativo (Fallback 100% offline)
class AudioSynthesizer {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playWhistle() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(2400, now);
      osc.frequency.exponentialRampToValueAtTime(1800, now + 0.1);
      osc.frequency.exponentialRampToValueAtTime(2600, now + 0.3);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {}
  }

  playBuzzer() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.7);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.9);
    } catch (e) {}
  }

  playCheer() {
    try {
      this.init();
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const now = this.ctx.currentTime + (idx * 0.08);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      });
    } catch (e) {}
  }

  playTick() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }
}

const audioSynth = new AudioSynthesizer();

// ==========================================
// 3. GERENCIADOR DE ESTADO & PERSISTÊNCIA
// ==========================================
const STORAGE_KEY = 'confra_jbsn_state_v1';

class AppState {
  constructor() {
    this.teams = {
      team_a: { id: 'team_a', name: 'Time Sol', color: '#FECB66', crest: '☀️', points: 0 },
      team_b: { id: 'team_b', name: 'Time Nascente', color: '#FF6F89', crest: '🔥', points: 0 }
    };
    this.provas = [...INITIAL_PROVAS];
    this.participants = [...INITIAL_PARTICIPANTS];
    this.logs = [];
    const isHostPage = window.location.pathname.includes('/host') || window.location.pathname.endsWith('host.html');
    this.isAdmin = isHostPage ? true : false;
    this.adminPin = '1234';
    this.activeTab = isHostPage ? 'telao' : 'placar';
    this.load();
  }

  save() {
    try {
      const data = {
        teams: this.teams,
        provas: this.provas,
        participants: this.participants,
        logs: this.logs,
        adminPin: this.adminPin
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      this.recalculateTotalScores();
      broadcastSync();

      // Sincroniza com o servidor local (para atualizar Telão no PC e outros celulares)
      fetch('/api/state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).catch(err => console.log('Modo offline/local:', err));
    } catch (e) {
      console.warn('Erro ao salvar:', e);
    }
  }

  load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.teams) this.teams = parsed.teams;
        if (parsed.provas) this.provas = parsed.provas;
        if (parsed.participants && parsed.participants.length > 0) {
          this.participants = parsed.participants;
        }
        if (parsed.logs) this.logs = parsed.logs;
        if (parsed.adminPin) this.adminPin = parsed.adminPin;
      }
    } catch (e) {
      console.warn('Iniciando com estado padrão:', e);
    }
    this.recalculateTotalScores();
    this.syncFromServer();
    this.connectSSE();
  }

  applyExternalState(data) {
    if (data.teams) this.teams = data.teams;
    if (data.provas) this.provas = data.provas;
    if (data.participants && data.participants.length > 0) this.participants = data.participants;
    if (data.logs) this.logs = data.logs;
    if (data.adminPin) this.adminPin = data.adminPin;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    this.recalculateTotalScores();
  }

  syncFromServer() {
    fetch('/api/state')
      .then(r => r.json())
      .then(data => {
        if (data && data.teams) {
          this.applyExternalState(data);
          renderUI();
        }
      })
      .catch(() => {});
  }

  connectSSE() {
    try {
      const es = new EventSource('/api/events');
      es.addEventListener('state', (e) => {
        try {
          const data = JSON.parse(e.data);
          if (data && data.teams) {
            this.applyExternalState(data);
            renderUI();
          }
        } catch (err) {}
      });
      es.onerror = () => {
        // Fallback polling caso a conexão caia
        setTimeout(() => this.syncFromServer(), 2000);
      };
    } catch (e) {}
  }

  recalculateTotalScores() {
    let scoreA = 0;
    let scoreB = 0;
    this.provas.forEach(p => {
      scoreA += (p.pointsA || 0);
      scoreB += (p.pointsB || 0);
    });
    this.teams.team_a.points = scoreA;
    this.teams.team_b.points = scoreB;
  }

  addPoints(teamId, provaId, points, reason = '') {
    let prova = this.provas.find(p => p.id === provaId);
    if (!prova && this.provas.length > 0) {
      prova = this.provas[0];
    }
    if (!prova) return;

    if (teamId === 'team_a') {
      prova.pointsA = Math.max(0, (prova.pointsA || 0) + points);
    } else {
      prova.pointsB = Math.max(0, (prova.pointsB || 0) + points);
    }

    const team = this.teams[teamId];
    this.logs.unshift({
      id: Date.now().toString(),
      teamId,
      teamName: team.name,
      provaTitle: prova.title,
      points,
      reason: reason || `Pontuação na prova ${prova.title}`,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    });

    this.save();
    sounds.play('victory.wav', true);
    renderUI();
  }

  sortearEquipes() {
    const shuffled = [...this.participants].sort(() => Math.random() - 0.5);
    shuffled.forEach((p, idx) => {
      p.team = idx % 2 === 0 ? 'team_a' : 'team_b';
    });
    this.participants = shuffled;
    this.save();
    sounds.play('victory.wav', false);
    renderUI();
  }

  adicionarParticipante(name, phone, diet = '') {
    if (!name) return;
    const newP = {
      id: 'p_' + Date.now(),
      name: name.trim(),
      phone: phone ? phone.trim() : '',
      team: null,
      diet: diet ? diet.trim() : 'Geral'
    };
    this.participants.push(newP);
    this.save();
    renderUI();
  }

  removerParticipante(id) {
    this.participants = this.participants.filter(p => p.id !== id);
    this.save();
    renderUI();
  }

  atribuirEquipe(participantId, teamId) {
    const p = this.participants.find(part => part.id === participantId);
    if (p) {
      p.team = teamId || null;
      this.save();
      renderUI();
    }
  }

  editarProva(id, title, category, duration, icon, scoreRule, description, tipsText = '', videoUrl = '') {
    const prova = this.provas.find(p => p.id === id);
    if (!prova) return;
    const tips = tipsText ? (Array.isArray(tipsText) ? tipsText : tipsText.split('\n').filter(t => t.trim().length > 0)) : (prova.tips || []);
    prova.title = title || prova.title;
    prova.category = category || prova.category;
    prova.duration = duration || prova.duration;
    prova.icon = icon || prova.icon;
    prova.scoreRule = scoreRule || prova.scoreRule;
    prova.summary = description ? description.slice(0, 90) + '...' : prova.summary;
    prova.description = description || prova.description;
    prova.tips = tips;
    if (videoUrl !== undefined) {
      prova.videoUrl = videoUrl;
      prova.mediaType = videoUrl ? 'embed' : 'rules_card';
    }
    this.save();
    renderUI();
  }

  criarNovaProva(title, category, duration, icon, scoreRule, description, tipsText = '', videoUrl = '') {
    const tips = tipsText ? tipsText.split('\n').filter(t => t.trim().length > 0) : ['Respeite as regras e boa sorte!'];
    const newProva = {
      id: 'prova_' + Date.now(),
      title,
      category: category || 'Geral',
      duration: duration || 'Livre',
      icon: icon || '⭐',
      scoreRule: scoreRule || 'Pontuação definida pelo juiz',
      summary: description.slice(0, 90) + '...',
      description,
      mediaType: videoUrl ? 'embed' : 'rules_card',
      videoUrl: videoUrl || '',
      tips,
      pointsA: 0,
      pointsB: 0
    };
    this.provas.push(newProva);
    this.save();
    renderUI();
  }

  updateTeamNames(nameA, nameB, crestA, crestB) {
    if (nameA && nameA.trim()) this.teams.team_a.name = nameA.trim();
    if (nameB && nameB.trim()) this.teams.team_b.name = nameB.trim();
    if (crestA && crestA.trim()) this.teams.team_a.crest = crestA.trim();
    if (crestB && crestB.trim()) this.teams.team_b.crest = crestB.trim();
    this.save();
    renderUI();
  }
}

const state = new AppState();

// ==========================================
// 4. CRONÔMETRO DE PROVAS (COM COUNTDOWN DE ÁUDIO)
// ==========================================
class GameTimer {
  constructor() {
    this.remainingSeconds = 120; // 2 min default
    this.initialSeconds = 120;
    this.interval = null;
    this.isRunning = false;
    this.countdownPlayed = false;
  }

  setDuration(seconds) {
    this.pause();
    this.initialSeconds = seconds;
    this.remainingSeconds = seconds;
    this.countdownPlayed = false;
    this.updateDisplay();
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.countdownPlayed = false;

    // Se começar com 5 segundos ou menos, dispara countdown imediatamente
    if (this.remainingSeconds <= 5 && this.remainingSeconds > 0) {
      sounds.play('countdown-3-2-1-go.mp3', true);
      this.countdownPlayed = true;
    } else {
      sounds.play('whistle.wav', true);
    }

    this.interval = setInterval(() => {
      this.remainingSeconds--;

      // Dispara countdown sonoro exatamente quando atingir 5 segundos restantes
      if (this.remainingSeconds === 5 && !this.countdownPlayed) {
        sounds.play('countdown-3-2-1-go.mp3', true);
        this.countdownPlayed = true;
      }

      if (this.remainingSeconds <= 0) {
        this.pause();
        this.remainingSeconds = 0;
        // Alarme final
        sounds.play('buzzer.wav', true);
        const timerCard = document.querySelector('.timer-circle-wrap');
        if (timerCard) {
          timerCard.style.borderColor = 'var(--color-accent-coral)';
          setTimeout(() => { timerCard.style.borderColor = 'var(--color-ink-primary)'; }, 2000);
        }
      }
      this.updateDisplay();
    }, 1000);
    this.updateDisplay();
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.isRunning = false;
    this.updateDisplay();
  }

  reset() {
    this.pause();
    this.remainingSeconds = this.initialSeconds;
    this.countdownPlayed = false;
    this.updateDisplay();
  }

  updateDisplay() {
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const el = document.getElementById('timer-display');
    if (el) el.textContent = formatted;

    const btnStart = document.getElementById('btn-timer-toggle');
    if (btnStart) {
      btnStart.textContent = this.isRunning ? '⏸️ Pausar' : '▶️ Iniciar';
      btnStart.className = this.isRunning ? 'btn-tactile coral' : 'btn-tactile primary';
    }
  }
}

const gameTimer = new GameTimer();

// ==========================================
// 4.1. CONTROLE REMOTO DA PROJEÇÃO NO TELÃO (ADMIN)
// ==========================================
class TelaoController {
  constructor() {
    this.seconds = 120;
    this.initialSeconds = 120;
    this.isRunning = false;
    this.isShowingOnTelao = false;
    this.interval = null;
    this.countdownPlayed = false;
  }

  sendAction(actionType, extraData = {}) {
    const payload = { type: actionType, ...extraData };
    try {
      broadcast.postMessage(payload);
    } catch(e) {}
    fetch('/api/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(err => console.warn('Erro ao enviar ação:', err));
  }

  celebrate() {
    this.sendAction('PLAY_CELEBRATION');
    if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);
  }

  toggleDance() {
    this.sendAction('TOGGLE_DANCE');
    if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);
  }

  playVideo(videoFile, videoTitle = '') {
    this.sendAction('PLAY_VIDEO', { video: videoFile, title: videoTitle });
    
    // Atualiza status e exibe botão parar vídeo no Host
    const stopWrapper = document.getElementById('btn-stop-dance-wrapper');
    if (stopWrapper) stopWrapper.style.display = 'block';
    
    const st = document.getElementById('dance-host-status');
    if (st) {
      st.textContent = `🎬 Reproduzindo no Telão: ${videoTitle || videoFile}`;
      st.style.background = 'var(--color-accent-coral-light)';
      st.style.color = '#9E1F3B';
    }
    
    if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);
  }

  stopVideo() {
    this.sendAction('STOP_VIDEO');
    
    // Esconde botão parar vídeo no Host
    const stopWrapper = document.getElementById('btn-stop-dance-wrapper');
    if (stopWrapper) stopWrapper.style.display = 'none';
    
    const st = document.getElementById('dance-host-status');
    if (st) {
      st.textContent = '📺 Telão: Placar Restaurado';
      st.style.background = 'var(--color-surface-tint)';
      st.style.color = 'var(--color-ink-primary)';
    }
    
    if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);
  }

  triggerBanner(type, title, soundFile = '') {
    this.sendAction('SHOW_BANNER', { bannerType: type, title, sound: soundFile });
    if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);
  }

  setDuration(secs, btnEl) {
    this.pause();
    this.initialSeconds = secs;
    this.seconds = secs;
    this.countdownPlayed = false;
    this.updateDisplay();
    if (this.isShowingOnTelao) {
      this.sendAction('TELAO_TIMER_RESET', { seconds: secs });
    }
    if (btnEl) {
      const parent = btnEl.parentElement;
      if (parent) {
        parent.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
      }
      btnEl.classList.add('active');
    }
  }

  toggleTimerOnTelao() {
    if (this.isRunning) {
      this.pause();
    } else {
      this.start();
    }
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.isShowingOnTelao = true;
    this.countdownPlayed = false;
    this.updateDisplay();

    // Envia ordem para a TV esconder o placar e soltar o cronômetro gigante com áudio no Telão
    this.sendAction('TELAO_TIMER_START', { seconds: this.seconds });
    if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);

    this.interval = setInterval(() => {
      this.seconds--;

      if (this.seconds <= 0) {
        this.pause();
        this.seconds = 0;
        if (window.navigator && window.navigator.vibrate) window.navigator.vibrate([100, 50, 100]);
      }
      this.updateDisplay();
    }, 1000);
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.isRunning = false;
    this.updateDisplay();
    this.sendAction('TELAO_TIMER_PAUSE');
  }

  reset() {
    this.pause();
    this.seconds = this.initialSeconds;
    this.countdownPlayed = false;
    this.updateDisplay();
    this.sendAction('TELAO_TIMER_RESET', { seconds: this.initialSeconds });
  }

  hideTimerFromTelao() {
    this.pause();
    this.isShowingOnTelao = false;
    this.updateDisplay();
    this.sendAction('TELAO_TIMER_HIDE');
  }

  updateDisplay() {
    const mins = Math.floor(this.seconds / 60);
    const secs = this.seconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const disp = document.getElementById('admin-telao-timer-display');
    if (disp) disp.textContent = formatted;

    const btnStart = document.getElementById('btn-admin-telao-toggle');
    if (btnStart) {
      btnStart.textContent = this.isRunning ? '⏸️ Pausar no Telão' : '▶️ Soltar no Telão (Iniciar)';
      btnStart.className = this.isRunning ? 'btn-tactile coral' : 'btn-tactile primary';
    }

    const stBadge = document.getElementById('telao-timer-admin-status');
    if (stBadge) {
      if (this.isShowingOnTelao) {
        stBadge.textContent = this.isRunning ? '📺 Telão Exibindo: Cronômetro Ativo' : '📺 Telão Exibindo: Cronômetro Pausado';
        stBadge.style.background = 'var(--color-accent-coral-light)';
        stBadge.style.color = 'var(--color-accent-coral-dark)';
      } else {
        stBadge.textContent = '📺 Telão Exibindo: Placar Geral dos Times';
        stBadge.style.background = 'var(--color-accent-mint-light)';
        stBadge.style.color = '#2E7D32';
      }
    }
  }
}

const telaoCtrl = new TelaoController();

// ==========================================
// 5. RENDERIZAÇÃO E INTERFACE (UI)
// ==========================================
function renderUI() {
  renderScoreboard();
  renderProvas();
  renderParticipantes();
  renderEquipes();
  renderLogs();
  renderAdminStatus();
  renderInstants();
  renderVideos();
  renderSelectProvaTelao();
  if (typeof telaoCtrl !== 'undefined') {
    telaoCtrl.updateDisplay();
  }
}

function renderScoreboard() {
  const teamA = state.teams.team_a;
  const teamB = state.teams.team_b;

  const nameAEl = document.getElementById('team-a-name');
  const nameBEl = document.getElementById('team-b-name');
  if (nameAEl) nameAEl.textContent = teamA.name;
  if (nameBEl) nameBEl.textContent = teamB.name;

  const crestAEl = document.getElementById('team-a-crest') || document.getElementById('host-crest-a');
  const crestBEl = document.getElementById('team-b-crest') || document.getElementById('host-crest-b');
  if (crestAEl && teamA.crest) crestAEl.textContent = teamA.crest;
  if (crestBEl && teamB.crest) crestBEl.textContent = teamB.crest;

  const ptsAEl = document.getElementById('team-a-pts');
  const ptsBEl = document.getElementById('team-b-pts');
  if (ptsAEl) ptsAEl.textContent = teamA.points;
  if (ptsBEl) ptsBEl.textContent = teamB.points;

  const total = (teamA.points + teamB.points) || 1;
  const pctA = teamA.points === 0 && teamB.points === 0 ? 50 : Math.round((teamA.points / total) * 100);
  const pctB = 100 - pctA;

  const barA = document.getElementById('clash-fill-a');
  const barB = document.getElementById('clash-fill-b');
  if (barA) barA.style.width = pctA + '%';
  if (barB) barB.style.width = pctB + '%';

  const labelPctA = document.getElementById('label-pct-a');
  const labelPctB = document.getElementById('label-pct-b');
  if (labelPctA) labelPctA.textContent = `${teamA.name}: ${teamA.points} pts (${pctA}%)`;
  if (labelPctB) labelPctB.textContent = `${teamB.name}: ${teamB.points} pts (${pctB}%)`;
}

function renderProvas() {
  const container = document.getElementById('provas-list-container');
  if (!container) return;

  container.innerHTML = state.provas.map(prova => {
    return `
      <div class="prova-card" onclick="openProvaModal('${prova.id}')">
        <div class="prova-card-header" style="background: var(--color-surface-tint);">
          <span class="tag-badge" style="background: var(--color-surface-pure);">
            <span>${prova.icon}</span> ${prova.category}
          </span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn-tactile small secondary" style="padding: 3px 8px; font-size: 11px;" onclick="event.stopPropagation(); openEditProvaModal('${prova.id}')" title="Editar prova">
              ✏️ Editar
            </button>
            <span class="micro-label" style="color: var(--color-ink-muted);">⏱️ ${prova.duration}</span>
          </div>
        </div>
        <div class="prova-card-body">
          <h3 class="prova-title">${prova.title}</h3>
          <p class="prova-desc-preview">${prova.summary || prova.description.slice(0, 80) + '...'}</p>
          <div class="prova-footer">
            <span style="font-size: 12px; font-weight: 700; color: var(--color-ink-primary);">
              🏆 ${prova.scoreRule}
            </span>
            <div style="display: flex; gap: 8px;">
              <span class="tag-badge" style="background: var(--color-accent-yellow-light);">
                ${state.teams.team_a.crest} ${prova.pointsA || 0}
              </span>
              <span class="tag-badge" style="background: var(--color-accent-coral-light);">
                ${state.teams.team_b.crest} ${prova.pointsB || 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderParticipantes() {
  const container = document.getElementById('participants-list');
  if (!container) return;

  const searchVal = (document.getElementById('search-participant')?.value || '').toLowerCase();
  const filterTeam = document.getElementById('filter-team-select')?.value || 'all';

  const filtered = state.participants.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchVal) || (p.phone && p.phone.includes(searchVal));
    const matchesTeam = filterTeam === 'all' || 
                        (filterTeam === 'none' && !p.team) || 
                        (p.team === filterTeam);
    return matchesSearch && matchesTeam;
  });

  const countEl = document.getElementById('participant-count');
  if (countEl) countEl.textContent = `${state.participants.length} inscritos`;

  const countA = state.participants.filter(p => p.team === 'team_a').length;
  const countB = state.participants.filter(p => p.team === 'team_b').length;
  const countNone = state.participants.filter(p => !p.team).length;

  const teamCountsEl = document.getElementById('team-members-count');
  if (teamCountsEl) {
    teamCountsEl.innerHTML = `
      <span class="tag-badge" style="background: var(--color-accent-yellow-light);">${state.teams.team_a.name}: ${countA}</span>
      <span class="tag-badge" style="background: var(--color-accent-coral-light);">${state.teams.team_b.name}: ${countB}</span>
      <span class="tag-badge" style="background: var(--color-surface-muted);">Sem time: ${countNone}</span>
    `;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px 10px; color: var(--color-ink-muted);">
        <p style="font-weight: 700;">Nenhum inscrito encontrado com esse filtro.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const teamObj = p.team ? state.teams[p.team] : null;
    const teamBadgeColor = p.team === 'team_a' ? 'var(--color-accent-yellow)' : (p.team === 'team_b' ? 'var(--color-accent-coral)' : '#FFF');
    const initials = p.name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();

    return `
      <div class="participant-item">
        <div class="participant-info">
          <div class="participant-avatar" style="background: ${teamBadgeColor};">
            ${p.team ? teamObj.crest : initials}
          </div>
          <div class="participant-details">
            <div class="participant-name">${p.name}</div>
            <div class="participant-sub">
              <span>📞 ${p.phone || 'Sem contato'}</span>
              <span>•</span>
              <span title="${p.diet}">🍽️ ${p.diet.split('+')[0] || 'Geral'}</span>
            </div>
          </div>
        </div>
        <select class="participant-team-select" onchange="state.atribuirEquipe('${p.id}', this.value)" ${state.isAdmin ? '' : 'disabled title="Desbloqueie o Modo Líder para alterar times"'}>
          <option value="" ${!p.team ? 'selected' : ''}>Sem Time</option>
          <option value="team_a" ${p.team === 'team_a' ? 'selected' : ''}>${state.teams.team_a.name}</option>
          <option value="team_b" ${p.team === 'team_b' ? 'selected' : ''}>${state.teams.team_b.name}</option>
        </select>
      </div>
    `;
  }).join('');
}

function renderEquipes() {
  const container = document.getElementById('equipes-cards-container');
  if (!container) return;

  const teamA = state.teams.team_a;
  const teamB = state.teams.team_b;

  const membersA = state.participants.filter(p => p.team === 'team_a');
  const membersB = state.participants.filter(p => p.team === 'team_b');
  const unassigned = state.participants.filter(p => !p.team);

  container.innerHTML = `
    <!-- Card Time A -->
    <article class="bento-card" style="margin-bottom: 16px;">
      <div class="card-header-tint" style="background: var(--color-accent-yellow-light);">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 22px;">${teamA.crest}</span>
          <span class="micro-label" style="font-size: 13px; color: var(--color-ink-primary);">${teamA.name}</span>
        </div>
        <div style="display: flex; gap: 6px; align-items: center;">
          <span class="tag-badge tabular" style="background: var(--color-surface-pure); font-weight: 800;">${teamA.points} pts</span>
          <span class="tag-badge" style="background: var(--color-accent-yellow); font-weight: 800;">${membersA.length} membros</span>
        </div>
      </div>
      <div class="card-body">
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${membersA.length === 0 ? '<p style="font-size: 12px; color: var(--color-ink-muted); text-align: center; padding: 12px;">Nenhum participante escalado neste time.</p>' : 
            membersA.map(p => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: var(--color-surface-tint); border: var(--border-thin); border-radius: 14px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 14px; font-weight: 800;">${p.name}</span>
                  <span style="font-size: 10px; color: var(--color-ink-muted);">(${p.diet ? p.diet.split('+')[0] : 'Geral'})</span>
                </div>
                <div style="display: flex; gap: 6px;">
                  <button class="btn-tactile small secondary" style="padding: 4px 8px; font-size: 11px;" onclick="state.atribuirEquipe('${p.id}', 'team_b')" title="Mover para ${teamB.name}">
                    Mover p/ ${teamB.crest}
                  </button>
                  <button class="btn-tactile small secondary" style="padding: 4px 8px; font-size: 11px; color: var(--color-accent-coral);" onclick="state.atribuirEquipe('${p.id}', null)" title="Remover do time">
                    ✕
                  </button>
                </div>
              </div>
            `).join('')}
        </div>
      </div>
    </article>

    <!-- Card Time B -->
    <article class="bento-card" style="margin-bottom: 16px;">
      <div class="card-header-tint" style="background: var(--color-accent-coral-light);">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 22px;">${teamB.crest}</span>
          <span class="micro-label" style="font-size: 13px; color: var(--color-ink-primary);">${teamB.name}</span>
        </div>
        <div style="display: flex; gap: 6px; align-items: center;">
          <span class="tag-badge tabular" style="background: var(--color-surface-pure); font-weight: 800;">${teamB.points} pts</span>
          <span class="tag-badge" style="background: var(--color-accent-coral); color: #fff; font-weight: 800;">${membersB.length} membros</span>
        </div>
      </div>
      <div class="card-body">
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${membersB.length === 0 ? '<p style="font-size: 12px; color: var(--color-ink-muted); text-align: center; padding: 12px;">Nenhum participante escalado neste time.</p>' : 
            membersB.map(p => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: var(--color-surface-tint); border: var(--border-thin); border-radius: 14px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 14px; font-weight: 800;">${p.name}</span>
                  <span style="font-size: 10px; color: var(--color-ink-muted);">(${p.diet ? p.diet.split('+')[0] : 'Geral'})</span>
                </div>
                <div style="display: flex; gap: 6px;">
                  <button class="btn-tactile small secondary" style="padding: 4px 8px; font-size: 11px;" onclick="state.atribuirEquipe('${p.id}', 'team_a')" title="Mover para ${teamA.name}">
                    Mover p/ ${teamA.crest}
                  </button>
                  <button class="btn-tactile small secondary" style="padding: 4px 8px; font-size: 11px; color: var(--color-accent-coral);" onclick="state.atribuirEquipe('${p.id}', null)" title="Remover do time">
                    ✕
                  </button>
                </div>
              </div>
            `).join('')}
        </div>
      </div>
    </article>

    <!-- Sem Equipe (se houver) -->
    ${unassigned.length > 0 ? `
      <article class="bento-card" style="margin-bottom: 16px;">
        <div class="card-header-tint" style="background: var(--color-surface-warm);">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px;">⚠️</span>
            <span class="micro-label">Sem Equipe Definida</span>
          </div>
          <span class="tag-badge" style="background: var(--color-surface-pure); font-weight: 800;">${unassigned.length} pendentes</span>
        </div>
        <div class="card-body">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${unassigned.map(p => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: var(--color-surface-tint); border: var(--border-thin); border-radius: 14px;">
                <span style="font-size: 14px; font-weight: 800;">${p.name}</span>
                <div style="display: flex; gap: 6px;">
                  <button class="btn-tactile small primary" style="padding: 4px 8px; font-size: 11px;" onclick="state.atribuirEquipe('${p.id}', 'team_a')">
                    + ${teamA.crest} ${teamA.name}
                  </button>
                  <button class="btn-tactile small coral" style="padding: 4px 8px; font-size: 11px;" onclick="state.atribuirEquipe('${p.id}', 'team_b')">
                    + ${teamB.crest} ${teamB.name}
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </article>
    ` : ''}
  `;
}

function renderLogs() {
  const container = document.getElementById('logs-container');
  if (!container) return;

  if (state.logs.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 14px; color: var(--color-ink-muted); font-size: 13px;">
        Nenhuma pontuação lançada ainda. Que comece a gincana! 🚀
      </div>
    `;
    return;
  }

  container.innerHTML = state.logs.slice(0, 6).map(log => {
    const isA = log.teamId === 'team_a';
    const bg = isA ? 'var(--color-accent-yellow-light)' : 'var(--color-accent-coral-light)';
    return `
      <div class="log-item">
        <div class="log-left">
          <span class="log-pts-badge" style="background: ${bg};">+${log.points}</span>
          <div>
            <div style="font-weight: 700;">${log.teamName}</div>
            <div style="font-size: 11px; color: var(--color-ink-muted);">${log.provaTitle} • ${log.timestamp}</div>
          </div>
        </div>
        <span style="font-size: 11px; font-style: italic; color: var(--color-ink-muted); max-width: 120px; text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${log.reason || ''}
        </span>
      </div>
    `;
  }).join('');
}

function renderAdminStatus() {
  const strip = document.getElementById('admin-badge-strip');
  const btnAdmin = document.getElementById('btn-admin-header');
  const adminOnlyElements = document.querySelectorAll('.admin-only');

  if (state.isAdmin) {
    if (strip) strip.style.display = 'flex';
    if (btnAdmin) btnAdmin.classList.add('admin-unlocked');
    adminOnlyElements.forEach(el => el.style.display = '');
  } else {
    if (strip) strip.style.display = 'none';
    if (btnAdmin) btnAdmin.classList.remove('admin-unlocked');
    adminOnlyElements.forEach(el => el.style.display = 'none');
  }
}

// Renderiza a Mesa de Instants estilo MyInstants (3D Circular Arcade Buttons com cores sortidas)
function renderInstants() {
  const containers = [
    document.getElementById('instants-grid-full'),
    document.getElementById('instants-grid-admin'),
    document.getElementById('instants-grid-timer')
  ];

  containers.forEach(container => {
    if (!container) return;
    container.innerHTML = INSTANTS_LIST.map(item => `
      <div class="instant-card" onclick="triggerInstant('${item.file}')" title="${item.label}">
        <div class="instant-button-outer">
          <div class="instant-dome ${item.color}"></div>
        </div>
        <span class="instant-label">${item.label}</span>
      </div>
    `).join('');
  });
}

// Renderiza os Botões Arcade dos Vídeos no Telão
function renderVideos() {
  const container = document.getElementById('videos-grid-telao');
  if (!container) return;
  container.innerHTML = VIDEOS_LIST.map(item => `
    <div class="instant-card" onclick="telaoCtrl.playVideo('${item.file}', '${item.label}')" title="${item.label}">
      <div class="instant-button-outer">
        <div class="instant-dome ${item.color}"></div>
      </div>
      <span class="instant-label">${item.label}</span>
    </div>
  `).join('');
}

// Carrega listas de mídia dinamicamente do servidor
function loadMediaLists() {
  fetch('/api/media')
    .then(r => r.json())
    .then(data => {
      if (data && data.instants && data.instants.length > 0) {
        INSTANTS_LIST = data.instants
          .filter(f => !f.toLowerCase().includes('copia') && !f.toLowerCase().includes('cópia'))
          .map((f, i) => {
          const cleanName = f.replace(/\.(mp3|wav|ogg)$/i, '');
          return {
            id: 'inst_' + i,
            label: cleanName,
            file: f,
            color: ARCADE_COLORS[i % ARCADE_COLORS.length]
          };
        });
      }
      if (data && data.videos && data.videos.length > 0) {
        VIDEOS_LIST = data.videos.map((f, i) => {
          const cleanName = f.replace(/\.(mp4|webm)$/i, '');
          return {
            id: 'vid_' + i,
            label: cleanName,
            file: f,
            color: ARCADE_COLORS[i % ARCADE_COLORS.length]
          };
        });
      }
      renderInstants();
      renderVideos();
    })
    .catch(() => {});
}

function triggerInstant(soundFile) {
  if (!soundFile) return;

  // Envia som para o Telão via BroadcastChannel e via servidor SSE
  broadcastSound(soundFile);

  const cleanName = soundFile.replace(/\.(mp3|wav|ogg)$/i, '');

  // Feedback visual no painel do Host
  const st = document.getElementById('sons-host-status');
  if (st) {
    st.textContent = `📢 Disparado no Telão: ${cleanName}`;
    st.style.background = 'var(--color-accent-mint-light)';
    st.style.color = '#2E7D32';
    setTimeout(() => {
      st.textContent = '📺 Toque no botão arcade para disparar no Telão';
      st.style.background = 'var(--color-surface-tint)';
      st.style.color = 'var(--color-ink-primary)';
    }, 3000);
  }

  const isHost = window.location.pathname.includes('/host') || 
                 window.location.pathname.endsWith('host.html') || 
                 state.isAdmin;

  if (!isHost) {
    sounds.play(soundFile, false);
  }

  if (window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(40);
  }
}
// ==========================================
// 6. MODAIS & INTERAÇÕES
// ==========================================
let currentDetailProvaId = null;

function openProvaModal(provaId) {
  currentDetailProvaId = provaId;
  const prova = state.provas.find(p => p.id === provaId);
  if (!prova) return;

  document.getElementById('modal-prova-title').textContent = prova.title;
  document.getElementById('modal-prova-category').textContent = `${prova.icon} ${prova.category} • ${prova.duration}`;
  document.getElementById('modal-prova-desc').textContent = prova.description;
  document.getElementById('modal-prova-rule').textContent = prova.scoreRule;

  const tipsContainer = document.getElementById('modal-prova-tips');
  tipsContainer.innerHTML = (prova.tips || []).map(tip => `<li>${tip}</li>`).join('');

  document.getElementById('modal-pts-a').textContent = `${state.teams.team_a.name}: ${prova.pointsA || 0} pts`;
  document.getElementById('modal-pts-b').textContent = `${state.teams.team_b.name}: ${prova.pointsB || 0} pts`;

  const mediaContainer = document.getElementById('modal-prova-media');
  if (prova.videoUrl && prova.videoUrl.includes('youtube')) {
    mediaContainer.innerHTML = `
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px; border: var(--border-solid); margin-bottom: 14px;">
        <iframe style="position: absolute; top:0; left: 0; width: 100%; height: 100%;" src="${prova.videoUrl}" frameborder="0" allowfullscreen></iframe>
      </div>
    `;
  } else {
    mediaContainer.innerHTML = `
      <div style="background: var(--color-surface-tint); border: var(--border-solid); border-radius: 16px; padding: 18px; text-align: center; margin-bottom: 14px;">
        <div style="font-size: 38px; margin-bottom: 6px;">${prova.icon}</div>
        <div style="font-weight: 800; font-size: 14px; text-transform: uppercase;">Guia Oficial da Prova</div>
        <div style="font-size: 12px; color: var(--color-ink-muted);">Demonstração prática ao vivo pelos líderes no local.</div>
      </div>
    `;
  }

  const btnScoreProva = document.getElementById('btn-modal-score-prova');
  if (btnScoreProva) {
    btnScoreProva.style.display = state.isAdmin ? 'block' : 'none';
  }

  document.getElementById('modal-prova-detail').classList.add('open');
}

function closeModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
}

function openScoreModal(presetProvaId = null) {
  if (!state.isAdmin) {
    openAdminPinModal();
    return;
  }

  const selectProva = document.getElementById('score-prova-select');
  selectProva.innerHTML = state.provas.map(p => `
    <option value="${p.id}" ${presetProvaId === p.id ? 'selected' : ''}>${p.title}</option>
  `).join('');

  document.getElementById('score-team-select').innerHTML = `
    <option value="team_a">${state.teams.team_a.name}</option>
    <option value="team_b">${state.teams.team_b.name}</option>
  `;

  document.getElementById('modal-score').classList.add('open');
}

function submitScore() {
  const teamId = document.getElementById('score-team-select').value;
  const provaId = document.getElementById('score-prova-select').value;
  const points = parseInt(document.getElementById('score-points-input').value, 10);
  const reason = document.getElementById('score-reason-input').value;

  if (isNaN(points) || points <= 0) {
    alert('Insira uma quantidade de pontos válida.');
    return;
  }

  state.addPoints(teamId, provaId, points, reason);
  closeModals();
}

function quickAddPoints(teamId, points) {
  const team = state.teams[teamId];
  if (!team) return;
  const prova = state.provas[0];
  const provaId = prova ? prova.id : 'geral';
  state.addPoints(teamId, provaId, points, `Lançamento rápido do Host (${points > 0 ? '+' : ''}${points} pts)`);
}

function openAdminPinModal() {
  document.getElementById('admin-pin-input').value = '';
  document.getElementById('modal-admin-pin').classList.add('open');
}

function verifyAdminPin() {
  const pin = document.getElementById('admin-pin-input').value;
  if (pin === state.adminPin || pin === '1234') {
    state.isAdmin = true;
    closeModals();
    renderUI();
    sounds.play('victory.wav', false);
    alert('🎉 Modo Organizador desbloqueado com sucesso!');
  } else {
    sounds.play('errou.wav', false);
    alert('PIN incorreto. Tente novamente.');
  }
}

function toggleAdminLock() {
  if (state.isAdmin) {
    state.isAdmin = false;
    renderUI();
    alert('Modo Organizador bloqueado.');
  } else {
    openAdminPinModal();
  }
}

function openNewProvaModal() {
  if (!state.isAdmin) {
    openAdminPinModal();
    return;
  }
  document.getElementById('modal-new-prova').classList.add('open');
}


// Gerencia seleção e projeção de Prova no Telão
function renderSelectProvaTelao() {
  const sel = document.getElementById('select-prova-telao');
  if (!sel) return;
  const currentVal = sel.value;
  sel.innerHTML = '<option value="" disabled ' + (!currentVal ? 'selected' : '') + '>-- Selecione a prova para apresentar --</option>' +
    state.provas.map(p => `
      <option value="${p.id}" ${currentVal === p.id ? 'selected' : ''}>
        ${p.icon} ${p.title} (${p.category})
      </option>
    `).join('');
}

function selecionarProvaTelao(provaId) {
  if (!provaId) return;
  const prova = state.provas.find(p => p.id === provaId);
  if (!prova) return;

  telaoCtrl.sendAction('PRESENT_PROVA', { prova });

  const st = document.getElementById('status-prova-apresentada');
  if (st) {
    st.style.display = 'block';
    st.textContent = `✨ Projetando "${prova.title}" no Telão (com regras e som)!`;
    setTimeout(() => { st.style.display = 'none'; }, 4000);
  }

  if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(50);
}

function openEditProvaModal(provaId) {
  const prova = state.provas.find(p => p.id === provaId);
  if (!prova) return;

  document.getElementById('edit-prova-id').value = prova.id;
  document.getElementById('edit-prova-title').value = prova.title || '';
  document.getElementById('edit-prova-category').value = prova.category || '';
  document.getElementById('edit-prova-duration').value = prova.duration || '';
  document.getElementById('edit-prova-icon').value = prova.icon || '🎯';
  document.getElementById('edit-prova-rule').value = prova.scoreRule || '';
  document.getElementById('edit-prova-desc').value = prova.description || '';
  document.getElementById('edit-prova-tips').value = (prova.tips || []).join('\n');
  document.getElementById('edit-prova-video').value = prova.videoUrl || '';

  const modal = document.getElementById('modal-edit-prova');
  if (modal) modal.classList.add('open');
}

function submitEditProva() {
  const id = document.getElementById('edit-prova-id').value;
  const title = document.getElementById('edit-prova-title').value.trim();
  const category = document.getElementById('edit-prova-category').value.trim();
  const duration = document.getElementById('edit-prova-duration').value.trim();
  const icon = document.getElementById('edit-prova-icon').value.trim();
  const rule = document.getElementById('edit-prova-rule').value.trim();
  const desc = document.getElementById('edit-prova-desc').value.trim();
  const tips = document.getElementById('edit-prova-tips').value;
  const video = document.getElementById('edit-prova-video').value.trim();

  if (!title || !desc) {
    alert('Por favor preencha pelo menos o título e a descrição das regras da prova.');
    return;
  }

  state.editarProva(id, title, category, duration, icon, rule, desc, tips, video);
  closeModals();
  sounds.play('victory.wav', false);
}

function submitNewProva() {
  const title = document.getElementById('new-prova-title').value;
  const category = document.getElementById('new-prova-category').value;
  const duration = document.getElementById('new-prova-duration').value;
  const icon = document.getElementById('new-prova-icon').value;
  const rule = document.getElementById('new-prova-rule').value;
  const desc = document.getElementById('new-prova-desc').value;
  const tips = document.getElementById('new-prova-tips').value;
  const video = document.getElementById('new-prova-video').value;

  if (!title || !desc) {
    alert('Por favor preencha pelo menos o título e a descrição da prova.');
    return;
  }

  state.criarNovaProva(title, category, duration, icon, rule, desc, tips, video);
  closeModals();
}

function openNewParticipantModal() {
  document.getElementById('modal-new-participant').classList.add('open');
}

function submitNewParticipant() {
  const name = document.getElementById('new-participant-name').value;
  const phone = document.getElementById('new-participant-phone').value;
  const diet = document.getElementById('new-participant-diet').value;

  if (!name) {
    alert('Digite o nome do participante.');
    return;
  }

  state.adicionarParticipante(name, phone, diet);
  closeModals();
  document.getElementById('new-participant-name').value = '';
  document.getElementById('new-participant-phone').value = '';
  document.getElementById('new-participant-diet').value = '';
}

function openEditTeamsModal() {
  const inputNameA = document.getElementById('edit-team-a-name');
  const inputNameB = document.getElementById('edit-team-b-name');
  const inputCrestA = document.getElementById('edit-team-a-crest');
  const inputCrestB = document.getElementById('edit-team-b-crest');

  if (inputNameA) inputNameA.value = state.teams.team_a.name;
  if (inputNameB) inputNameB.value = state.teams.team_b.name;
  if (inputCrestA) inputCrestA.value = state.teams.team_a.crest || '☀️';
  if (inputCrestB) inputCrestB.value = state.teams.team_b.crest || '🔥';

  const modal = document.getElementById('modal-edit-teams');
  if (modal) modal.classList.add('open');
}

function submitEditTeams() {
  const nameA = document.getElementById('edit-team-a-name').value;
  const nameB = document.getElementById('edit-team-b-name').value;
  const crestA = document.getElementById('edit-team-a-crest').value;
  const crestB = document.getElementById('edit-team-b-crest').value;

  if (!nameA || !nameB) {
    alert('Por favor preencha os nomes das duas equipes.');
    return;
  }

  state.updateTeamNames(nameA, nameB, crestA, crestB);
  closeModals();
  sounds.play('victory.wav', false);
}

// ==========================================
// 7. GATEWAY & CONTROLE DE ACESSO (ONBOARDING)
// ==========================================
function gatewayGoTo(stepIndex) {
  const slider = document.getElementById('gateway-slider');
  if (slider) {
    slider.style.transform = `translateX(-${stepIndex * 33.333333}%)`;
  }
  if (stepIndex === 1) {
    renderEntryParticipants('');
    const input = document.getElementById('search-participant-entry');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 300);
    }
  } else if (stepIndex === 2) {
    const pwdInput = document.getElementById('host-password-input');
    const errEl = document.getElementById('host-auth-error');
    if (errEl) errEl.style.display = 'none';
    if (pwdInput) {
      pwdInput.value = '';
      setTimeout(() => pwdInput.focus(), 300);
    }
  }
}

function openTelaoDirect() {
  window.location.href = './tela.html';
}

function filterEntryParticipants(query) {
  renderEntryParticipants(query);
}

function renderEntryParticipants(filter = '') {
  const container = document.getElementById('entry-participants-list');
  if (!container) return;

  const q = (filter || '').toLowerCase().trim();
  const list = state.participants.filter(p => {
    return p.name.toLowerCase().includes(q) || (p.phone && p.phone.includes(q));
  });

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px 10px; color: var(--color-ink-muted);">
        <p style="font-weight: 700;">Nenhum participante encontrado.</p>
        <p style="font-size: 12px; margin-top: 4px;">Fale com a liderança para adicionar seu nome.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(p => {
    const isA = p.team === 'team_a';
    const isB = p.team === 'team_b';
    const teamObj = isA ? state.teams.team_a : (isB ? state.teams.team_b : null);
    const teamColor = isA ? 'var(--color-accent-yellow)' : (isB ? 'var(--color-accent-coral)' : '#FFF');
    const teamBg = isA ? 'var(--color-accent-yellow-light)' : (isB ? 'var(--color-accent-coral-light)' : 'var(--color-surface-tint)');
    const teamLabel = teamObj ? `${teamObj.crest} ${teamObj.name}` : '⏳ Sem Time';
    const initials = p.name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();

    return `
      <div class="participant-entry-card" onclick="selectParticipant('${p.id}')">
        <div class="participant-info">
          <div class="participant-avatar" style="background: ${teamColor};">
            ${teamObj ? teamObj.crest : initials}
          </div>
          <div class="participant-details">
            <div class="participant-name" style="font-size: 15px; font-weight: 800; color: var(--color-ink-primary); line-height: 1.2;">${p.name}</div>
            <div class="participant-sub" style="margin-top: 4px;">
              <span class="tag-badge" style="background: ${teamBg}; font-size: 11px; padding: 2px 8px; font-weight: 700;">${teamLabel}</span>
            </div>
          </div>
        </div>
        <div class="entry-enter-pill">
          <span>Entrar</span>
          <span>➔</span>
        </div>
      </div>
    `;
  }).join('');
}

function selectParticipant(participantId) {
  localStorage.setItem('confra_current_participant_id', participantId);
  applyCurrentParticipant();
  sounds.play('victory.wav', false);
}

function applyCurrentParticipant() {
  const currentId = localStorage.getItem('confra_current_participant_id');
  const overlay = document.getElementById('gateway-overlay');
  const mainScreen = document.getElementById('main-mobile-screen');

  if (!currentId) {
    if (overlay) overlay.style.display = 'flex';
    if (mainScreen) mainScreen.style.display = 'none';
    gatewayGoTo(0);
    return false;
  }

  const p = state.participants.find(part => part.id === currentId);
  if (!p) {
    localStorage.removeItem('confra_current_participant_id');
    if (overlay) overlay.style.display = 'flex';
    if (mainScreen) mainScreen.style.display = 'none';
    gatewayGoTo(0);
    return false;
  }

  // Atualiza header
  const isA = p.team === 'team_a';
  const isB = p.team === 'team_b';
  const teamObj = isA ? state.teams.team_a : (isB ? state.teams.team_b : null);
  const crest = teamObj ? teamObj.crest : '👤';
  const firstName = p.name.split(' ')[0];

  const headerCrest = document.getElementById('header-user-crest');
  const headerName = document.getElementById('header-user-name');
  if (headerCrest) headerCrest.textContent = crest;
  if (headerName) headerName.textContent = firstName;

  // Atualiza modal do perfil
  const modAvatar = document.getElementById('profile-modal-avatar');
  const modName = document.getElementById('profile-modal-name');
  const modTeam = document.getElementById('profile-modal-team');
  const modDiet = document.getElementById('profile-modal-diet');
  const modPhone = document.getElementById('profile-modal-phone');

  if (modAvatar) {
    modAvatar.textContent = crest;
    modAvatar.style.background = isA ? 'var(--color-accent-yellow)' : (isB ? 'var(--color-accent-coral)' : '#FFF');
  }
  if (modName) modName.textContent = p.name;
  if (modTeam) {
    modTeam.textContent = teamObj ? `${teamObj.crest} ${teamObj.name}` : '⏳ Sem Time Definido';
    modTeam.style.background = isA ? 'var(--color-accent-yellow-light)' : (isB ? 'var(--color-accent-coral-light)' : 'var(--color-surface-tint)');
  }
  if (modDiet) modDiet.textContent = p.diet || 'Alimentação Padrão';
  if (modPhone) modPhone.textContent = p.phone || 'Contato não informado';

  if (overlay) overlay.style.display = 'none';
  if (mainScreen) mainScreen.style.display = 'flex';
  return true;
}

function openProfileModal() {
  applyCurrentParticipant();
  const modal = document.getElementById('modal-profile-participant');
  if (modal) modal.classList.add('open');
}

function logoutParticipant() {
  localStorage.removeItem('confra_current_participant_id');
  closeModals();
  const overlay = document.getElementById('gateway-overlay');
  const mainScreen = document.getElementById('main-mobile-screen');
  if (overlay) overlay.style.display = 'flex';
  if (mainScreen) mainScreen.style.display = 'none';
  gatewayGoTo(0);
}

function verifyHostPassword() {
  const input = document.getElementById('host-password-input');
  const errEl = document.getElementById('host-auth-error');
  if (!input) return;

  const val = input.value.trim().toLowerCase();
  if (val === 'confraibsn2026' || val === 'confrajbsn2026' || val === '1234') {
    localStorage.setItem('confra_host_authenticated', 'true');
    sounds.play('victory.wav', false);
    window.location.href = './host';
  } else {
    sounds.play('errou.wav', false);
    if (errEl) {
      errEl.textContent = 'Senha incorreta. Tente novamente.';
      errEl.style.display = 'block';
    }
    input.focus();
    input.select();
  }
}

// Abre o link do Telão / TV em uma nova aba
function openTelaoLink() {
  window.open('./tela.html', '_blank');
}

// ==========================================
// 8. INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderUI();
  loadMediaLists();
  gameTimer.updateDisplay();

  const isHost = window.location.pathname.includes('/host') || window.location.pathname.endsWith('host.html');
  const isTela = window.location.pathname.includes('/tela') || window.location.pathname.endsWith('tela.html');

  if (!isHost && !isTela) {
    applyCurrentParticipant();
  }

  // PWA Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.log('SW registration note:', err);
    });
  }
});
