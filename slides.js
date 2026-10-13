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
          <span><strong>Desarrolladora e Ingeniera de Plataforma</strong> (19 años de experiencia)</span>
        </div>
      </div>
      <div class="profile-qr-box">
        <div class="qr-frame">
          <img src="images/qr_linkedin.jpg" alt="QR Contacto" />
        </div>
        <span class="pixel c-cyan qr-label">📱 ESCANEA PARA CONECTAR</span>
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
          • <strong class="c-white">Combate 1v1:</strong> Conexión directa P2P (Rollback Netcode a 60 FPS).<br>
          • <strong class="c-white">Salón y Lobbies:</strong> Estado 3D, avatares y modo espectador en GKE.<br>
          • <strong class="c-white">Rankings y Compras:</strong> Sincronización global sin discrepancias.
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
          En software hacemos lo mismo: <strong>Capcom</strong> empaqueta cada pieza del juego (salones 3D, chat, login, matchmaking y retransmisión de combates) en su propio <strong>Contenedor (Docker)</strong> con todo su código y dependencias.
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
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">KUBERNETES</h1>
  <p class="slide-subtitle">EL TIMONEL DEL PUERTO · ¿QUÉ ES UN CLÚSTER?</p>
  <div class="k8s-cluster-pro">
    <div class="k8s-cp-banner">
      <span class="k8s-cp-tag">🧠 CONTROL PLANE (El Cerebro)</span>
      <div class="k8s-cp-badges">
        <span class="k8s-badge">API Server</span>
        <span class="k8s-badge">Scheduler</span>
        <span class="k8s-badge">Controller</span>
      </div>
    </div>
    <div class="k8s-nodes-row">
      <div class="k8s-node-card">
        <div class="k8s-node-header">🖥 NODE 1 (Servidor)</div>
        <div class="k8s-pods-grid">
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Battle Hub</span></div>
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Match</span></div>
        </div>
      </div>
      <div class="k8s-node-card">
        <div class="k8s-node-header">🖥 NODE 2 (Servidor)</div>
        <div class="k8s-pods-grid">
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Chat</span></div>
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Rank</span></div>
        </div>
      </div>
      <div class="k8s-node-card">
        <div class="k8s-node-header">🖥 NODE 3 (Servidor)</div>
        <div class="k8s-pods-grid">
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Auth</span></div>
          <div class="k8s-pod-box"><span>📦 Pod</span><span>Match</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="mini-note">💡 Un <strong>Pod</strong> es la unidad mínima de ejecución: aloja uno o más contenedores que comparten red y almacenamiento.</div>
</div>`,

/* ── 14 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">GKE · GOOGLE KUBERNETES ENGINE</h1>
  <p class="slide-subtitle">KUBERNETES COMO SERVICIO GESTIONADO</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">¿QUÉ HACE GKE POR TI?</span>
      <p class="card-body">
        Google se encarga de la infraestructura: actualizaciones, seguridad, parches y escalabilidad del clúster.
      </p>
      <p class="card-body">
        El desarrollador solo se enfoca en desplegar el código del juego.
      </p>
    </div>
    <div class="gke-scale-visual">
      <span class="card-label c-yellow">ESCALA REAL EN STREET FIGHTER 6</span>
      <div class="scale-step-row">
        <div class="scale-node-box">
          <div style="font-size:28px">🌍 4 Regiones</div>
          <div class="mono c-dim" style="font-size:21px">US · SA · Asia · EU</div>
          <div class="c-green" style="font-size:21px;margin-top:4px">~20 Microservicios</div>
        </div>
        <div class="c-cyan pixel" style="font-size:21px">━━▶</div>
        <div class="scale-node-box active-scale">
          <div style="font-size:28px">🔥 120K</div>
          <div class="mono c-yellow" style="font-size:21px">Pico simultáneo</div>
          <div class="c-cyan" style="font-size:21px;margin-top:4px">Auto-escalado GKE</div>
        </div>
      </div>
      <div class="mono" style="font-size:21px;color:var(--dim);text-align:center">
        ⚡ GKE escala los pods automáticamente en segundos según la demanda global.
      </div>
    </div>
  </div>
</div>`,

/* ── 15 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">¿DÓNDE GUARDO MIS DATOS GLOBALES?</h1>
  <p class="slide-subtitle">CLOUD SPANNER</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">BASE DE DATOS PLANETARIA</span>
      <p class="card-body">
        Garantiza <strong>consistencia global estricta (ACID)</strong> a escala masiva.
      </p>
      <p class="card-body">
        Si dos jugadores terminan una partida al mismo tiempo en continentes distintos, ambos ven el ranking mundial actualizado sin desajustes.
      </p>
    </div>
    <div class="spanner-globe-box">
      <span class="card-label c-cyan">SINCRONIZACIÓN MULTI-REGIÓN</span>
      <div class="global-nodes-flow">
        <div class="global-region-node">
          <span class="region-flag">🇪🇸</span>
          <span class="region-name">MADRID</span>
          <span class="region-status">Rank Sync ✓</span>
        </div>
        <div class="sync-beam">
          <span>⚡ TrueTime</span>
          <span>◀━━━━▶</span>
        </div>
        <div class="global-region-node">
          <span class="region-flag">🇯🇵</span>
          <span class="region-name">TOKIO</span>
          <span class="region-status">Rank Sync ✓</span>
        </div>
      </div>
      <div class="mono" style="font-size:21px;color:var(--dim);text-align:center">
        🌍 Los relojes atómicos y GPS de Google (TrueTime) garantizan orden y consistencia absoluta.
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
        <span class="speed-badge c-red" style="background:rgba(255,51,85,0.15)">DISCO / BD TRADICIONAL</span>
        <span style="font-size:28px">🐢</span>
      </div>
      <div class="speed-val c-red">~ 50 ms</div>
      <p style="font-size:21px;color:var(--dim)">Demasiado lento para el estado en vivo de salas de combate o matchmaking activo.</p>
    </div>
    <div class="speed-card good">
      <div class="speed-header">
        <span class="speed-badge c-green" style="background:rgba(57,255,20,0.15)">REDIS (EN MEMORIA)</span>
        <span style="font-size:28px">⚡</span>
      </div>
      <div class="speed-val c-green">&lt; 1 ms</div>
      <p style="font-size:21px;color:var(--dim)">Acceso ultra-rápido en memoria RAM. Ideal para salas activas, sesiones y rankings calientes.</p>
    </div>
  </div>
  <div class="apply-box w-full" style="border-color:var(--red)">
    <span class="apply-label c-red">EN STREET FIGHTER 6</span>
    Las salas del Battle Hub y las sesiones activas se guardan en Redis para que moverte e interactuar se sienta 100% instantáneo.
  </div>
</div>`,

/* ── 17 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">¿CÓMO ANALIZO CANTIDADES ENORMES?</h1>
  <p class="slide-subtitle">BIGQUERY</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">DATA WAREHOUSE SERVERLESS</span>
      <p class="card-body">
        Capaz de ejecutar consultas SQL sobre <strong>Petabytes</strong> de datos en cuestión de segundos.
      </p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;font-size:21px">
        <div style="border:1px solid var(--cyan);padding:10px;border-radius:8px">
          <strong class="c-cyan">SPANNER</strong><br>Operacional (Ahora)
        </div>
        <div style="border:1px solid var(--yellow);padding:10px;border-radius:8px">
          <strong class="c-yellow">BIGQUERY</strong><br>Analítico (Histórico)
        </div>
      </div>
    </div>
    <div class="bq-funnel">
      <div class="bq-layer" style="border-color:var(--cyan);background:rgba(0,240,255,0.08)">
        <span class="mono">🎮 100M Partidas jugadas</span>
        <span class="c-cyan pixel" style="font-size:21px">STREAM</span>
      </div>
      <div class="c-yellow" style="font-size:24px">⬇</div>
      <div class="bq-layer" style="border-color:var(--yellow);background:rgba(255,215,0,0.08)">
        <span class="mono">📊 BIGQUERY SQL SCAN</span>
        <span class="c-yellow pixel" style="font-size:21px">3 SEGUNDOS</span>
      </div>
      <div class="c-green" style="font-size:24px">⬇</div>
      <div style="display:flex;gap:10px;width:100%">
        <div class="bq-layer" style="border-color:var(--magenta);padding:8px 12px;font-size:21px">Balance luchadores</div>
        <div class="bq-layer" style="border-color:var(--green);padding:8px 12px;font-size:21px">Retención</div>
      </div>
    </div>
  </div>
</div>`,

/* ── 18 SLIDE ────────────────────────────────────────── */
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

/* ── 19 SLIDE ────────────────────────────────────────── */
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

/* ── 20 SLIDE ────────────────────────────────────────── */
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

/* ── 21 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-meme" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;">
  <img src="images/meme_six_invitational.jpg" alt="Meme Six Invitational vs Kubernetes" style="max-height:500px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.6);border:2px solid rgba(255,255,255,0.15);" />
  <p class="meme-footer c-yellow" style="margin:0;font-size:22px;">... Por eso Ubisoft y Google crearon AGONES</p>
</div>`,

/* ── 22 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">AGONES</h1>
  <p class="slide-subtitle">ORQUESTADOR DE GAME SERVERS EN KUBERNETES</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">KUBERNETES HABLA EL IDIOMA DEL JUEGO</span>
      <p class="card-body">
        Proyecto open source (Google Cloud + Ubisoft) hoy en la <strong>CNCF</strong>.
      </p>
      <ul class="feature-list mt-8" style="font-size:21px">
        <li><strong>Ciclo de vida:</strong> Impide que Kubernetes mate contenedores con partidas en curso.</li>
        <li><strong>Conexión UDP directa (<code>hostPort</code>):</strong> Conecta a los jugadores directo al contenedor evitando la latencia del balanceador de carga.</li>
      </ul>
    </div>
    <div class="stream-pipeline-box">
      <div class="pipeline-node" style="border-color:var(--green); display:grid; grid-template-columns:170px 1fr; align-items:center; gap:16px;">
        <span class="pixel c-green" style="font-size:20px">READY</span>
        <span class="mono" style="font-size:19px">Pool de servidores en espera</span>
      </div>
      <div class="pipeline-node" style="border-color:var(--magenta); display:grid; grid-template-columns:170px 1fr; align-items:center; gap:16px;">
        <span class="pixel c-magenta" style="font-size:20px">ALLOCATED</span>
        <span class="mono" style="font-size:19px">Reserva atómica + IP:Puerto directo</span>
      </div>
      <div class="pipeline-node" style="border-color:var(--yellow); display:grid; grid-template-columns:170px 1fr; align-items:center; gap:16px;">
        <span class="pixel c-yellow" style="font-size:20px">SHUTDOWN</span>
        <span class="mono" style="font-size:19px">Destrucción limpia al terminar</span>
      </div>
    </div>
  </div>
</div>`,

/* ── 23 SLIDE ────────────────────────────────────────── */
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
        <div class="mono" style="font-size:21px">Partida 5v5 en curso</div>
      </div>
      <div class="server-node-card allocated">
        <div style="display:flex;justify-content:space-between"><span>GS-05</span><span>⚔️ ALLOCATED</span></div>
        <div class="mono" style="font-size:21px">Partida 5v5 en curso</div>
      </div>
      <div class="server-node-card allocated">
        <div style="display:flex;justify-content:space-between"><span>GS-06</span><span>⚔️ ALLOCATED</span></div>
        <div class="mono" style="font-size:21px">Partida 5v5 en curso</div>
      </div>
    </div>
  </div>
  <div class="mini-note">Agones asegura que ningún servidor ocupado se apague durante autoescalados y aísla su red con <code>hostPort</code>.</div>
</div>`,

/* ── 24 SLIDE ────────────────────────────────────────── */
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

/* ── 25 SLIDE ────────────────────────────────────────── */
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

/* ── 26 SLIDE ────────────────────────────────────────── */
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

/* ── 27 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-yellow">WORLD 4 · INFRAESTRUCTURA</span>
  <h1 class="slide-title c-yellow">¿CÓMO ABSORBIÓ LA NUBE EL IMPACTO?</h1>
  <p class="slide-subtitle">GKE + CLOUD DATASTORE + COLABORACIÓN SRE</p>
  <div class="two-col w-full">
    <div class="tech-intro-card" style="border-color:var(--cyan)">
      <span class="card-label c-cyan">☸️ CÓMPUTO: GKE (KUBERNETES)</span>
      <p class="card-body" style="font-size:21px;line-height:1.6">
        <strong>El mayor clúster de GKE del mundo:</strong><br>
        Desplegó y escaló automáticamente miles de nodos para procesar la lógica de juego, la geolocalización (en celdas espaciales S2) y los avatares en tiempo real.
      </p>
    </div>
    <div class="tech-intro-card" style="border-color:var(--green)">
      <span class="card-label c-green">📁 ALMACENAMIENTO: CLOUD DATASTORE</span>
      <p class="card-body" style="font-size:21px;line-height:1.6">
        <strong>Base de datos NoSQL Serverless:</strong><br>
        Escaló de forma automática para absorber millones de transacciones/segundo de mochilas, capturas e inventarios individuales.
      </p>
    </div>
  </div>
  <div class="mini-note mt-8" style="background:rgba(255,215,0,0.08);border-color:var(--yellow);width:100%;text-align:center;">
    🤝 Ingenieros de Niantic y Google SRE trabajaron codo con codo para inyectar capacidad en tiempo real en la red global de Google.
  </div>
</div>`,

/* ── 28 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">¿CÓMO TRANSPORTO MILLONES DE EVENTOS?</h1>
  <p class="slide-subtitle">CLOUD PUB/SUB</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">MENSAJERÍA ASÍNCRONA DESACOPLADA</span>
      <p class="card-body">
        Los <strong>Productores</strong> publican millones de acciones y estados GPS por segundo sin saber quién los procesará.
      </p>
      <p class="card-body">
        Los <strong>Consumidores</strong> leen los mensajes a su propio ritmo sin colapsar el juego.
      </p>
    </div>
    <div class="stream-pipeline-box">
      <div class="pipeline-node" style="border-color:var(--yellow)">
        <span class="mono">🎮 50M Entrenadores</span>
        <span class="pixel c-yellow" style="font-size:21px">EVENTOS</span>
      </div>
      <div style="text-align:center;color:var(--cyan);font-size:22px">⬇ Millones de mensajes/seg</div>
      <div class="pipeline-node" style="border-color:var(--cyan);background:rgba(0,240,255,0.08)">
        <span class="pixel c-cyan" style="font-size:21px">CLOUD PUB/SUB TOPIC</span>
      </div>
      <div style="text-align:center;color:var(--green);font-size:22px">⬇ Fan-out en paralelo</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div class="pipeline-node" style="border-color:var(--green);font-size:21px;padding:8px">Spawn</div>
        <div class="pipeline-node" style="border-color:var(--magenta);font-size:21px;padding:8px">Analytics</div>
        <div class="pipeline-node" style="border-color:var(--orange);font-size:21px;padding:8px">Anti-bot</div>
      </div>
    </div>
  </div>
</div>`,

/* ── 29 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-cyan">TECNOLOGÍA</span>
  <h1 class="slide-title c-cyan">¿CÓMO PROCESO EL STREAM DE DATOS?</h1>
  <p class="slide-subtitle">DATAFLOW (APACHE BEAM)</p>
  <div class="two-col w-full">
    <div class="tech-intro-card">
      <span class="card-label">PROCESAMIENTO Y LIMPIEZA GPS EN TIEMPO REAL</span>
      <p class="card-body">
        Ejecuta procesos de <strong>Apache Beam</strong> en pequeñas ventanas de tiempo para limpiar estados de posición GPS y detectar trampas al vuelo.
      </p>
      <p class="card-body">
        Auto-escala dinámicamente los workers según el volumen de mensajes que llegan desde Pub/Sub.
      </p>
    </div>
    <div class="stream-pipeline-box">
      <div class="pipeline-node" style="border-color:var(--cyan)">
        <span>📨 Eventos y Posición GPS (Pub/Sub)</span>
        <span class="mono c-cyan">RAW STREAM</span>
      </div>
      <div style="text-align:center;color:var(--magenta);font-size:22px">⬇ Ingesta continua</div>
      <div class="pipeline-node" style="border-color:var(--magenta);background:rgba(255,45,141,0.08)">
        <span class="pixel c-magenta" style="font-size:21px">DATAFLOW (APACHE BEAM)</span>
        <span class="mono" style="font-size:21px">Limpiar GPS · Filtrar Fraude</span>
      </div>
      <div style="text-align:center;color:var(--yellow);font-size:22px">⬇ Datos listos</div>
      <div class="pipeline-node" style="border-color:var(--yellow)">
        <span class="pixel c-yellow" style="font-size:21px">BIGQUERY / SPANNER</span>
      </div>
    </div>
  </div>
</div>`,

/* ── 30 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-tech">
  <span class="slide-tag c-yellow">TECNOLOGÍA · EVOLUCIÓN</span>
  <h1 class="slide-title c-yellow">DATASTORE (NoSQL) vs SPANNER (RELACIONAL)</h1>
  <p class="slide-subtitle">¿POR QUÉ NIANTIC MIGRÓ DESPUÉS A CLOUD SPANNER?</p>
  <div class="two-col w-full">
    <div class="tech-intro-card" style="border-color:var(--green)">
      <span class="card-label c-green">1. LANZAMIENTO: CLOUD DATASTORE (NoSQL)</span>
      <p class="card-body">
        📁 <strong>El archivador de carpetas independientes:</strong><br>
        Esquema flexible y escalado horizontal masivo instantáneo.
      </p>
      <p class="card-body" style="font-size:21px;color:var(--dim)">
        ✓ Perfecto para el pico 50X: guardar millones de mochilas, Pokéballs y capturas individuales sin bloqueos.
      </p>
    </div>
    <div class="tech-intro-card" style="border-color:var(--yellow)">
      <span class="card-label c-yellow">2. EVOLUCIÓN: CLOUD SPANNER (RELACIONAL)</span>
      <p class="card-body">
        🏛️ <strong>La gran biblioteca conectada (~5.000 nodos):</strong><br>
        Esquemas relacionales con índices secundarios consistentes y transacciones ACID globales.
      </p>
      <p class="card-body" style="font-size:21px;color:var(--dim)">
        ✓ Mayor control de escala y soporte para relaciones entre jugadores (<strong>Amigos, Intercambios, PvP</strong>).
      </p>
    </div>
  </div>
  <div class="mini-note mt-8" style="background:rgba(255,215,0,0.08);border-color:var(--yellow);width:100%;text-align:center;">
    🚀 Niantic migró en vivo de Datastore a ~5.000 nodos de Cloud Spanner (soportando hasta ~1M transacciones/seg en GO Fest).
  </div>
</div>`,

/* ── 31 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-diagram">
  <span class="slide-tag c-yellow">WORLD 4 · POKÉMON GO</span>
  <h1 class="slide-title c-yellow">ARQUITECTURA DE ESCALA PLANETARIA</h1>
  <div class="sf6-arch-visual">
    <div class="client-row" style="display:flex;gap:12px;justify-content:center;">
      <span class="client-pill" style="border-color:var(--yellow);background:rgba(255,215,0,0.1)">📱 Millones de Jugadores GPS</span>
      <span class="client-pill" style="border-color:var(--cyan);background:rgba(0,240,255,0.1)">🌐 Cloud CDN & Load Balancer</span>
    </div>
    <div style="text-align:center;font-size:22px;color:var(--dim)">⬇ Hasta 1M peticiones/segundo (GO Fest) ⬇</div>
    <div class="backend-core-box">
      <div class="pixel c-cyan" style="font-size:21px">GKE · Miles de Contenedores de Lógica en Microservicios</div>
      <div class="mono" style="font-size:21px;color:var(--dim);margin-top:4px">Spawns en celdas espaciales S2 · Gimnasios · Incursiones</div>
    </div>
    <div style="text-align:center;font-size:22px;color:var(--dim)">⬇ Persistencia & Streaming Masivo ⬇</div>
    <div class="storage-grid-row">
      <div class="storage-card" style="border-color:var(--yellow)">
        <span class="pixel c-yellow" style="font-size:21px">DATASTORE ➔ SPANNER</span>
        <span style="font-size:21px;color:var(--dim)">NoSQL 50X ➔ Migración a Spanner (PvP e Intercambios consistentes)</span>
      </div>
      <div class="storage-card" style="border-color:var(--cyan)">
        <span class="pixel c-cyan" style="font-size:21px">PUB/SUB + DATAFLOW</span>
        <span style="font-size:21px;color:var(--dim)">Streaming continuo y limpieza anti-trampas de GPS con Apache Beam</span>
      </div>
      <div class="storage-card" style="border-color:var(--magenta)">
        <span class="pixel c-magenta" style="font-size:21px">BIGQUERY</span>
        <span style="font-size:21px;color:var(--dim)">Telemetría masiva, análisis de comportamiento y eventos globales</span>
      </div>
    </div>
  </div>
</div>`,

/* ── 32 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-lesson">
  <span class="slide-tag c-yellow">WORLD 4 · LECCIÓN</span>
  <div class="lesson-icon">⚡</div>
  <p class="lesson-quote">
    Una infraestructura elástica para absorber lo inesperado.<br><br>
    Una arquitectura viva para evolucionar con tu juego.
  </p>
  <div class="pills">
    <span class="pill c-cyan" style="border-color:var(--cyan)">GKE: Autoescalado elástico</span>
    <span class="pill c-yellow" style="border-color:var(--yellow)">Datastore ➔ Spanner: Evolución continua</span>
    <span class="pill c-magenta" style="border-color:var(--magenta)">Pub/Sub + Dataflow: Streaming en tiempo real</span>
  </div>
</div>`,

/* ── 33 SLIDE ────────────────────────────────────────── */
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
      <span class="tech-tile-q">¿Cómo respeto el ciclo de vida del juego?</span>
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
      <span class="tech-tile-name c-green">DATAFLOW</span>
      <span class="tech-tile-q">¿Cómo proceso datos en tiempo real?</span>
    </div>
  </div>
</div>`,

/* ── 34 SLIDE ────────────────────────────────────────── */
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

/* ── 35 SLIDE ────────────────────────────────────────── */
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

/* ── 36 SLIDE ────────────────────────────────────────── */
`<div class="slide slide-cover slide-end">
  <span class="corner-deco tl">P1</span>
  <span class="corner-deco tr">HI-SCORE: 999990</span>
  <span class="corner-deco br">GCP × GAMING</span>
  <span class="corner-deco bl">GAME OVER</span>
  
  <p class="game-over blink-slow" style="font-size:clamp(24px,3.2vw,40px);margin-bottom:18px;">¡GRACIAS! · ¿PREGUNTAS?</p>

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
