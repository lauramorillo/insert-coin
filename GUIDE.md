# INSERT COIN, PLAY GOOGLE CLOUD

## Guía de la presentación

**Duración objetivo:** 33–35 minutos de charla (máximo 40 minutos con preguntas / derivación al descanso)
**Archivo principal:** `index.html`

## Navegación

| Tecla | Acción |
|-------|--------|
| Flecha derecha / Space | Siguiente slide |
| Flecha izquierda | Slide anterior |
| F | Pantalla completa |
| Botones del ratón / Poké Ball Plus | Navegación |

## Estructura de los 36 slides y tiempos objetivo

### Portada y Presentación (01–03) · `00:00 – 03:00`
- 01: Cover INSERT COIN / PLAY GOOGLE CLOUD (40 MIN)
- 02: SELECT YOUR GAME (agenda de 4 mundos)
- 03: PLAYER 1 · PROFILE (Laura Morillo-Velarde, GDE Google Cloud — con QR para menciones en X/redes durante la charla)

### WORLD 1 - Fruit Ninja (04–09) · `03:00 – 09:00`
- 04: Hero slide (Fruit Ninja)
- 05: LiveOps y el reto de las tiendas de apps
- 06: Firebase Platform
- 07: Firebase Remote Config (El mando a distancia en la nube)
- 08: El Ciclo Vital de Mejora: Analytics ➔ BigQuery ➔ A/B Testing (+16% ingresos, +15% reseñas 5★)
- 09: Lección (Mundo 1)

### WORLD 2 - Street Fighter 6 (10–18) · `09:00 – 19:00`
- 10: Hero slide (Street Fighter 6)
- 11: El juego y el reto (Combate 1v1 P2P fuera de la nube vs Battle Hub, espectador y rankings en GKE)
- 12: Contenedores (Docker) · De la logística marítima al software
- 13: TECNOLOGÍA · KUBERNETES (Control Plane + Nodos + Pods: Battle Hub, Chat, Rank, Auth y Match para retransmisión a espectadores en Battle Hub)
- 14: GKE · Google Kubernetes Engine (Autoescalado gestionado en 4 regiones y ~20 microservicios hasta picos de 120K jugadores simultáneos)
- 15: Cloud Spanner (Ranking mundial único y consistente con TrueTime)
- 16: Redis / Memorystore (Velocidad <1ms en RAM para estado efímero del Battle Hub)
- 17: BigQuery (Paso breve sobre cómo Capcom analiza los combates para equilibrar luchadores)
- 18: Lección (Mundo 2)

### WORLD 3 - Rainbow Six Mobile (19–24) · `19:00 – 25:30`
- 19: Hero slide (Rainbow Six Mobile)
- 20: Dedicated Game Server (Planteamiento del problema 5v5, Anti-Cheat y por qué Kubernetes estándar no sirve)
- 21: MEME: Six Invitational vs Kubernetes (El Pod que era una partida)
- 22: Agones (Ciclo de vida `READY ➔ ALLOCATED ➔ SHUTDOWN` + Conexión UDP directa vía `hostPort` sin balanceador)
- 23: La Flota de Servidores (Fleet: pool caliente de servidores `READY` y asignación instantánea a `ALLOCATED`)
- 24: Lección (Mundo 3)

### WORLD 4 - Pokémon GO (25–32) · `25:30 – 32:30`
- 25: Hero slide (Pokémon GO)
- 26: El pico de tráfico viral (gráfico oficial 50X)
- 27: ¿Cómo absorbió la nube el impacto? (GKE con celdas espaciales S2 + Cloud Datastore + SRE)
- 28: Cloud Pub/Sub (Transportar millones de estados GPS y eventos por segundo)
- 29: Cloud Dataflow / Apache Beam (Limpieza de señales GPS en ventanas de tiempo y detección de *spoofing*/teletransportes en vivo)
- 30: Evolución: Datastore (NoSQL documental) vs Cloud Spanner (~5.000 nodos con esquemas relacionales, índices consistentes y transacciones ACID globales)
- 31: Arquitectura de Escala Planetaria (Overview rápido conectando todas las piezas)
- 32: Lección (Mundo 4)

### Resumen y Cierre (33–36) · `32:30 – 34:30`
- 33: El Mapa de Tecnologías en la Nube (10 herramientas)
- 34: Conclusión arquitectónica: Un videojuego es un sistema distribuido
- 35: Referencias Oficiales (Enlaces a casos de estudio y charlas técnicas)
- 36: Cierre / ¡Gracias! · Código QR de contacto

## Tecnologías en orden de aparición

| Tecnología | Pregunta | Slide |
|------------|----------|-------|
| Firebase | Plataforma integral para apps y juegos móviles | 06 |
| Firebase Remote Config | ¿Cómo cambio el juego sin actualizarlo? | 07 |
| Firebase Analytics + BigQuery | ¿Cómo analizo petabytes de telemetría y equilibro personajes? | 08, 17 |
| Contenedores (Docker) | ¿Cómo empaquetamos los servicios online del juego? | 12 |
| Kubernetes | ¿Quién orquesta miles de contenedores en un clúster? | 13 |
| GKE | Kubernetes gestionado con autoescalado / celdas S2 | 14, 27 |
| Cloud Spanner | ¿Dónde guardo rankings e intercambios con consistencia global? | 15, 30 |
| Redis / Memorystore | ¿Cómo respondo en menos de 1ms en memoria RAM? | 16 |
| Agones | ¿Cómo protejo la partida en curso y conecto por UDP directo? | 22–23 |
| Cloud Datastore | ¿Cómo almaceno documentos NoSQL a escala masiva (50x)? | 27, 30 |
| Cloud Pub/Sub | ¿Cómo transporto millones de eventos GPS desacoplados? | 28 |
| Cloud Dataflow (Apache Beam) | ¿Cómo limpio y proceso el stream GPS en tiempo real? | 29 |

## Fuentes Oficiales Contrastadas

- Fruit Ninja (Halfbrick): https://firebase.google.com/case-studies/halfbrick-personalization
- Street Fighter 6 (Capcom - Caso oficial GCP): https://cloud.google.com/blog/ja/topics/customers/capcom-building-a-cross-play-platform-with-cloud-spanner-and-gke/
- Street Fighter 6 (Capcom - Next Tokyo '23 Architecture Talk): https://www.youtube.com/watch?v=HRcHnBhhF-k
- Rainbow Six Mobile (Ubisoft - KubeCon/GDC): https://www.youtube.com/watch?v=rZDvc_1FyHE
- Agones (Overview & Network/Security FAQ): https://agones.dev/site/docs/faq/
- Pokémon GO (Niantic - GCP Architecture Blog): https://cloud.google.com/blog/topics/developers-practitioners/how-pokemon-go-scales-millions-requests
- Pokémon GO (Niantic - Apache Beam Summit Anti-Cheat): https://beamsummit.org/sessions/fault-tolerant-integration/
