# Guion de la Charla: INSERT COIN, PLAY GOOGLE CLOUD (Edición 40 min)

Este documento contiene el discurso ajustado para **33–35 minutos de exposición** (+ margen de preguntas o derivación al descanso para no superar nunca el límite estricto de **40 minutos**). Está alineado 1 a 1 con las **34 diapositivas** de `slides.js` y contrastado con las fuentes oficiales de Halfbrick, Capcom, Ubisoft/Agones y Niantic.

### ⏱️ Mapa de Tiempos (Checkpoints en directo)
- **Bloque 0 · Intro y Perfil (Slides 01–03):** `00:00 – 02:30` *(2,5 min)*
- **Mundo 1 · Fruit Ninja (Slides 04–09):** `02:30 – 09:00` *(6,5 min)*
- **Mundo 2 · Street Fighter 6 (Slides 10–17):** `09:00 – 18:30` *(9,5 min)*
- **Mundo 3 · Rainbow Six Mobile (Slides 18–23):** `18:30 – 24:00` *(5,5 min)*
- **Mundo 4 · Pokémon GO (Slides 24–30):** `24:00 – 32:00` *(8,0 min)*
- **Cierre y Mapa Global (Slides 31–34):** `32:00 – 34:00` *(2,0 min)*
- **Margen / Buffer final:** `34:00 – 40:00` *(6,0 min de colchón o 1-2 preguntas rápidas)*

---

## BLOQUE 0: INTRO Y PERFIL (⏱️ Objetivo: 00:00 – 02:30)

### 01. COVER (Portada)

**[La diapositiva muestra "INSERT COIN / PLAY GOOGLE CLOUD", 3 corazones de vida, créditos: 40 MIN y el parpadeo de "PRESS SPACE / START"]**

"¡Hola a todo el mundo! Muchísimas gracias por venir a _'Insert Coin, Play Google Cloud'_.

Empecemos con una pregunta rápida: que levante la mano quien haya jugado a algún videojuego en la última semana, ya sea en el móvil, en consola o en PC. _(Pausa breve)_. Casi toda la sala.

Lo fascinante es que hoy coges el móvil o la consola, pulsas un botón y en segundos estás jugando con alguien en la otra punta del planeta. Parece magia, pero detrás hay una obra colosal de ingeniería e infraestructura en la nube."

### 02. AGENDA (Select Your Game)

**[Aparece el menú arcade de selección de nivel con las 4 tarjetas de los mundos]**

"Hoy vamos a recorrer cuatro videojuegos muy distintos —Fruit Ninja, Street Fighter 6, Rainbow Six Mobile y Pokémon GO— para descubrir qué piezas de Google Cloud hacen posible que funcionen a escala planetaria.

Así que... echemos nuestra moneda y pulsemos _'Start'_."

### 03. SPEAKER PROFILE (Player 1 Profile)

**[Aparece la tarjeta retro con la foto, el nombre Laura Morillo-Velarde, GDE en Google Cloud y +19 años de experiencia — sin QR para no detenerse aquí]**

"Antes de entrar al primer mundo, me presento en treinta segundos: soy **Laura Morillo-Velarde**, Desarrolladora de Software e Ingeniera de Plataforma desde hace más de 19 años, y **Google Developer Expert (GDE) en Google Cloud** —lo cual significa que no trabajo para Google, sino que es un reconocimiento de comunidad por divulgar y compartir conocimiento técnico—.

Siempre me ha apasionado entender qué pasa detrás de lo que el ojo ve en sistemas de alto rendimiento, y los videojuegos llevan la infraestructura al límite. Al final de la charla os dejaré mi QR de contacto y, como tenemos el tiempo muy ajustado a 40 minutos, estaré encantada de responder cualquier duda en el descanso.

¡Vamos al Mundo 1!"

---

## MUNDO 1: FRUIT NINJA (⏱️ Objetivo: 02:30 – 09:00)

### 04. HERO: Fruit Ninja

**[Portada con arte de Fruit Ninja de Halfbrick Studios]**

"Mundo 1: **Fruit Ninja**, de Halfbrick Studios. ¿Quién ha cortado fruta alguna vez en el móvil? Salió en 2010 y acumula más de mil millones de descargas. Su gran reto es: ¿cómo mantienes vivo y personalizado un juego móvil sin obligar al usuario a descargarse actualizaciones constantes?"

### 05. LiveOps: Operar un Juego en Vivo

**[Comparativa visual: El problema de las tiendas de apps vs LiveOps en caliente]**

"En los juegos móviles existe el concepto de **LiveOps** (operaciones en vivo). Si cada vez que quieres ajustar la dificultad o lanzar un evento tienes que compilar una versión nueva, subirla a la App Store o Google Play, esperar 24 o 48 horas de revisión y rezar para que el usuario tenga actualizaciones automáticas... pierdes toda agilidad. Necesitamos cambiar el comportamiento del juego en caliente."

### 06. Firebase

**[Ecosistema integral de Firebase: Remote Config, Analytics, Crashlytics, Cloud Messaging]**

"La pieza clave en la que se apoya Halfbrick es **Firebase**, la 'navaja suiza' de Google para aplicaciones móviles y web. Nos da listas para usar herramientas de configuración dinámica, telemetría, detección de fallos y notificaciones sin reinventar la rueda."

### 07. Firebase Remote Config (El Mando a Distancia en la Nube)

**[Diagrama de parámetros en la nube: `ad_frequency_interval`, `rating_prompt_trigger`, `freeze_banana_duration`]**

"Dentro de Firebase, su herramienta estrella es **Firebase Remote Config**. El juego incluye el SDK y, al arrancar, consulta en milisegundos qué parámetros debe aplicar hoy.

En vez de subir una versión nueva a la tienda, cambian en la nube variables como:
- **Frecuencia de anuncios** (`ad_frequency_interval`): si mostrar un anuncio cada tres partidas o solo al pedir vidas.
- **Cuándo pedir valoración en la tienda** (`rating_prompt_trigger`) o cuánto dura el efecto de la **banana que congela el tiempo**.

> _[Nota Q&A si preguntan por múltiples versiones de la app en producción: Firebase Remote Config permite definir condiciones nativas por versión de la app (`app.version`) o plataforma, sirviendo el esquema antiguo a la v1 y el nuevo a la v2 sin romper clientes antiguos.]_"

### 08. El Ciclo Vital de Mejora (Analytics ➔ BigQuery ➔ Remote Config)

**[Diagrama Flywheel: 1. Analytics ➔ BigQuery, 2. Remote Config & A/B Testing, 3. Resultado +16% ingresos y +15% valoraciones 5 estrellas]**

"Pero no cambian esos números a ciegas. Lo combinan en un ciclo continuo de tres pasos:

1. **Firebase Analytics + BigQuery**: Recogen los eventos de uso y los vuelcan en **BigQuery**, el Data Warehouse serverless de Google Cloud, capaz de analizar petabytes de datos analíticos en segundos.
2. **Remote Config + A/B Testing**: Prueban distintas configuraciones con distintos grupos de jugadores.
3. **Impacto real en negocio**: Descubrieron el momento exacto en que un anuncio no satura al jugador (**+16% en ingresos publicitarios**) y que pedir la valoración justo tras ganar una partida disparaba un **+15% las reseñas de 5 estrellas**."

### 09. Lección (Mundo 1)

**[Slide de lección con sandía 🍉 y pastillas de resumen]**

"Lección del Mundo 1: Un juego no termina cuando lo publicas en la tienda; ahí es cuando empieza a vivir gracias a medir con BigQuery y ajustar al vuelo con Remote Config."

---

## MUNDO 2: STREET FIGHTER 6 (⏱️ Objetivo: 09:00 – 18:30)

### 10. HERO: Street Fighter 6

**[Portada con arte de Street Fighter 6 de Capcom]**

"De un juego móvil individual pasamos al Mundo 2: **Street Fighter 6** de Capcom. ¿Cómo conectas simultáneamente a jugadores de PlayStation, Xbox y PC de todo el planeta con salones virtuales en 3D y un ranking mundial único sin latencia?"

### 11. El Juego y el Reto

**[Detalles del Battle Hub, Cross-play completo y separación clara: Combate 1v1 P2P vs Salón/Rankings en la nube]**

"En Street Fighter 6, Capcom introdujo el **Battle Hub**: un salón recreativo virtual en 3D donde hasta 100 avatares caminan, interactúan, se sientan en una máquina arcade para pelear o se acercan a mirar la partida de otros.

Aquí es fundamental distinguir dos planos técnicos:
- **El combate 1v1 NO corre en la nube**: En un juego de lucha a 60 FPS cerrados (16 milisegundos por fotograma), pasar los golpes por un servidor añadiría latencia. El combate va **directo consola a consola (P2P con Rollback Netcode)**.
- **Todo lo demás SÍ corre en Google Cloud**: Los salones 3D del Battle Hub, las salas privadas, el matchmaking cross-play y el ranking mundial."

### 12. Contenedores (¿Cómo empaquetamos el juego?)

**[Analogía del transporte marítimo en los años 50 vs Contenedores Docker para Battle Hub, Custom Rooms, Chat y Matchmaking]**

"Para construir todos esos servicios online, Capcom decidió empaquetarlos en **Contenedores (Docker)**.

Igual que en los años 50 el contenedor marítimo estandarizó el transporte mundial con cajas de tamaño único, en software empaquetamos cada servicio con sus dependencias en un contenedor: un contenedor para el salón 3D del Battle Hub, otro para las salas privadas (_Custom Rooms_), otro para el chat y otro para el matchmaking. Insisto: **los contenedores gestionan el entorno online y las salas, nunca simulan la pelea 1v1**."

### 13. El Timonel y su Clúster (Kubernetes)

**[Diagrama visual del Clúster: Control Plane arriba y Nodos 1, 2, 3 abajo con Pods de Battle Hub, Custom Room, Chat/Notify, Ranking API, Auth y Matchmaking]**

"En el lanzamiento de Street Fighter 6 se superaron los 100.000 jugadores simultáneos. Un solo contenedor no basta; necesitas miles. ¿Quién los coordina?

**Kubernetes** —que en griego significa _'timonel'_—. En este diagrama vemos cómo funciona: arriba está el **Control Plane** (el cerebro) y abajo los **Nodos** (los servidores), dentro de los cuales se ejecutan los **Pods** (nuestros contenedores del Battle Hub, Custom Rooms, Matchmaking o APIs). Si un salón se llena o falla, Kubernetes levanta nuevos Pods automáticamente."

### 14. GKE (Google Kubernetes Engine)

**[Diagrama de auto-escalado siguiendo el ciclo del sol en 4 regiones: 10K valle horario ➔ 100K hora punta / torneo]**

"Para no dedicar ingenieros de videojuegos a mantener servidores físicos o parches del sistema operativo, Capcom usa **GKE (Google Kubernetes Engine)** desplegado en **4 regiones del mundo**: Asia, Europa, Norteamérica y Sudamérica.

Aquí el tráfico de jugadores **sigue el ciclo del sol por husos horarios**: a medida que despierta Asia, luego Europa y luego América, GKE auto-escala los nodos de cada región en cuestión de minutos y los apaga cuando el continente se va a dormir."

### 15. Cloud Spanner (¿Dónde guardo el Ranking Mundial?)

**[Diagrama de sincronización global con TrueTime: Europa ◀━ ⚡ TrueTime ━▶ Asia / EE.UU.]**

"Ahora bien: el tráfico de GKE rota por husos horarios, pero **¿qué pasa con el ranking mundial y las compras?**

A veces se piensa que el ranking se divide en árboles por regiones y se va propagando a lo largo del día según el huso horario. Pero Capcom hizo justo lo contrario usando **Cloud Spanner**: una base de datos relacional con **consistencia global estricta**.

En lugar de tener bases de datos separadas por región que haya que sincronizar con retraso, las 4 regiones de GKE se conectan a Cloud Spanner a través de la red privada global de Google. Gracias a **TrueTime** (relojes atómicos y GPS sincronizados al milisegundo), si termina un combate en Madrid y otro en Tokio a la vez, el ranking mundial (_League Points_ y _Master Rating_) refleja el orden exacto al instante."

### 16. Redis / Memorystore (¿Cómo respondo en milisegundos?)

**[Comparativa: Disco/BD persistente ~30-50ms 🐢 vs Redis en memoria RAM <1ms ⚡]**

"Cloud Spanner es infalible para datos permanentes, pero escribir en disco con consistencia estricta lleva entre 30 y 50 milisegundos.

¿Qué pasa cuando mi avatar camina por el Battle Hub o se sienta en una máquina recreativa libre? Eso es un dato efímero que cambia cada segundo y si me desconecto en cinco minutos deja de importar. Para eso Capcom coloca por delante **Memorystore for Redis**: una base de datos en **memoria RAM** que responde en **menos de 1 milisegundo** para gestionar asientos del salón, sesiones activas y la caché caliente del ranking."

### 17. Lección (Mundo 2)

**[Slide de lección con trofeo 🏆 y pastillas GKE, Spanner, Redis y BigQuery]**

"Lección del Mundo 2: En un gran juego online cada pieza tiene su misión: **GKE** escala los salones siguiendo el sol, **Spanner** mantiene el ranking mundial único sin propagaciones tardías, **Redis** da velocidad sub-milisegundo en memoria, y el mismo **BigQuery** que vimos antes analiza las estadísticas de los combates para equilibrar a los luchadores."

---

## MUNDO 3: RAINBOW SIX MOBILE (⏱️ Objetivo: 18:30 – 24:00)

### 18. HERO: Rainbow Six Mobile

**[Portada con arte de Rainbow Six Mobile de Ubisoft]**

"En Street Fighter el combate era 1 contra 1 directo entre dos consolas. Pero, ¿qué ocurre en el Mundo 3 con **Rainbow Six Mobile** de Ubisoft, un shooter táctico de **5 contra 5**?"

### 19. Dedicated Game Server (El Servidor es la Autoridad)

**[Explicación de Servidor Dedicado Autoritativo (Anti-Cheat) y el reto de partidas de 10-20 minutos]**

"No puedes conectar 10 teléfonos móviles todos contra todos en P2P: habría muchísimo lag y cualquiera podría trucar su móvil para atravesar paredes o tener puntería infinita.

Aquí la partida **sí se ejecuta y simula dentro de un contenedor en la nube**, llamado **Dedicated Game Server (Servidor Dedicado)**. El servidor es la autoridad: recibe las pulsaciones de los 10 jugadores, calcula las físicas y los disparos en memoria y evita las trampas."

### 20. MEME: Six Invitational vs Kubernetes

**[Meme del Six Invitational con el comentarista en pánico cuando Kubernetes mata el Pod de la final]**

"Pero si metemos la partida dentro de un contenedor de Kubernetes, tenemos un problema gravísimo: Kubernetes se diseñó para páginas web sin estado. Si Kubernetes decide reorganizar el clúster y mata un Pod web, no pasa nada. Pero si mata el Pod donde se está jugando la final del _Six Invitational_... acaba de desconectar a los 10 jugadores en mitad de la ronda."

### 21. Agones (Orquestador de Game Servers en Kubernetes)

**[Dos pilares de Agones (Ciclo de vida + Conexión UDP directa `hostPort`) y estados READY ➔ ALLOCATED ➔ SHUTDOWN]**

"Para resolverlo, Google Cloud y Ubisoft crearon **Agones**, un proyecto open source que se instala encima de cualquier Kubernetes y hace dos cosas fundamentales:

1. **Adapta el ciclo de vida del contenedor**: Le enseña a Kubernetes los estados `READY` (servidor pre-calentado esperando jugadores), `ALLOCATED` (**partida en curso: prohibido tocar o matar este Pod**) y `SHUTDOWN` (la partida ha terminado, ya puedes destruirlo).
2. **Elimina la latencia del balanceador de carga**: En una web normal el tráfico pasa por un balanceador HTTP hacia cualquier Pod libre. En un shooter a 60 Hz necesitas enviar paquetes **UDP** al **Pod exacto** donde está tu partida sin saltos intermedios. Agones abre un puerto dinámico (`hostPort`) en la máquina y devuelve a los 10 jugadores la **IP y Puerto directos** de su contenedor."

### 22. La Flota de Servidores (Fleet) y Seguridad

**[Matriz visual de la flota `GS-01..06` en estados READY y ALLOCATED + Nota inferior de seguridad]**

"Así mantiene Agones la flota en vivo: contenedores verdes en `READY` para entrar a jugar sin esperas, y contenedores en `ALLOCATED` blindados con conexión UDP directa.

Y ojo a una pregunta muy habitual de arquitectura: **¿Exponer la IP y el puerto directo sin balanceador no es un riesgo de seguridad?** Sí, expone el nodo a posibles ataques DDoS si alguien descubre la IP. Por eso Agones usa `hostPort` (aislando la red de cada contenedor en vez de abrir toda la máquina con `hostNetwork`) y se complementa en el ecosistema de Google Cloud con proxies UDP ligeros como **Quilkin** y protección DDoS perimetral."

### 23. Lección (Mundo 3)

**[Slide de lección con diana 🎯 y pastillas de resumen]**

"Lección del Mundo 3: Kubernetes es el estándar universal, pero con **Agones** lo adaptamos para proteger el ciclo de vida de las partidas en memoria y darles conexión UDP directa sin latencia."

---

## MUNDO 4: POKÉMON GO (⏱️ Objetivo: 24:00 – 32:00)

### 24. HERO: Pokémon GO

**[Portada con arte de Pokémon GO de Niantic]**

"Y llegamos a nuestro cuarto y último mundo: **Pokémon GO** de Niantic. Un juego que convirtió el planeta entero en un tablero geolocalizado. Su desafío: ¿qué pasa cuando se conecta **50 veces más gente** de la que habías previsto?"

### 25. El Pico de Tráfico Viral (50X)

**[Gráfica oficial de Google Cloud / Niantic: Línea naranja 1X, Línea roja 5X (peor escenario), Línea verde vertical 50X]**

"Mirad esta gráfica real publicada por Google Cloud tras el lanzamiento en 2016:
- La **línea naranja (1X)** era el tráfico esperado.
- La **línea roja (5X)** era el peor escenario posible para el que se habían preparado.
- La **línea verde vertical (50X)** fue la realidad: 50 veces la estimación inicial y 10 veces por encima del peor escenario. El mayor reto de infraestructura de la historia móvil."

### 26. ¿Cómo Absorbió la Nube el Impacto? (GKE + Celdas S2 + Datastore)

**[Dos columnas: Cómputo y Mapa Vivo en GKE con celdas espaciales S2 + Almacenamiento en Cloud Datastore + SRE]**

"¿Cómo sobrevivió y cómo funciona el flujo principal del mapa en vivo?

1. **GKE y Geolocalización en Celdas S2**: Levantaron el mayor clúster de GKE del mundo junto al equipo de SRE de Google. Dentro de GKE corre el motor geoespacial de Niantic, que divide toda la superficie de la Tierra en **celdas espaciales S2** cacheadas en memoria. Cuando te mueves por la calle, GKE consulta tu celda S2 para decirte al instante qué Pokémon, Poképaradas y Gimnasios tienes alrededor.
2. **Cloud Datastore**: En el lanzamiento usaron esta base de datos documental NoSQL, donde cada entrenador tenía su propio documento independiente (su Pokédex y mochila), lo que permitió escalar horizontalmente sin bloqueos."

### 27. Cloud Pub/Sub (¿Cómo transporto millones de eventos?)

**[Diagrama de tubería: 50M Entrenadores (GPS + Acciones) ➔ Cloud Pub/Sub Topic ➔ Fan-out a Spawns, Analytics y Anti-Cheat GPS]**

"Pero además de pintarte el mapa, cada vez que millones de personas caminan, giran una Poképarada o lanzan una Pokéball, generan un torrente de **estados de posición GPS y eventos**.

Para no bloquear los servidores del juego, los móviles y servicios lanzan todos esos eventos a una gran cola de mensajería asíncrona llamada **Cloud Pub/Sub**, que absorbe millones de mensajes por segundo y los reparte en paralelo a los sistemas que los necesitan."

### 28. Cloud Dataflow / Apache Beam (¿Cómo limpio y analizo el stream GPS?)

**[Diagrama de Streaming: Señales GPS y Eventos (Pub/Sub) ➔ Ventanas temporales en Apache Beam (Dataflow) ➔ Anti-Cheat / BigQuery]**

"Y aquí entra una pieza fundamental para la geolocalización: **Cloud Dataflow**, basado en **Apache Beam**.

Mientras GKE sirve el mapa en vivo, **Dataflow procesa en streaming continuo todos los estados de posición GPS** que llegan desde Pub/Sub en pequeñas ventanas de tiempo para **limpiar la señal geolocalizada y detectar trampas**:
- Si un jugador captura un Pokémon en Madrid y **5 segundos después** su GPS dice que ha lanzado una Pokéball en Nueva York o Tokio, el pipeline de Apache Beam detecta en tiempo real que ese desplazamiento físico es imposible (*GPS spoofing* / bots) y filtra la trampa sin esperar al final del día.
- Además, procesa entre 5 y 10 Terabytes diarios de registros de actividad desde **Cloud Bigtable** hacia **BigQuery** para verificar cómo se distribuyen los Pokémon por el mapa del mundo."

### 29. Evolución: Datastore (NoSQL) vs Spanner (Relacional)

**[Comparativa: 1. Lanzamiento en Cloud Datastore (NoSQL documental) vs 2. Evolución a Cloud Spanner (Transacciones ACID entre jugadores)]**

"Por último, una gran lección de evolución arquitectónica: en el lanzamiento, **Cloud Datastore** (un documento por entrenador) fue ideal para aguantar el pico 50X porque cada jugador jugaba por su cuenta.

Pero cuando Niantic quiso añadir **intercambios de Pokémon entre dos entrenadores** y combates PvP, necesitaba transacciones cruzadas: quitarme el Pikachu a mí y dártelo a ti de forma atómica sin que se duplique ni se pierda. Por eso migraron en caliente, sin apagar el juego, miles de millones de registros de Datastore a **Cloud Spanner**."

### 30. Lección (Mundo 4)

**[Slide de lección con rayo ⚡ y pastillas GKE + Celdas S2, Datastore ➔ Spanner, Pub/Sub + Beam]**

"Lección del Mundo 4: Necesitas una infraestructura elástica (**GKE con celdas S2** y **Pub/Sub + Apache Beam** limpiando el GPS en tiempo real) para absorber lo inesperado, y una arquitectura viva (**Datastore a Spanner**) capaz de evolucionar con tu juego."

---

## RESUMEN Y CIERRE (⏱️ Objetivo: 32:00 – 34:00)

### 31. El Mapa de Tecnologías en la Nube

**[Matriz 8-bit con las 10 tecnologías: Remote Config, Firebase Analytics, BigQuery, GKE, Cloud Spanner, Redis/Memorystore, Agones, Cloud Datastore, Cloud Pub/Sub y Dataflow (Beam)]**

"_(No leer las 10 cajas una por una; dejar 15 segundos en pantalla por si quieren hacer foto)_.

Aquí tenéis el mapa resumen de las diez piezas que hemos recorrido hoy. Si queréis hacerle una foto rápida, esta es la chuleta: cada herramienta de Google Cloud responde a una pregunta arquitectónica concreta según lo que necesite tu juego."

### 32. Un Videojuego es un Sistema Distribuido

**[Diagrama orbital con el videojuego en el centro y las 10 tecnologías orbitando]**

"La conclusión final es que un gran videojuego moderno **es un sistema distribuido de altísimo rendimiento**. Y la verdadera magia de la nube consiste en hacer que toda esta complejidad sea completamente invisible para quien juega."

### 33. Referencias Oficiales

**[Panel con los enlaces a los casos de estudio oficiales de Halfbrick, Capcom (GCP Blog + Next Tokyo '23), Ubisoft/Agones y Niantic (GCP Blog + Beam Summit)]**

"En la presentación os dejo todos los enlaces oficiales a los blogs de arquitectura y charlas técnicas de los ingenieros de Halfbrick, Capcom, Ubisoft y Niantic donde cuentan de primera mano cada detalle."

### 34. Cierre (¡Gracias! · ¿Hablamos?)

**[Slide final retro con 3 corazones, INSERT COIN y el código QR de contacto]**

"Ahí tenéis mi código QR con mi correo y redes sociales. Como vamos ajustados a los 40 minutos de la sesión, si da tiempo a una pregunta rápida genial y, si no, **estaré ahora mismo fuera en el descanso** encantada de charlar y responder todas las preguntas que queráis.

¡Muchísimas gracias y jugad mucho!"
