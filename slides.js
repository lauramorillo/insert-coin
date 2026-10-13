/* ============================================================
   INSERT COIN — PLAY GOOGLE CLOUD  |  slides.js
   v5 — 4-World Edition (Fruit Ninja -> SF6 -> R6 Mobile -> Pokemon GO)
   ============================================================ */

/* ── SLIDES ARRAY ─────────────────────────────────────────── */
const SLIDES = [

/* ── 01 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-cover">
  <span class="corner-deco tl">P1</span>
  <span class="corner-deco tr">HI-SCORE: 999990</span>
  <span class="corner-deco br">GCP × GAMING</span>
  <span class="corner-deco bl">STAGE: 01</span>

  <div class="cover-main-title">
    <span class="cover-line-insert">INSERT COIN</span>
    <span class="cover-line-play">/ PLAY /</span>
    <span class="cover-line-gcp">GOOGLE CLOUD</span>
  </div>
  
  <p class="cover-subtitle">
    La infraestructura invisible que hace posibles<br>tus videojuegos favoritos a escala planetaria
  </p>
  
  <div class="cover-lives-row">
    <span class="cover-hearts">♥ ♥ ♥</span>
    <span>CREDITS: 40 MIN</span>
  </div>
  
  <p class="cover-press-start blink-slow">— PRESS SPACE / START —</p>
</div>`,

/* ── 02 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-agenda">
  <h1 class="agenda-heading">SELECT YOUR GAME</h1>
  <p class="agenda-sub">Cuatro mundos. Cuatro problemas reales. Una infraestructura.</p>
  <div class="agenda-grid-4">
    <div class="agenda-card">
      <span class="num-badge c-green" style="border:1px solid var(--green); background:rgba(57,255,20,0.1)">STAGE 01</span>
      <span class="game-name">FRUIT NINJA</span>
      <span class="game-q">¿Cómo mantengo vivo el juego sin parches?</span>
      <span class="game-tech">Firebase · Remote Config · Analytics</span>
    </div>
    <div class="agenda-card">
      <span class="num-badge c-red" style="border:1px solid var(--red); background:rgba(255,51,85,0.1)">STAGE 02</span>
      <span class="game-name">STREET FIGHTER 6</span>
      <span class="game-q">¿Cómo conecto a todo el mundo a la vez?</span>
      <span class="game-tech">GKE · Spanner · Redis · BigQuery</span>
    </div>
    <div class="agenda-card">
      <span class="num-badge c-blue" style="border:1px solid var(--blue); background:rgba(56,189,248,0.1)">STAGE 03</span>
      <span class="game-name">RAINBOW SIX MOBILE</span>
      <span class="game-q">¿Dónde se ejecuta mi partida sin lag ni trampas?</span>
      <span class="game-tech">Agones · Dedicated Game Servers</span>
    </div>
    <div class="agenda-card">
      <span class="num-badge c-yellow" style="border:1px solid var(--yellow); background:rgba(255,215,0,0.1)">STAGE 04</span>
      <span class="game-name">POKÉMON GO</span>
      <span class="game-q">¿Qué pasa si aparecen 50x más jugadores?</span>
      <span class="game-tech">GKE (S2) · Datastore/Spanner · Pub/Sub · Dataflow</span>
    </div>
  </div>
</div>`,

/* ── 03 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-content">
  <span class="slide-tag c-cyan">PLAYER 1 · PROFILE</span>
  <div class="profile-grid">
    <div class="profile-avatar-col">
      <div class="profile-photo-frame">
        <img src="images/laura.jpg" alt="Laura Morillo-Velarde" />
      </div>
      <span class="profile-tag-p1">READY PLAYER 1</span>
    </div>
    <div class="profile-details">
      <h1 class="profile-name">Laura Morillo-Velarde</h1>
      <div class="profile-badges">
        <div class="profile-badge-item">
          <span class="profile-badge-icon">⭐</span>
          <span><strong>Google Developer Expert (GDE)</strong> en Google Cloud</span>
        </div>
        <div class="profile-badge-item">
          <span class="profile-badge-icon">🛠️</span>
          <span><strong>Desarrolladora e Ingeniera de Plataforma</strong> (+19 años de experiencia)</span>
        </div>
        <div class="profile-badge-item">
          <span class="profile-badge-icon">🕹️</span>
          <span>Apasionada por la arquitectura de sistemas distribuidos de alto rendimiento</span>
        </div>
      </div>
    </div>
  </div>
</div>`,

/* ── 04 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-hero">
  <div class="hero-left">
    <span class="world-badge c-green">WORLD 1</span>
    <img src="images/fruitninja.jpg" alt="Fruit Ninja" class="hero-art-img" />
  </div>
  <div class="hero-right">
    <span class="hero-world-num">WORLD 1 / 4</span>
    <h1 class="hero-title c-green">FRUIT NINJA</h1>
    <span class="hero-dev mono">HALFBRICK STUDIOS · 2010</span>
    <div class="hero-question" style="border-color:var(--green)">
      <strong class="c-green">DESAFÍO:</strong><br>
      ¿Cómo mantengo vivo un juego durante más de 10 años y experimento en vivo sin obligar a descargar parches?
    </div>
  </div>
</div>`,

/* ── 05 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-content">
  <span class="slide-tag c-green">WORLD 1 · FRUIT NINJA</span>
  <h1 class="slide-title c-green">LIVEOPS: OPERAR UN JUEGO EN VIVO</h1>
  <div class="two-col w-full">
    <div>
      <ul class="feature-list">
        <li>Más de <strong>1.000 millones de descargas</strong> globales.</li>
        <li>El reto no es lanzar: es mantener el interés año tras año.</li>
        <li>Eventos temporales (Halloween, Navidad), ajustes de dificultad y balance de anuncios.</li>
      </ul>
    </div>
    <div class="apply-box" style="border-color:var(--green)">
      <span class="apply-label c-green">EL PROBLEMA DE LAS TIENDAS DE APPS</span>
      <p style="font-size:23px;line-height:1.6;color:var(--dim)">
        Subir una versión a la App Store o Google Play tarda días en revisarse y muchos usuarios no actualizan.<br><br>
        <strong class="c-white">¿Cómo cambiamos las reglas del juego en caliente y al instante?</strong>
      </p>
    </div>
  </div>
</div>`,

/* ── 06 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">FIREBASE</h1>
  <p class="slide-subtitle">BACKEND-AS-A-SERVICE PARA MÓVIL Y WEB</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">¿QUÉ ES?</span>
      <p class="card-body">
        La plataforma integral de Google para acelerar el desarrollo y operación de aplicaciones y juegos móviles.
      </p>
      <p class="card-body">
        Permite a los estudios enfocarse en el gameplay sin reinventar la infraestructura base.
      </p>
    </div>
    <div class="tech-intro-card">
      <span class="card-label c-yellow">HERRAMIENTAS CLAVE</span>
      <ul class="feature-list mt-8">
        <li><strong>Remote Config</strong>: Cambios en tiempo real.</li>
        <li><strong>Analytics</strong>: Telemetría de comportamiento.</li>
        <li><strong>Crashlytics</strong>: Monitorización de fallos.</li>
        <li><strong>Cloud Messaging</strong>: Notificaciones push.</li>
      </ul>
    </div>
  </div>
</div>`,

/* ── 07 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">¿CÓMO CAMBIO EL JUEGO SIN ACTUALIZARLO?</h1>
  <p class="slide-subtitle">FIREBASE REMOTE CONFIG</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">EL MANDO A DISTANCIA EN LA NUBE</span>
      <p class="card-body">
        Permite modificar variables de configuración en la consola de Firebase que los móviles descargan dinámicamente al abrir el juego.
      </p>
      <p class="card-body">
        Soporta <strong>Tests A/B</strong> y segmentación por país, versión o tipo de jugador.
      </p>
    </div>
    <div class="apply-box" style="border-color:var(--green)">
      <span class="apply-label c-green">PARÁMETROS EN LA NUBE · FRUIT NINJA</span>
      <div style="font-family:var(--font-mono);font-size:23px;line-height:1.7;background:rgba(0,0,0,0.3);padding:14px;border-radius:8px">
        <span class="c-yellow">// Ejemplos de configuración remota:</span><br>
        ad_frequency_interval: <span class="c-magenta">"AFTER_3_GAMES"</span><br>
        rating_prompt_trigger: <span class="c-green">"AFTER_LEVEL_WIN"</span><br>
        freeze_banana_duration: <span class="c-cyan">5.0s</span>
      </div>
      <div class="mono" style="font-size:21px;color:var(--dim);margin-top:10px">
        ⚡ Las variables se actualizan al instante sin pasar por la tienda.
      </div>
    </div>
  </div>
</div>`,

/* ── 08 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">EL CICLO VITAL DE MEJORA</h1>
  <p class="slide-subtitle">GOOGLE ANALYTICS ➔ BIGQUERY ➔ REMOTE CONFIG</p>
  <div class="flywheel-container w-full">
    <div class="flywheel-step" style="border-color:var(--cyan)">
      <span class="flywheel-icon">📊</span>
      <div>
        <div class="flywheel-title c-cyan">1. ANALYTICS ➔ BIGQUERY</div>
        <div class="flywheel-desc">Telemetría de juego para medir retención y respuesta a anuncios.</div>
      </div>
    </div>
    <div class="c-yellow" style="font-size:18px;line-height:1">⬇</div>
    <div class="flywheel-step" style="border-color:var(--yellow)">
      <span class="flywheel-icon">⚙️</span>
      <div>
        <div class="flywheel-title c-yellow">2. REMOTE CONFIG & A/B TESTING</div>
        <div class="flywheel-desc">Ajuste de variables y frecuencia de anuncios sin parches ni tienda.</div>
      </div>
    </div>
    <div class="c-green" style="font-size:18px;line-height:1">⬇</div>
    <div class="flywheel-step" style="border-color:var(--green)">
      <span class="flywheel-icon">🚀</span>
      <div>
        <div class="flywheel-title c-green">3. RESULTADO DE NEGOCIO</div>
        <div class="flywheel-desc">+16% ingresos publicitarios y +15% valoraciones de 5 estrellas.</div>
      </div>
    </div>
  </div>
</div>`,

/* ── 09 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-lesson">
  <span class="slide-tag c-green">WORLD 1 · LECCIÓN</span>
  <div class="lesson-icon">🍉</div>
  <p class="lesson-quote">
    El juego no termina cuando lo publicas en la tienda.<br><br>
    Es ahí cuando empieza: la infraestructura te permite experimentar y mantenerlo vivo sin fricción.
  </p>
  <div class="pills">
    <span class="pill c-cyan" style="border-color:var(--cyan)">Analytics: Entender el comportamiento</span>
    <span class="pill c-yellow" style="border-color:var(--yellow)">Remote Config: Cambiar al vuelo</span>
    <span class="pill c-green" style="border-color:var(--green)">A/B Testing: Tomar decisiones con datos</span>
  </div>
</div>`,

/* ── 10 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-hero">
  <div class="hero-left">
    <span class="world-badge c-red">WORLD 2</span>
    <img src="images/sf6.jpg" alt="Street Fighter 6" class="hero-art-img" />
  </div>
  <div class="hero-right">
    <span class="hero-world-num">WORLD 2 / 4</span>
    <h1 class="hero-title c-red">STREET FIGHTER 6</h1>
    <span class="hero-dev mono">CAPCOM · 2023</span>
    <div class="hero-question" style="border-color:var(--red)">
      <strong class="c-red">DESAFÍO:</strong><br>
      ¿Cómo conecto a jugadores de todo el mundo simultáneamente con un ranking global consistente y sin latencia?
    </div>
  </div>
</div>`,

/* ── 11 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-content">
  <span class="slide-tag c-red">WORLD 2 · STREET FIGHTER 6</span>
  <h1 class="slide-title c-red">EL JUEGO Y EL RETO</h1>
  <div class="two-col w-full">
    <div>
      <ul class="feature-list">
        <li><strong>Battle Hub</strong>: sala virtual compartida global donde los avatares interactúan en tiempo real.</li>
        <li><strong>Cross-play completo</strong>: PC · PlayStation 5 · Xbox Series.</li>
        <li><strong>Ranking mundial único</strong>: millones de luchadores compitiendo 24/7.</li>
      </ul>
    </div>
    <div class="apply-box" style="border-color:var(--red)">
      <span class="apply-label c-red">EL PROBLEMA TÉCNICO</span>
      <div style="display:flex; flex-direction:column; gap:12px; margin-top:8px;">
        <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:22px;">
          <span>🇪🇸 Jugador (Madrid)</span>
          <span class="c-yellow">⚡ VS ⚡</span>
          <span>🇯🇵 Jugador (Tokio)</span>
        </div>
        <p style="font-size:21px; color:var(--dim); line-height: 1.6;">
          • <strong class="c-white">Combate 1v1 (Fuera de la nube):</strong> P2P directo entre consolas (Rollback Netcode a 60 FPS).<br>
          • <strong class="c-white">Battle Hub y Salas (En GKE):</strong> Contenedores para avatares 3D, salas y matchmaking.<br>
          • <strong class="c-white">Rankings y Perfiles:</strong> Verdad única global sin desajustes por huso horario.
        </p>
      </div>
    </div>
  </div>
</div>`,

/* ── 12 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">¿CÓMO EMPAQUETAMOS EL JUEGO?</h1>
  <p class="slide-subtitle">CONTENEDORES (DOCKER) · DE LA LOGÍSTICA MARÍTIMA AL SOFTWARE</p>
  <div class="two-col w-full" style="align-items:center; gap:36px;">
    <div style="display:flex; flex-direction:column; gap:16px;">
      <div class="tech-intro-card">
        <span class="card-label">📦 LA REVOLUCIÓN DEL TRANSPORTE</span>
        <p class="card-body">
          En los años 50, el <strong>contenedor estándar</strong> cambió el mundo: una caja con medidas universales que encaja en cualquier barco, tren o camión del planeta, sin importar qué lleve dentro.
        </p>
        <p class="card-body">
          En software hacemos lo mismo: <strong>Capcom</strong> empaqueta cada servicio del entorno online (Battle Hub 3D, Custom Rooms, chat, matchmaking) en su propio <strong>Contenedor</strong>. <em>(El combate 1v1 jamás va en contenedor para no añadir latencia)</em>.
        </p>
      </div>
      <div class="mini-note">💡 <strong>Ventaja clave:</strong> Elimina el <em>"en mi máquina funciona"</em>. El contenedor se ejecuta exactamente igual en local y en la nube.</div>
    </div>
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
      <img src="images/containers.jpg" alt="Contenedores marítimos vs contenedores de software" style="width:100%; max-width:540px; border-radius:14px; border:2px solid var(--cyan); box-shadow:var(--glow-cyan); object-fit:cover;" />
    </div>
  </div>
</div>`,

/* ── 13 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-diagram">
  <span class="slide-tag c-cyan">TECNOLOGÍA · KUBERNETES</span>
  <h1 class="slide-title c-cyan">EL TIMONEL Y SU CLÚSTER</h1>
  <p class="slide-subtitle">KUBERNETES ORQUESTA LA FLOTA DE CONTENEDORES (PODS) EN SERVIDORES (NODOS)</p>
  <div class="k8s-cluster-pro">
    <div class="k8s-cp-banner">
      <span class="k8s-cp-tag">☸️ CONTROL PLANE (El Timonel / Cerebro)</span>
      <div class="k8s-cp-badges">
        <span class="k8s-badge">Despliegue</span>
        <span class="k8s-badge">Auto-recuperación</span>
        <span class="k8s-badge">Auto-escalado</span>
      </div>
    </div>
    <div class="k8s-nodes-row">
      <div class="k8s-node-card">
        <div class="k8s-node-header">🖥 NODE 1 (Servidor)</div>
        <div class="k8s-pods-grid">
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Battle Hub</span></div>
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Custom Room</span></div>
        </div>
      </div>
      <div class="k8s-node-card">
        <div class="k8s-node-header">🖥 NODE 2 (Servidor)</div>
        <div class="k8s-pods-grid">
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Chat / Notify</span></div>
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Ranking API</span></div>
        </div>
      </div>
      <div class="k8s-node-card">
        <div class="k8s-node-header">🖥 NODE 3 (Servidor)</div>
        <div class="k8s-pods-grid">
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Auth</span></div>
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Matchmaking</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="mini-note">💡 Un <strong>Pod</strong> es la unidad mínima en Kubernetes: aloja el contenedor de un servicio (salón, matchmaking, API), nunca la simulación de la pelea 1v1.</div>
</div>`,

/* ── 14 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">GKE · GOOGLE KUBERNETES ENGINE</h1>
  <p class="slide-subtitle">KUBERNETES GESTIONADO SIGUIENDO EL CICLO DEL SOL</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">¿QUÉ HACE GKE POR CAPCOM?</span>
      <p class="card-body">
        Google gestiona las máquinas, parches y red en <strong>4 regiones mundiales</strong> (Asia, Europa, Norteamérica y Sudamérica).
      </p>
      <p class="card-body">
        El tráfico de jugadores <strong>rota por husos horarios</strong> a lo largo del día y GKE escala cada región automáticamente.
      </p>
    </div>
    <div class="gke-scale-visual">
      <span class="card-label c-yellow">AUTO-ESCALADO EN STREET FIGHTER 6</span>
      <div class="scale-step-row">
        <div class="scale-node-box">
          <div style="font-size:28px">👥 10K</div>
          <div class="mono c-dim" style="font-size:21px">Valle horario</div>
          <div class="c-green" style="font-size:21px;margin-top:4px">Pocos Nodos</div>
        </div>
        <div class="c-cyan pixel" style="font-size:21px">━━▶</div>
        <div class="scale-node-box active-scale">
          <div style="font-size:28px">🔥 100K</div>
          <div class="mono c-yellow" style="font-size:21px">Hora punta / Torneo</div>
          <div class="c-cyan" style="font-size:21px;margin-top:4px">Escalado auto</div>
        </div>
      </div>
      <div class="mono" style="font-size:21px;color:var(--dim);text-align:center">
        ⚡ GKE crea y apaga servidores en minutos según despierta cada continente.
      </div>
    </div>
  </div>
</div>`,

/* ── 15 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">¿DÓNDE GUARDO EL RANKING MUNDIAL?</h1>
  <p class="slide-subtitle">CLOUD SPANNER · VERDAD ÚNICA SIN PROPAGACIÓN DIFERIDA</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">CONSISTENCIA GLOBAL ESTRICTA (ACID)</span>
      <p class="card-body">
        En lugar de dividir el ranking en árboles regionales que se propagan con retraso por husos horarios, Capcom centraliza la verdad en <strong>Cloud Spanner</strong>.
      </p>
      <p class="card-body">
        Las 4 regiones de GKE se conectan por la <strong>red privada global de Google</strong>: cualquier combate actualiza el ranking mundial al instante.
      </p>
    </div>
    <div class="spanner-globe-box">
      <span class="card-label c-cyan">SINCRONIZACIÓN GLOBAL CON TRUETIME</span>
      <div class="global-nodes-flow">
        <div class="global-region-node">
          <span class="region-flag">🇪🇸</span>
          <span class="region-name">EUROPA</span>
          <span class="region-status">Rank Sync ✓</span>
        </div>
        <div class="sync-beam">
          <span>⚡ TrueTime</span>
          <span>◀━━━━▶</span>
        </div>
        <div class="global-region-node">
          <span class="region-flag">🇯🇵</span>
          <span class="region-name">ASIA / EE.UU.</span>
          <span class="region-status">Rank Sync ✓</span>
        </div>
      </div>
      <div class="mono" style="font-size:21px;color:var(--dim);text-align:center">
        🌍 Relojes atómicos y GPS (TrueTime) garantizan orden exacto en puntos (LP / Master Rating) y compras.
      </div>
    </div>
  </div>
</div>`,

/* ── 16 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">¿CÓMO RESPONDO EN MILISEGUNDOS?</h1>
  <p class="slide-subtitle">REDIS · MEMORYSTORE</p>
  <div class="speed-compare-grid">
    <div class="speed-card bad">
      <div class="speed-header">
        <span class="speed-badge c-red" style="background:rgba(255,51,85,0.15)">DISCO / BD PERSISTENTE</span>
        <span style="font-size:28px">🐢</span>
      </div>
      <div class="speed-val c-red">~ 30-50 ms</div>
      <p style="font-size:21px;color:var(--dim)">Ideal para datos permanentes (Spanner), pero costoso para estados efímeros que cambian cada segundo.</p>
    </div>
    <div class="speed-card good">
      <div class="speed-header">
        <span class="speed-badge c-green" style="background:rgba(57,255,20,0.15)">REDIS (EN MEMORIA)</span>
        <span style="font-size:28px">⚡</span>
      </div>
      <div class="speed-val c-green">&lt; 1 ms</div>
      <p style="font-size:21px;color:var(--dim)">Acceso ultra-rápido en memoria RAM. Ideal para asientos del Battle Hub, caché de rankings y sesiones.</p>
    </div>
  </div>
  <div class="apply-box w-full" style="border-color:var(--red)">
    <span class="apply-label c-red">EN STREET FIGHTER 6</span>
    El estado efímero del Battle Hub (quién se sienta en una recreativa o mira un combate) va en Redis; los puntos y compras van a Spanner; y la telemetría de balanceo va a BigQuery.
  </div>
</div>`,

/* ── 17 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-lesson">
  <span class="slide-tag c-red">WORLD 2 · LECCIÓN</span>
  <div class="lesson-icon">🏆</div>
  <p class="lesson-quote">
    En un gran videojuego, cada tecnología cumple una misión concreta.<br><br>
    Es un sistema de piezas especializadas colaborando en equipo.
  </p>
  <div class="pills">
    <span class="pill c-cyan" style="border-color:var(--cyan)">GKE: Ejecutar y escalar</span>
    <span class="pill c-yellow" style="border-color:var(--yellow)">Spanner: Estado global consistente</span>
    <span class="pill c-green" style="border-color:var(--green)">Redis: Velocidad ultra-rápida</span>
    <span class="pill c-magenta" style="border-color:var(--magenta)">BigQuery: Análisis masivo</span>
  </div>
</div>`,

/* ── 18 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-hero">
  <div class="hero-left">
    <span class="world-badge c-blue">WORLD 3</span>
    <img src="images/r6mobile.jpg" alt="Rainbow Six Mobile" class="hero-art-img" />
  </div>
  <div class="hero-right">
    <span class="hero-world-num">WORLD 3 / 4</span>
    <h1 class="hero-title c-blue">RAINBOW SIX MOBILE</h1>
    <span class="hero-dev mono">UBISOFT · 2023</span>
    <div class="hero-question" style="border-color:var(--blue)">
      <strong class="c-blue">DESAFÍO:</strong><br>
      ¿Dónde se ejecuta la partida? ¿Cómo evitamos trampas y gestionamos miles de servidores de juego en tiempo real?
    </div>
  </div>
</div>`,

/* ── 19 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">CONCEPTO</span>
  <h1 class="slide-title c-cyan">DEDICATED GAME SERVER (DGS)</h1>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">EL SERVIDOR ES LA AUTORIDAD</span>
      <p class="card-body">
        En un FPS táctico 5v5, el servidor calcula las físicas, los impactos de bala y la posición real de cada jugador.
      </p>
      <p class="card-body">
        <strong>Anti-Cheat</strong>: Ningún cliente puede mentir sobre su posición o salud porque el servidor tiene la última palabra.
      </p>
    </div>
    <div class="apply-box" style="border-color:var(--blue)">
      <span class="apply-label c-blue">EL RETO DE INFRAESTRUCTURA</span>
      <p style="font-size:23px;color:var(--dim);line-height:1.6">
        Cada partida dura entre 10 y 20 minutos.<br><br>
        • Necesitamos servidores pre-calentados (Ready).<br>
        • No se puede apagar un servidor mientras haya una partida en curso.
      </p>
    </div>
  </div>
</div>`,

/* ── 20 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-meme" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;">
  <img src="images/meme_six_invitational.jpg" alt="Meme Six Invitational vs Kubernetes" style="max-height:500px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.6);border:2px solid rgba(255,255,255,0.15);" />
  <p class="meme-footer c-yellow" style="margin:0;font-size:22px;">... Por eso Ubisoft y Google crearon AGONES</p>
</div>`,

/* ── 21 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">AGONES</h1>
  <p class="slide-subtitle">ORQUESTADOR DE GAME SERVERS EN KUBERNETES</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">KUBERNETES HABLA EL IDIOMA DEL JUEGO</span>
      <p class="card-body">
        Proyecto open source (Google Cloud + Ubisoft). Adapta Kubernetes a servidores de partidas con estado en memoria:
      </p>
      <ul class="feature-list mt-8" style="font-size:21px">
        <li><strong>Ciclo de vida protegido:</strong> Impide que Kubernetes mate Pods con una partida en curso.</li>
        <li><strong>Conexión UDP directa (<code>hostPort</code>):</strong> Los jugadores se conectan directo a la <code>IP:Puerto</code> del nodo sin pasar por un balanceador de carga tradicional, ahorrando latencia.</li>
      </ul>
    </div>
    <div class="stream-pipeline-box">
      <div class="pipeline-node" style="border-color:var(--green); display:grid; grid-template-columns:170px 1fr; align-items:center; gap:16px;">
        <span class="pixel c-green" style="font-size:20px">READY</span>
        <span class="mono" style="font-size:19px">Pool pre-calentado esperando jugadores</span>
      </div>
      <div class="pipeline-node" style="border-color:var(--magenta); display:grid; grid-template-columns:170px 1fr; align-items:center; gap:16px;">
        <span class="pixel c-magenta" style="font-size:20px">ALLOCATED</span>
        <span class="mono" style="font-size:19px">Partida blindada + IP:Puerto UDP directo</span>
      </div>
      <div class="pipeline-node" style="border-color:var(--yellow); display:grid; grid-template-columns:170px 1fr; align-items:center; gap:16px;">
        <span class="pixel c-yellow" style="font-size:20px">SHUTDOWN</span>
        <span class="mono" style="font-size:19px">Destrucción limpia al terminar la ronda</span>
      </div>
    </div>
  </div>
</div>`,

/* ── 22 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-diagram">
  <span class="slide-tag c-blue">AGONES</span>
  <h1 class="slide-title c-blue">LA FLOTA DE SERVIDORES (FLEET)</h1>
  <div class="fleet-matrix-box w-full">
    <div class="fleet-grid-pro">
      <div class="server-node-card ready">
        <div style="display:flex;justify-content:space-between"><span>GS-01</span><span>● READY</span></div>
        <div class="mono" style="font-size:21px">Esperando jugadores</div>
      </div>
      <div class="server-node-card ready">
        <div style="display:flex;justify-content:space-between"><span>GS-02</span><span>● READY</span></div>
        <div class="mono" style="font-size:21px">Esperando jugadores</div>
      </div>
      <div class="server-node-card ready">
        <div style="display:flex;justify-content:space-between"><span>GS-03</span><span>● READY</span></div>
        <div class="mono" style="font-size:21px">Esperando jugadores</div>
      </div>
      <div class="server-node-card allocated">
        <div style="display:flex;justify-content:space-between"><span>GS-04</span><span>⚔️ ALLOCATED</span></div>
        <div class="mono" style="font-size:21px">Partida 5v5 (UDP directo)</div>
      </div>
      <div class="server-node-card allocated">
        <div style="display:flex;justify-content:space-between"><span>GS-05</span><span>⚔️ ALLOCATED</span></div>
        <div class="mono" style="font-size:21px">Partida 5v5 (UDP directo)</div>
      </div>
      <div class="server-node-card allocated">
        <div style="display:flex;justify-content:space-between"><span>GS-06</span><span>⚔️ ALLOCATED</span></div>
        <div class="mono" style="font-size:21px">Partida 5v5 (UDP directo)</div>
      </div>
    </div>
  </div>
  <div class="mini-note">🔒 <strong>Seguridad y Ciclo de Vida:</strong> Agones aísla cada contenedor con <code>hostPort</code> (no <code>hostNetwork</code>), protege la IP con proxies UDP (Quilkin / DDoS) y empaqueta partidas activas para apagar nodos vacíos sin cortar a nadie.</div>
</div>`,

/* ── 23 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-lesson">
  <span class="slide-tag c-blue">WORLD 3 · LECCIÓN</span>
  <div class="lesson-icon">🎯</div>
  <p class="lesson-quote">
    Kubernetes es la plataforma universal.<br><br>
    Agones es la capa que adapta Kubernetes al ciclo de vida y a la red de baja latencia de los videojuegos.
  </p>
  <div class="pills">
    <span class="pill c-cyan" style="border-color:var(--cyan)">Kubernetes: La base de contenedores</span>
    <span class="pill c-blue" style="border-color:var(--blue)">Agones: Ciclo de vida + UDP directo</span>
    <span class="pill c-green" style="border-color:var(--green)">Open Source / CNCF: Sin vendor lock-in</span>
  </div>
</div>`,

/* ── 24 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-hero">
  <div class="hero-left">
    <span class="world-badge c-yellow">WORLD 4</span>
    <img src="images/pokemongo.jpg" alt="Pokémon GO" class="hero-art-img" />
  </div>
  <div class="hero-right">
    <span class="hero-world-num">WORLD 4 / 4</span>
    <h1 class="hero-title c-yellow">POKÉMON GO</h1>
    <span class="hero-dev mono">NIANTIC · 2016</span>
    <div class="hero-question" style="border-color:var(--yellow)">
      <strong class="c-yellow">DESAFÍO:</strong><br>
      ¿Qué ocurre cuando aparecen 50 veces más jugadores de lo previsto en el peor de los casos?
    </div>
  </div>
</div>`,

/* ── 25 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-content">
  <span class="slide-tag c-yellow">WORLD 4 · POKÉMON GO</span>
  <h1 class="slide-title c-yellow">EL PICO DE TRÁFICO VIRAL</h1>
  <p class="slide-subtitle">CUANDO EL ÉXITO SUPERA TODAS LAS PREVISIONES</p>
  <div class="two-col w-full">
    <div style="display:flex;flex-direction:column;justify-content:center;gap:16px;">
      <ul class="feature-list" style="font-size:21px;gap:14px;">
        <li><strong>Fenómeno cultural mundial:</strong> Más de 500 millones de descargas en sus primeros meses.</li>
        <li><strong>Línea naranja (1X):</strong> Tráfico objetivo estimado para un lanzamiento exitoso.</li>
        <li><strong>Línea roja (5X):</strong> El 'peor escenario posible' calculado por ingeniería.</li>
        <li><strong>Línea verde vertical (50X):</strong> El tráfico real... <strong>50 veces</strong> la previsión inicial y <strong>10 veces</strong> el peor caso.</li>
      </ul>
      <div class="mini-note" style="background:rgba(255,215,0,0.08);border-color:var(--yellow);margin-top:8px;">
        ⚠️ El mayor reto de infraestructura de la historia móvil: ¿Cómo evitar el colapso total?
      </div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;">
      <div style="background:var(--surface);border:2px solid rgba(255,215,0,0.4);border-radius:14px;padding:14px;box-shadow:var(--glow-yellow);text-align:center;width:100%;">
        <img src="images/pokemongo_traffic.png" alt="Cloud Datastore Transactions Per Second - Pokemon GO" style="width:100%;max-height:280px;object-fit:contain;border-radius:8px;display:block;margin:0 auto;" />
        <div class="mono mt-8" style="font-size:21px;color:var(--yellow);font-weight:600;">
          📊 Tráfico real publicado por Google Cloud (50X)
        </div>
      </div>
    </div>
  </div>
</div>`,

/* ── 26 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-yellow">WORLD 4 · INFRAESTRUCTURA EN TIEMPO REAL</span>
  <h1 class="slide-title c-yellow">¿CÓMO ABSORBIÓ LA NUBE EL IMPACTO?</h1>
  <p class="slide-subtitle">GKE (CELDAS GEOLOCALIZADAS S2) + CLOUD DATASTORE + SRE</p>
  <div class="two-col w-full">
    <div class="tech-intro-card" style="border-color:var(--cyan)">
      <span class="card-label c-cyan">☸️ CÓMPUTO Y MAPA VIVO: GKE + CELDAS S2</span>
      <p class="card-body" style="font-size:21px;line-height:1.6">
        <strong>El mayor clúster de GKE del mundo:</strong><br>
        Su <em>Spatial Query Backend</em> divide el planeta en <strong>celdas espaciales S2</strong> en memoria para responder al instante qué Pokémon, Poképaradas y Gimnasios rodean tu GPS.
      </p>
    </div>
    <div class="tech-intro-card" style="border-color:var(--green)">
      <span class="card-label c-green">📁 ALMACENAMIENTO: CLOUD DATASTORE</span>
      <p class="card-body" style="font-size:21px;line-height:1.6">
        <strong>Base de datos NoSQL Serverless:</strong><br>
        Escaló automáticamente para absorber el pico 50X de mochilas, capturas e inventarios individuales por entrenador.
      </p>
    </div>
  </div>
  <div class="mini-note mt-8" style="background:rgba(255,215,0,0.08);border-color:var(--yellow);width:100%;text-align:center;">
    🤝 Ingenieros de Niantic y Google SRE trabajaron codo con codo inyectando capacidad conforme despertaba cada huso horario.
  </div>
</div>`,

/* ── 27 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">¿CÓMO TRANSPORTO MILLONES DE EVENTOS?</h1>
  <p class="slide-subtitle">CLOUD PUB/SUB</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">MENSAJERÍA ASÍNCRONA DESACOPLADA</span>
      <p class="card-body">
        Los <strong>Productores</strong> publican millones de acciones y estados GPS por segundo sin bloquear el mapa en vivo.
      </p>
      <p class="card-body">
        Los <strong>Consumidores</strong> leen y procesan esos eventos en paralelo a su propio ritmo.
      </p>
    </div>
    <div class="stream-pipeline-box">
      <div class="pipeline-node" style="border-color:var(--yellow)">
        <span class="mono">🎮 50M Entrenadores (GPS + Acciones)</span>
        <span class="pixel c-yellow" style="font-size:21px">EVENTOS</span>
      </div>
      <div style="text-align:center;color:var(--cyan);font-size:22px">⬇ Millones de mensajes/seg</div>
      <div class="pipeline-node" style="border-color:var(--cyan);background:rgba(0,240,255,0.08)">
        <span class="pixel c-cyan" style="font-size:21px">CLOUD PUB/SUB TOPIC</span>
      </div>
      <div style="text-align:center;color:var(--green);font-size:22px">⬇ Fan-out en paralelo</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div class="pipeline-node" style="border-color:var(--green);font-size:21px;padding:8px">Spawns</div>
        <div class="pipeline-node" style="border-color:var(--magenta);font-size:21px;padding:8px">Analytics</div>
        <div class="pipeline-node" style="border-color:var(--orange);font-size:21px;padding:8px">Anti-Cheat GPS</div>
      </div>
    </div>
  </div>
</div>`,

/* ── 28 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA · GEOLOCALIZACIÓN EN STREAMING</span>
  <h1 class="slide-title c-cyan">¿CÓMO LIMPIO Y ANALIZO EL STREAM GPS?</h1>
  <p class="slide-subtitle">CLOUD DATAFLOW (APACHE BEAM)</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">LIMPIEZA GEOESPACIAL Y ANTI-CHEAT</span>
      <p class="card-body">
        Ejecuta pipelines de <strong>Apache Beam</strong> en ventanas de tiempo sobre millones de estados de posición que llegan por Pub/Sub.
      </p>
      <p class="card-body">
        <strong>Limpieza y Anti-Spoofing:</strong> Detecta en tiempo real señales GPS imposibles (ej. capturar en Madrid y 5 segundos después en Tokio) y vuelca entre 5 y 10 TB/día de actividad limpia a Bigtable y BigQuery.
      </p>
    </div>
    <div class="stream-pipeline-box">
      <div class="pipeline-node" style="border-color:var(--cyan)">
        <span>📍 Señales GPS y Eventos (Pub/Sub)</span>
        <span class="mono c-cyan">RAW STREAM</span>
      </div>
      <div style="text-align:center;color:var(--magenta);font-size:22px">⬇ Ventanas temporales</div>
      <div class="pipeline-node" style="border-color:var(--magenta);background:rgba(255,45,141,0.08)">
        <span class="pixel c-magenta" style="font-size:21px">APACHE BEAM (DATAFLOW)</span>
        <span class="mono" style="font-size:21px">Limpiar GPS · Cazar Spoofing</span>
      </div>
      <div style="text-align:center;color:var(--yellow);font-size:22px">⬇ Datos verificados</div>
      <div class="pipeline-node" style="border-color:var(--yellow)">
        <span class="pixel c-yellow" style="font-size:21px">ANTI-CHEAT / BIGQUERY</span>
      </div>
    </div>
  </div>
</div>`,

/* ── 29 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-yellow">TECNOLOGÍA · EVOLUCIÓN</span>
  <h1 class="slide-title c-yellow">DATASTORE (NoSQL) vs SPANNER (RELACIONAL)</h1>
  <p class="slide-subtitle">¿POR QUÉ NIANTIC MIGRÓ DESPUÉS A CLOUD SPANNER?</p>
  <div class="two-col w-full">
    <div class="tech-intro-card" style="border-color:var(--green)">
      <span class="card-label c-green">1. LANZAMIENTO: CLOUD DATASTORE (NoSQL)</span>
      <p class="card-body">
        📁 <strong>El archivador de carpetas independientes:</strong><br>
        Esquema documental por entrenador y escalado horizontal instantáneo.
      </p>
      <p class="card-body" style="font-size:21px;color:var(--dim)">
        ✓ Perfecto para el pico 50X: guardar millones de Pokédex y capturas individuales sin bloqueos.
      </p>
    </div>
    <div class="tech-intro-card" style="border-color:var(--yellow)">
      <span class="card-label c-yellow">2. EVOLUCIÓN: CLOUD SPANNER (RELACIONAL)</span>
      <p class="card-body">
        🏛️ <strong>Transacciones ACID entre jugadores:</strong><br>
        Tablas relacionales con consistencia global estricta.
      </p>
      <p class="card-body" style="font-size:21px;color:var(--dim)">
        ✓ Imprescindible al añadir <strong>Intercambios de Pokémon, PvP y Amigos</strong> sin duplicar ni perder criaturas.
      </p>
    </div>
  </div>
  <div class="mini-note mt-8" style="background:rgba(255,215,0,0.08);border-color:var(--yellow);width:100%;text-align:center;">
    🚀 Niantic migró en caliente miles de millones de registros de Datastore a Cloud Spanner sin apagar el juego.
  </div>
</div>`,

/* ── 30 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-lesson">
  <span class="slide-tag c-yellow">WORLD 4 · LECCIÓN</span>
  <div class="lesson-icon">⚡</div>
  <p class="lesson-quote">
    Una infraestructura elástica para absorber lo inesperado.<br><br>
    Una arquitectura viva para evolucionar con tu juego.
  </p>
  <div class="pills">
    <span class="pill c-cyan" style="border-color:var(--cyan)">GKE + Celdas S2: Mapa elástico</span>
    <span class="pill c-yellow" style="border-color:var(--yellow)">Datastore ➔ Spanner: Evolución en vivo</span>
    <span class="pill c-magenta" style="border-color:var(--magenta)">Pub/Sub + Beam: Limpieza GPS en streaming</span>
  </div>
</div>`,

/* ── 31 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-diagram">
  <span class="slide-tag c-yellow">RESUMEN GLOBAL</span>
  <h1 class="slide-title c-yellow">EL MAPA DE TECNOLOGÍAS EN LA NUBE</h1>
  <div class="tech-matrix-10">
    <div class="tech-tile" style="border-color:var(--pink)">
      <span class="tech-tile-name c-pink">REMOTE CONFIG</span>
      <span class="tech-tile-q">¿Cómo modifico parámetros en tiempo real?</span>
    </div>
    <div class="tech-tile" style="border-color:var(--pink)">
      <span class="tech-tile-name c-pink">FIREBASE ANALYTICS</span>
      <span class="tech-tile-q">¿Cómo mido la interacción de los usuarios?</span>
    </div>
    <div class="tech-tile" style="border-color:var(--orange)">
      <span class="tech-tile-name c-orange">BIGQUERY</span>
      <span class="tech-tile-q">¿Cómo analizo petabytes de información?</span>
    </div>
    <div class="tech-tile" style="border-color:var(--cyan)">
      <span class="tech-tile-name c-cyan">GKE</span>
      <span class="tech-tile-q">¿Dónde despliego y escalo en contenedores?</span>
    </div>
    <div class="tech-tile" style="border-color:var(--yellow)">
      <span class="tech-tile-name c-yellow">CLOUD SPANNER</span>
      <span class="tech-tile-q">¿Dónde guardo datos estructurados globales?</span>
    </div>
    <div class="tech-tile" style="border-color:var(--green)">
      <span class="tech-tile-name c-green">REDIS / MEMORYSTORE</span>
      <span class="tech-tile-q">¿Cómo accedo en memoria en menos de 1ms?</span>
    </div>
    <div class="tech-tile" style="border-color:var(--blue)">
      <span class="tech-tile-name c-blue">AGONES</span>
      <span class="tech-tile-q">¿Cómo protejo la partida y conecto por UDP directo?</span>
    </div>
    <div class="tech-tile" style="border-color:var(--yellow)">
      <span class="tech-tile-name c-yellow">CLOUD DATASTORE</span>
      <span class="tech-tile-q">¿Cómo guardo documentos NoSQL elásticos?</span>
    </div>
    <div class="tech-tile" style="border-color:var(--cyan)">
      <span class="tech-tile-name c-cyan">CLOUD PUB/SUB</span>
      <span class="tech-tile-q">¿Cómo transporto millones de mensajes?</span>
    </div>
    <div class="tech-tile" style="border-color:var(--green)">
      <span class="tech-tile-name c-green">DATAFLOW (BEAM)</span>
      <span class="tech-tile-q">¿Cómo limpio y proceso el stream GPS en vivo?</span>
    </div>
  </div>
</div>`,

/* ── 32 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-diagram">
  <span class="slide-tag c-cyan">CONCLUSIÓN ARQUITECTÓNICA</span>
  <h1 class="slide-title c-cyan">UN VIDEOJUEGO ES UN SISTEMA DISTRIBUIDO</h1>
  <div class="distributed-galaxy">
    <div class="galaxy-center">🎮<br>VIDEO<br>JUEGO</div>
    <div class="galaxy-planet c-pink" style="top:0.0%;left:50.0%">REMOTE CONFIG</div>
    <div class="galaxy-planet c-pink" style="top:9.5%;left:79.4%">ANALYTICS</div>
    <div class="galaxy-planet c-orange" style="top:34.5%;left:97.6%">BIGQUERY</div>
    <div class="galaxy-planet c-cyan" style="top:65.5%;left:97.6%">GKE</div>
    <div class="galaxy-planet c-yellow" style="top:90.5%;left:79.4%">SPANNER</div>
    <div class="galaxy-planet c-green" style="top:100.0%;left:50.0%">REDIS</div>
    <div class="galaxy-planet c-blue" style="top:90.5%;left:20.6%">AGONES</div>
    <div class="galaxy-planet c-yellow" style="top:65.5%;left:2.4%">DATASTORE</div>
    <div class="galaxy-planet c-cyan" style="top:34.5%;left:2.4%">PUB/SUB</div>
    <div class="galaxy-planet c-green" style="top:9.5%;left:20.6%">DATAFLOW</div>
  </div>
  <p class="meme-footer c-cyan mt-8" style="margin-top:20px;font-size:22px;text-align:center;">
    La magia de la nube: hacer que lo extremadamente complejo parezca invisible.
  </p>
</div>`,

/* ── 33 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-refs">
  <span class="slide-tag c-cyan">FUENTES Y ENLACES</span>
  <h1 class="slide-title c-cyan">REFERENCIAS OFICIALES</h1>
  <div class="refs-grid-4">
    <div class="ref-group" style="border-color:var(--green)">
      <span class="ref-title c-green">FRUIT NINJA / HALFBRICK</span>
      <a href="https://firebase.google.com/case-studies/halfbrick-personalization" target="_blank" rel="noopener">Firebase Case Study: Halfbrick</a>
      <a href="https://firebase.google.com/products/remote-config" target="_blank" rel="noopener">Firebase Remote Config</a>
    </div>
    <div class="ref-group" style="border-color:var(--red)">
      <span class="ref-title c-red">STREET FIGHTER 6 / CAPCOM</span>
      <a href="https://cloud.google.com/blog/ja/topics/customers/capcom-building-a-cross-play-platform-with-cloud-spanner-and-gke/" target="_blank" rel="noopener">GCP Case Study: Capcom SF6</a>
      <a href="https://www.youtube.com/watch?v=HRcHnBhhF-k" target="_blank" rel="noopener">Next Tokyo '23: SF6 Architecture</a>
      <a href="https://cloud.google.com/spanner" target="_blank" rel="noopener">Google Cloud Spanner</a>
    </div>
    <div class="ref-group" style="border-color:var(--blue)">
      <span class="ref-title c-blue">RAINBOW SIX MOBILE / AGONES</span>
      <a href="https://agones.dev/site/docs/overview/" target="_blank" rel="noopener">Agones Project (agones.dev)</a>
      <a href="https://www.youtube.com/watch?v=rZDvc_1FyHE" target="_blank" rel="noopener">Ubisoft: Rainbow Six on Google Cloud</a>
    </div>
    <div class="ref-group" style="border-color:var(--yellow)">
      <span class="ref-title c-yellow">POKÉMON GO / NIANTIC</span>
      <a href="https://cloud.google.com/blog/topics/developers-practitioners/how-pokemon-go-scales-millions-requests" target="_blank" rel="noopener">GCP Blog: Pokémon GO Architecture</a>
      <a href="https://beamsummit.org/sessions/fault-tolerant-integration/" target="_blank" rel="noopener">Beam Summit: Niantic Anti-Cheat</a>
      <a href="https://cloud.google.com/dataflow" target="_blank" rel="noopener">Google Cloud Dataflow</a>
    </div>
  </div>
</div>`,

/* ── 34 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-cover slide-end">
  <span class="corner-deco tl">P1</span>
  <span class="corner-deco tr">HI-SCORE: 999990</span>
  <span class="corner-deco br">GCP × GAMING</span>
  <span class="corner-deco bl">GAME OVER</span>
  
  <p class="game-over blink-slow" style="font-size:clamp(24px,3.2vw,40px);margin-bottom:18px;">¡GRACIAS! · ¿HABLAMOS?</p>

  <div class="cover-main-title" style="margin-bottom:10px;">
    <span class="cover-line-insert">INSERT COIN</span>
    <span class="cover-line-play">/ PLAY /</span>
    <span class="cover-line-gcp">GOOGLE CLOUD</span>
  </div>
  
  <div class="cover-lives-row" style="margin-bottom:16px;">
    <span class="cover-hearts">♥ ♥ ♥</span>
  </div>
  
  <div class="profile-qr-box" style="margin:0 auto;">
    <div class="qr-frame">
      <img src="images/qr_linkedin.jpg" alt="QR Contacto" />
    </div>
    <span class="pixel c-cyan qr-label">📱 ESCANEA PARA CONECTAR</span>
  </div>
</div>`

]; // end SLIDES

/* ── NAVIGATION STATE ─────────────────────────────────────── */
let currentSlide = 0;
const totalSlides = SLIDES.length;

/* ── DOM REFS ─────────────────────────────────────────────── */
const container   = document.getElementById('slides-container');
const progressFill= document.getElementById('progress-fill');
const currentEl   = document.getElementById('current-slide');
const totalEl     = document.getElementById('total-slides');
const btnPrev     = document.getElementById('btn-prev');
const btnNext     = document.getElementById('btn-next');
const keyHint     = document.getElementById('key-hint');

/* ── INIT ─────────────────────────────────────────────────── */
function init() {
  totalEl.textContent = totalSlides;

  // Inject all slides as DOM nodes
  SLIDES.forEach((html, i) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html.trim();
    const slideEl = wrapper.firstElementChild;
    slideEl.dataset.index = i;
    container.appendChild(slideEl);
  });

  goTo(0);
}

/* ── GO TO SLIDE ──────────────────────────────────────────── */
function goTo(index) {
  const slides = container.querySelectorAll('.slide');

  // Deactivate current
  slides.forEach(s => s.classList.remove('active'));

  // Clamp
  currentSlide = Math.max(0, Math.min(index, totalSlides - 1));

  // Activate target
  slides[currentSlide].classList.add('active');

  // Update UI
  const pct = totalSlides > 1 ? (currentSlide / (totalSlides - 1)) * 100 : 100;
  progressFill.style.width = pct + '%';
  currentEl.textContent = currentSlide + 1;

  btnPrev.disabled = currentSlide === 0;
  btnNext.disabled = currentSlide === totalSlides - 1;

  // Key hint solo en la primera slide
  if (keyHint) {
    if (currentSlide === 0) {
      keyHint.style.display = 'block';
      keyHint.style.opacity = '0.85';
    } else {
      keyHint.style.display = 'none';
      keyHint.style.opacity = '0';
    }
  }
}

/* ── NAV HANDLERS ─────────────────────────────────────────── */
btnPrev.addEventListener('click', () => goTo(currentSlide - 1));
btnNext.addEventListener('click', () => goTo(currentSlide + 1));

document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowLeft':
      goTo(currentSlide - 1);
      break;
    case 'ArrowRight':
    case ' ':
      e.preventDefault();
      goTo(currentSlide + 1);
      break;
    case 'f':
    case 'F':
      toggleFullscreen();
      break;
  }
});

/* ── FULLSCREEN ───────────────────────────────────────────── */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

/* ── TOUCH / SWIPE SUPPORT ────────────────────────────────── */
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    dx < 0 ? goTo(currentSlide + 1) : goTo(currentSlide - 1);
  }
}, { passive: true });

/* ── START ────────────────────────────────────────────────── */
init();
