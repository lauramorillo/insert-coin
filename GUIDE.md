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

## Estructura de los 37 slides

### Portada y Presentación (01-03)
- 01: Cover INSERT COIN / PLAY GOOGLE CLOUD
- 02: SELECT YOUR GAME (agenda de 4 mundos)
- 03: PLAYER 1 · PROFILE (Laura Morillo-Velarde, GDE Google Cloud)

### WORLD 1 - Fruit Ninja (04-09)
- 04: Hero slide (Fruit Ninja)
- 05: El juego (LiveOps y el reto de las tiendas de apps)
- 06: NUEVA TECH: Firebase Platform
- 07: NUEVA TECH: Remote Config (El mando a distancia en la nube)
- 08: NUEVA TECH: BigQuery & Analytics (Flywheel +16% Ingresos)
- 09: Lección

### WORLD 2 - Street Fighter 6 (10-19)
- 10: Hero slide (Street Fighter 6)
- 11: El juego y el reto (Battle Hub en GKE + Combates 1v1 P2P)
- 12: NUEVA TECH: Contenedores (Docker) · De la logística marítima al software
- 13: NUEVA TECH: Kubernetes · El timonel del puerto
- 14: Kubernetes Cluster Diagram (Control Plane, Nodos, Pods)
- 15: NUEVA TECH: GKE (Google Kubernetes Engine - Autoescalado 10K a 100K)
- 16: NUEVA TECH: Cloud Spanner (Datos Globales Consistentes + TrueTime)
- 17: NUEVA TECH: Redis / Memorystore (Velocidad Sub-Milisegundo en RAM)
- 18: BigQuery (Telemetría de combates y balanceo de personajes)
- 19: Lección

### WORLD 3 - Rainbow Six Mobile (20-25)
- 20: Hero slide (Rainbow Six Mobile)
- 21: Concepto Dedicated Game Server (Servidor autoritativo vs P2P)
- 22: MEME: Kubernetes vs Game Dev (El Pod que era una partida)
- 23: NUEVA TECH: Agones (Kubernetes para videojuegos)
- 24: Flota de Servidores Agones (Fleet Matrix: Ready, Allocated, Shutdown)
- 25: Lección

### WORLD 4 - Pokémon GO (26-33)
- 26: Hero slide (Pokémon GO)
- 27: El problema: El pico de tráfico viral (gráfico 50X)
- 28: ¿Cómo absorbió la nube el impacto? (GKE + Cloud Datastore + SRE)
- 29: NUEVA TECH: Cloud Pub/Sub (Transportar millones de eventos)
- 30: NUEVA TECH: Cloud Dataflow (Procesamiento en streaming)
- 31: EVOLUCIÓN: Datastore (NoSQL) vs Cloud Spanner (Relacional)
- 32: Arquitectura completa Pokémon GO en Google Cloud
- 33: Lección

### Resumen y Cierre (34-37)
- 34: Mapa de tecnologías (10 herramientas)
- 35: Concepto final: Un videojuego es un sistema distribuido (La magia de la nube)
- 36: REFERENCIAS OFICIALES (4 cajas de enlaces a casos de estudio y charlas técnicas)
- 37: Cierre / Gracias / Preguntas / INSERT COIN / Código QR de contacto

## Tecnologias en orden de aparicion

| Tecnologia | Pregunta | Slide |
|------------|----------|-------|
| Firebase | Plataforma integral para apps y juegos móviles | 06 |
| Firebase Remote Config | ¿Cómo cambio el juego sin actualizarlo? | 07 |
| Firebase Analytics | ¿Qué está pasando en el juego? | 08 |
| BigQuery | ¿Cómo analizo petabytes de información y balanceo el juego? | 08, 18 |
| Contenedores (Docker) | ¿Cómo empaquetamos el juego? | 12 |
| Kubernetes | ¿Quién gestiona tantos contenedores? | 13-14 |
| GKE | Kubernetes como servicio gestionado | 15 |
| Cloud Spanner | ¿Dónde guardo mis datos globales consistentes? | 16 |
| Redis / Memorystore | ¿Cómo respondo en menos de 1ms? | 17 |
| Agones | ¿Dónde se ejecuta mi partida sin lag ni trampas? | 23-24 |
| Cloud Datastore | ¿Cómo almaceno NoSQL a escala masiva (50x)? | 28, 31 |
| Cloud Pub/Sub | ¿Cómo transporto millones de eventos desacoplados? | 29 |
| Dataflow | ¿Cómo proceso el stream de datos en tiempo real? | 30 |

## Fuentes

- Fruit Ninja (Halfbrick): https://cloud.google.com/customers/halfbrick-studios
- Fruit Ninja (Remote Config): https://firebase.google.com/case-studies/halfbrick-personalization
- Street Fighter 6 (Capcom): https://cloud.google.com/blog/ja/topics/customers/capcom-building-a-cross-play-platform-with-cloud-spanner-and-gke/
- Rainbow Six Mobile (Ubisoft - GDC): https://www.youtube.com/watch?v=rZDvc_1FyHE
- Agones (Kubernetes for Game Servers): https://www.agones.dev/site/docs/overview/
- Pokémon GO (Niantic): https://cloud.google.com/blog/topics/developers-practitioners/how-pokemon-go-scales-millions-requests
