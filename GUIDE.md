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

## Estructura de los 34 slides y tiempos objetivo

### Portada y Presentación (01–03) · `00:00 – 02:30`
- 01: Cover INSERT COIN / PLAY GOOGLE CLOUD (40 MIN)
- 02: SELECT YOUR GAME (agenda de 4 mundos)
- 03: PLAYER 1 · PROFILE (Laura Morillo-Velarde, GDE Google Cloud — sin QR duplicado para agilizar el arranque)

### WORLD 1 - Fruit Ninja (04–09) · `02:30 – 09:00`
- 04: Hero slide (Fruit Ninja)
- 05: LiveOps y el reto de las tiendas de apps
- 06: Firebase Platform
- 07: Firebase Remote Config (El mando a distancia en la nube)
- 08: El Ciclo Vital de Mejora: Analytics ➔ BigQuery ➔ Remote Config (+16% ingresos, +15% reseñas 5★)
- 09: Lección (Mundo 1)

### WORLD 2 - Street Fighter 6 (10–17) · `09:00 – 18:30`
- 10: Hero slide (Street Fighter 6)
- 11: El juego y el reto (Combate 1v1 P2P fuera de la nube vs Battle Hub y Salas en GKE)
- 12: Contenedores (Docker) · De la logística marítima al software (Battle Hub, Custom Rooms, Chat, Matchmaking)
- 13: Kubernetes · El timonel y su clúster (Control Plane + Nodos + Pods en una única slide visual)
- 14: GKE (Google Kubernetes Engine - Autoescalado en 4 regiones siguiendo el ciclo solar por husos horarios)
- 15: Cloud Spanner (Ranking mundial único y consistente con TrueTime sin propagación diferida en árbol)
- 16: Redis / Memorystore (Velocidad <1ms en RAM para estado efímero del Battle Hub + nota de BigQuery para telemetría)
- 17: Lección (Mundo 2)

### WORLD 3 - Rainbow Six Mobile (18–23) · `18:30 – 24:00`
- 18: Hero slide (Rainbow Six Mobile)
- 19: Dedicated Game Server (Servidor autoritativo 5v5 en contenedor vs P2P)
- 20: MEME: Six Invitational vs Kubernetes (El Pod que era una partida)
- 21: Agones (1. Ciclo de vida `READY ➔ ALLOCATED ➔ SHUTDOWN` + 2. Conexión UDP directa a `IP:HostPort` sin balanceador de carga)
- 22: La Flota de Servidores (Fleet) y Seguridad (`hostPort` vs `hostNetwork` + proxies UDP Quilkin / anti-DDoS)
- 23: Lección (Mundo 3)

### WORLD 4 - Pokémon GO (24–30) · `24:00 – 32:00`
- 24: Hero slide (Pokémon GO)
- 25: El pico de tráfico viral (gráfico oficial 50X)
- 26: ¿Cómo absorbió la nube el impacto? (GKE con celdas espaciales geolocalizadas S2 + Cloud Datastore + SRE)
- 27: Cloud Pub/Sub (Transportar millones de estados GPS y eventos por segundo)
- 28: Cloud Dataflow / Apache Beam (Limpieza de señales GPS en streaming, detección de *spoofing*/teletransportes en ventanas de tiempo y volcado Bigtable ➔ BigQuery)
- 29: Evolución: Datastore (NoSQL documental) vs Cloud Spanner (Transacciones ACID para intercambios y PvP)
- 30: Lección (Mundo 4)

### Resumen y Cierre (31–34) · `32:00 – 34:00`
- 31: El Mapa de Tecnologías en la Nube (10 herramientas)
- 32: Conclusión arquitectónica: Un videojuego es un sistema distribuido
- 33: Referencias Oficiales (Enlaces a casos de estudio y charlas técnicas)
- 34: Cierre / ¡Gracias! · ¿Hablamos? / Código QR de contacto

## Tecnologías en orden de aparición

| Tecnología | Pregunta | Slide |
|------------|----------|-------|
| Firebase | Plataforma integral para apps y juegos móviles | 06 |
| Firebase Remote Config | ¿Cómo cambio el juego sin actualizarlo? | 07 |
| Firebase Analytics + BigQuery | ¿Cómo analizo petabytes de telemetría y mido experimentos? | 08, 16 |
| Contenedores (Docker) | ¿Cómo empaquetamos los servicios online del juego? | 12 |
| Kubernetes | ¿Quién orquesta miles de contenedores en un clúster? | 13 |
| GKE | Kubernetes gestionado siguiendo el ciclo del sol / celdas S2 | 14, 26 |
| Cloud Spanner | ¿Dónde guardo rankings e intercambios con consistencia global? | 15, 29 |
| Redis / Memorystore | ¿Cómo respondo en menos de 1ms en memoria RAM? | 16 |
| Agones | ¿Cómo protejo la partida en curso y conecto por UDP directo? | 21–22 |
| Cloud Datastore | ¿Cómo almaceno documentos NoSQL a escala masiva (50x)? | 26, 29 |
| Cloud Pub/Sub | ¿Cómo transporto millones de eventos GPS desacoplados? | 27 |
| Cloud Dataflow (Apache Beam) | ¿Cómo limpio y proceso el stream GPS en tiempo real? | 28 |

## Fuentes Oficiales Contrastadas

- Fruit Ninja (Halfbrick): https://firebase.google.com/case-studies/halfbrick-personalization
- Street Fighter 6 (Capcom - Caso oficial GCP): https://cloud.google.com/blog/ja/topics/customers/capcom-building-a-cross-play-platform-with-cloud-spanner-and-gke/
- Street Fighter 6 (Capcom - Next Tokyo '23 Architecture Talk): https://www.youtube.com/watch?v=HRcHnBhhF-k
- Rainbow Six Mobile (Ubisoft - KubeCon/GDC): https://www.youtube.com/watch?v=rZDvc_1FyHE
- Agones (Overview & Network/Security FAQ): https://agones.dev/site/docs/faq/
- Pokémon GO (Niantic - GCP Architecture Blog): https://cloud.google.com/blog/topics/developers-practitioners/how-pokemon-go-scales-millions-requests
- Pokémon GO (Niantic - Apache Beam Summit Anti-Cheat): https://beamsummit.org/sessions/fault-tolerant-integration/
