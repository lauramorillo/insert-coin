# INSERT COIN, PLAY GOOGLE CLOUD

## Guia de la presentacion

**Duracion estimada:** 45 minutos
**Archivo:** /Users/laura_morillo/.gemini/antigravity/scratch/insert-coin-play-gcp/index.html

## Navegacion

| Tecla | Accion |
|-------|--------|
| Flecha derecha / Space | Siguiente slide |
| Flecha izquierda | Slide anterior |
| F | Pantalla completa |
| Botones del ratón | Navegacion |

## Estructura de los 42 slides

### Portada y Presentación (01-03)
- 01: Cover INSERT COIN / PLAY GOOGLE CLOUD
- 02: SELECT YOUR GAME (agenda de 5 mundos)
- 03: PLAYER 1 · PROFILE (Laura Morillo-Velarde, GDE Google Cloud)

### WORLD 1 - Street Fighter 6 (04-13)
- 04: Hero slide
- 05: El juego (Battle Hub, cross-play)
- 06: NUEVA TECH: Contenedores (Docker) · De la logística marítima al software
- 07: NUEVA TECH: Kubernetes · El timonel del puerto
- 08: Kubernetes Cluster Diagram
- 09: NUEVA TECH: GKE (Google Kubernetes Engine)
- 10: NUEVA TECH: Cloud Spanner (Datos Globales Consistentes)
- 11: Spanner Sync (Sincronización Atómica Global)
- 12: NUEVA TECH: Redis / Memorystore (Velocidad Sub-Milisegundo)
- 13: NUEVA TECH: BigQuery (Telemetría y Analytics)
- 14: Lección

### WORLD 2 - Fruit Ninja (14-19)
- 14: Hero slide
- 15: El juego (LiveOps)
- 16: NUEVA TECH: Firebase
- 17: NUEVA TECH: Remote Config (Ad monetization + Rating prompts)
- 18: NUEVA TECH: Firebase Analytics (Flywheel +16% Ingresos)
- 19: Lección

### WORLD 3 - Pokemon GO (20-27)
- 20: Hero slide
- 21: El problema: El pico de tráfico viral (gráfico 50X)
- 22: ¿Cómo absorbió la nube el impacto? (GKE + Cloud Datastore + SRE)
- 23: NUEVA TECH: Cloud Pub/Sub
- 24: NUEVA TECH: Dataflow
- 25: EVOLUCIÓN: Datastore (NoSQL) vs Cloud Spanner (Relacional)
- 26: Arquitectura completa Pokemon GO (Datastore ➔ Spanner + CDN + Bigtable)
- 27: Lección

### WORLD 4 - Halloween Doodle (28-31)
- 28: Hero slide
- 29: Concepto Matchmaking
- 30: NUEVA TECH: Open Match
- 31: Lección

### WORLD 5 - Rainbow Six Mobile (32-38)
- 32: Hero slide
- 33: Concepto Dedicated Game Server (Servidor autoritativo)
- 34: MEME: Kubernetes vs Game Dev (El Pod que era una partida)
- 35: NUEVA TECH: Agones
- 36: Flota de Servidores Agones (Fleet / Allocation)
- 37: Ciclo completo: Jugador ➔ Open Match ➔ Agones
- 38: Lección

### Resumen y Cierre (39-42)
- 39: Mapa de tecnologías (11 herramientas)
- 40: Concepto final: Un videojuego es un sistema distribuido (La magia de la nube)
- 41: REFERENCIAS OFICIALES (12 enlaces a casos de estudio y charlas técnicas)
- 42: Cierre / Gracias / Preguntas / INSERT COIN / Código QR de contacto

## Tecnologias en orden de aparicion

| Tecnologia | Pregunta | Slide |
|------------|----------|-------|
| Contenedores (Docker) | ¿Cómo empaquetamos el juego? | 06 |
| Kubernetes | ¿Quién gestiona tantos contenedores? | 07-08 |
| GKE | Kubernetes como servicio gestionado | 09 |
| Cloud Spanner | ¿Dónde guardo mis datos globales consistentes? | 10 |
| Redis / Memorystore | ¿Cómo respondo en menos de 1ms? | 11 |
| BigQuery | ¿Cómo analizo cantidades enormes de partidas? | 12 |
| Firebase | Plataforma integral para apps móviles | 16 |
| Firebase Remote Config | ¿Cómo cambio el juego sin actualizarlo? | 17 |
| Firebase Analytics | ¿Qué está pasando en el juego? | 18 |
| Cloud Datastore | ¿Cómo almaceno NoSQL a escala masiva (50x)? | 22, 25 |
| Cloud Pub/Sub | ¿Cómo transporto millones de eventos desacoplados? | 23 |
| Dataflow | ¿Cómo proceso el stream de datos en tiempo real? | 24 |
| Open Match | ¿Con quién juego? (Matchmaking masivo) | 30 |
| Agones | ¿Dónde se ejecuta mi partida sin lag ni trampas? | 35-37 |

## Fuentes

- Street Fighter 6: https://cloud.google.com/blog/ja/topics/customers/capcom-building-a-cross-play-platform-with-cloud-spanner-and-gke/
- Halfbrick/Fruit Ninja: https://cloud.google.com/customers/halfbrick-studios
- Halfbrick Remote Config: https://firebase.google.com/case-studies/halfbrick-personalization
- Pokemon GO: https://cloud.google.com/blog/topics/developers-practitioners/how-pokemon-go-scales-millions-requests
- Halloween Doodle: https://cloud.google.com/blog/topics/inside-google-cloud/no-tricks-just-treats-globally-scaling-the-halloween-multiplayer-doodle-with-open-match-on-google-cloud
- Open Match: https://openmatch.dev/site/docs/overview/
- Rainbow Six Mobile (FUENTE PRIMARIA): https://www.youtube.com/watch?v=rZDvc_1FyHE
- Agones: https://www.agones.dev/site/docs/overview/
- CNCF/Agones: https://www.cncf.io/blog/2026/03/23/agones-moves-to-the-cncf-a-new-era-for-open-source-multiplayer-game-infrastructure/
- Gameloft/Crashlytics: https://firebase.google.com/case-studies/gameloft
