# Guion de la Charla: INSERT COIN, PLAY GOOGLE CLOUD

Este documento contiene el discurso completo sugerido para tu presentación de 35 a 45 minutos. Está diseñado para ser **totalmente accesible y divulgativo**, explicando la tecnología mediante **analogías cotidianas y metáforas sencillas**, pero anclado rigurosamente en la **información técnica real y pública** de los casos de estudio oficiales de cada videojuego.

---

## 01. COVER (Portada)

**[La diapositiva muestra "INSERT COIN / PLAY GOOGLE CLOUD", 3 corazones de vida, créditos: 45 MIN y el parpadeo de "PRESS SPACE / START"]**

"¡Hola a todo el mundo! Gracias por asistir a mi charla _'Insert Coin, Play Google Cloud'_.

Me gustaría empezar con haciendo una pregunta rápida: que levante la mano quien haya jugado a algún videojuego en la última semana, ya sea en el móvil mientras venía en transporte público, en la consola o en el ordenador. _(Pausa para ver las manos alzadas)_. Prácticamente toda la sala. Y es completamente natural: hoy los videojuegos son la mayor industria de entretenimiento del mundo.

Cuando jugamos, todo parece instantáneo y mágico: encendemos la pantalla, pulsamos un botón para empezar una partida y, en cuestión de segundos, estamos jugando con personas que están a miles de kilómetros.

Pero detrás de esa pantalla no hay magia. Hay una obra colosal de ingeniería. Hay decenas de piezas invisibles trabajando en segundo plano."

## 02. AGENDA (Stage Select)

**[Aparece el menú arcade de selección de nivel con las 5 tarjetas de los mundos]**

"Hoy vamos a recorrer cinco videojuegos que espero que os sean conocidos y descubriremos cómo la nube de Google Cloud hace posible que todo funcione entre bambalinas.

Así que... echemos nuestra moneda y pulsemos _'Start'_."

---

## 03. SPEAKER PROFILE (Player 1 Profile)

**[Aparece la tarjeta retro con la foto/avatar, el nombre Laura Morillo-Velarde, credenciales de GDE en Google Cloud, 19 años de experiencia y código QR de contacto]**

"Pero antes de lanzarnos de lleno a nuestro primer mundo, dejadme que me presente brevemente.

Mi nombre es **Laura Morillo-Velarde**. Soy Desarrolladora de Software e Ingeniera de Plataforma, y llevo más de 19 años en el sector tecnológico. Además, soy **Google Developer Expert (GDE) en Google Cloud**, lo cual no significa que trabaje para Google sino que es un reconocimiento que Google otorga a personas con amplio conocimiento de tecnologías de Google (en mi caso sobre Google Cloud) y que colaboramos activamente con comunidades de desarrollo para divulgar y compartir nuestra experiencia.

A lo largo de mi carrera siempre me ha apasionado lo que ocurre 'detrás de lo que el ojo ve' y me parecen especialmente interesantes los entornos que necesitan un alto rendimiento. Y el mundo del videojuego es, sin duda, uno de los campos más exigentes que existe.

En este QR tenéis mi correo y algunas redes sociales por si queréis conectar después de la charla o tenéis dudas o lo que sea.

Y ahora sí... ¿hay ganas de jugar? ¡Vamos al Mundo 1!"

---

## MUNDO 1: STREET FIGHTER 6

### 04. HERO: Street Fighter 6

**[Portada con arte de Street Fighter 6 de Capcom]**

"Mundo 1. Street Fighter 6 de Capcom. Para mí el rey indiscutible de los juegos de lucha. La gran pregunta arquitectónica: ¿Cómo creas un salón recreativo virtual donde millones de personas puedan encontrarse y retarse entre consolas y ordenadores, y cómo mantienes un ranking mundial unificado?"

### 05. El Juego y el Reto

**[Detalles del Battle Hub, cross-play y la caja de enfrentamiento Madrid vs Tokio]**

"En Street Fighter 6, Capcom creó el _'Battle Hub'_: un salón recreativo virtual en 3D donde caminas con tu avatar, chateas con otros jugadores y te sientas en máquinas recreativas virtuales para iniciar una pelea.

Cuenta con **crossplay**: alguien jugando en PlayStation en Madrid puede retar a alguien en PC en Tokio o en Xbox en Londres.

El gran desafío aquí es doble: por un lado, gestionar cientos de salones virtuales en paralelo con hasta 100 avatares cada uno sincronizados en tiempo real; y por otro, coordinar a decenas de miles de personas compitiendo a la vez y garantizar que el ranking mundial sea justo y universal independientemente de la plataforma de cada jugador. ¿Cómo organizamos toda esta infraestructura?"

### 06. Contenedores (¿Cómo empaquetamos el juego?)

**[Tarjeta conceptual con la analogía del transporte marítimo en los años 50 vs contenedores de software Docker con piezas del juego]**

"Para resolver el reto de Street Fighter 6, el primer paso que dio Capcom fue decidir cómo empaquetar todas las piezas que dan vida al juego: el salón 3D del Battle Hub, el chat, la tienda, el matchmaking, el ranking...

Para entender cómo lo hicieron, tenemos que fijarnos en una revolución histórica de la ingeniería: los **contenedores marítimos**. Antes de los años 50, cargar un barco de mercancías era un auténtico caos porque cada mercancía venía en cajas, barriles o sacos de formas y tamaños distintos. La invención del contenedor estándar lo cambió todo: da igual lo que lleves dentro —ropa, muebles o coches—, la caja exterior tiene exactamente las mismas medidas estandarizadas y encaja a la perfección en cualquier barco, tren o camión del mundo.

En software hacemos exactamente lo mismo. Capcom empaqueta cada servicio del juego en su propio **Contenedor (Docker)** junto con su código y todas sus dependencias. ¿La gran ventaja? Elimina por completo el temido _'en mi máquina funciona'_. Ese contenedor se ejecuta con idéntico comportamiento en el ordenador del desarrollador, en las pruebas y en los servidores de producción en la nube."

### 07. Kubernetes (¿Quién gestiona tantos contenedores?)

**[Tarjeta de Kubernetes: El capitán y timonel automatizado que orquesta la flota]**

"Pero claro, cuando tienes cientos de salones virtuales abiertos y miles de contenedores de juego ejecutándose a la vez con jugadores entrando y saliendo, surge la siguiente pregunta: ¿quién coordina toda esa flota?

Ahí es donde entra **Kubernetes** (que en griego clásico significa _'timonel'_ o _'capitán'_).

Kubernetes es el director de orquesta o el capitán automatizado del puerto: vigila constantemente todos los contenedores del juego, decide en qué servidor desplegar cada sala, arranca nuevos contenedores de inmediato si hay avalanchas de jugadores y, si un contenedor de chat o de salón sufre un fallo, lo reemplaza en cuestión de segundos sin que nadie en la partida lo note."

### 08. ¿Qué es un Clúster?

**[Diagrama visual del Clúster: Control Plane arriba y Nodos con Pods iluminados abajo]**

"Para llevar a cabo esta tarea Kubernetes se ejecuta en **clústeres**.

Un clúster es simplemente un equipo de ordenadores trabajando juntos. A cada ordenador lo llamamos **Nodo**.

En lo alto está la **Torre de Control o Plano de Control**: vigila todo el tráfico, mira cuántos contenedores están esperando y decide qué nodo tiene espacio libre para trabajar.

Y dentro de los barcos viajan los **Pods**, que son las unidades mínimas donde se ejecutan los contenedores del juego: unos pods contienen salas del Battle Hub, otros la autenticación de cuentas, otros el chat y otros los rankings. Si una sala del Battle Hub se llena de jugadores en hora punta, la torre de control simplemente despliega más pods en los nodos disponibles para absorber la carga."

### 09. GKE (Google Kubernetes Engine)

**[Diagrama de auto-escalado: 10K tráfico normal con 2 nodos ➔ 100K pico de torneo con 15 nodos]**

"Construir y mantener toda la infraestructura necesaria uno mismo es caro y complicado: comprar máquinas virtuales en diferentes regiones por todo el mundo, arreglar si un disco duro se estropea, conectar todo, etc. Por eso Capcom utiliza **GKE (Google Kubernetes Engine)**.

GKE nos facilita la tarea: tú solo entregas los contenedores con el código de las piezas de tu juego, y Google se encarga de gestionar las máquinas, sus actualizaciones, los parches de seguridad y la infraestructura.

Durante el lanzamiento de Street Fighter 6, más de 100.000 jugadores entraron a la vez. GKE detectó la avalancha y amplió automáticamente la infraestructura de dos a quince máquinas en cuestión de dos minutos, manteniendo los servidores estables sin una sola caída. Y cuando la gente se fue a dormir y ya no había tanto tráfico, redujo las máquinas para ahorrar costes."

### 10. Cloud Spanner (Datos Globales Consistentes)

**[Diagrama interactivo del globo terráqueo con nodos en Madrid y Tokio sincronizados vía TrueTime]**

"Una vez que tenemos los salones y el juego corriendo en GKE... surge la siguiente gran pregunta: ¿dónde guardamos los datos sagrados que jamás pueden perderse ni corromperse?

Ahí es donde entra **Cloud Spanner**.

En Street Fighter 6, Spanner guarda los datos permanentes y críticos:

- Tu perfil oficial y la vinculación de tu cuenta Capcom ID.
- Tus puntos de ranking mundial: los _League Points (LP)_ y el _Master Rating (MR)_.
- Tus compras de _Fighter Coins_ (la moneda del juego) y tu progreso en el Pase de Batalla.

Imaginad que dos jugadores en Tokio y Madrid terminan un combate en el mismo segundo y compiten por el puesto número 1 del mundo. Si la base de datos se confunde, el ranking se rompe.

Spanner actúa como un **árbitro global con sincronización perfecta**. Apoyado en los **relojes atómicos y satélites GPS** de la tecnología _TrueTime_ de Google, garantiza que cualquier cambio —sea una victoria, un ascenso de rango o una compra de monedas— se registre con una marca temporal indiscutible en todo el mundo, evitando que dos servidores se contradigan entre sí."

### 11. Redis / Memorystore (Velocidad Sub-Milisegundo)

**[Comparador de velocidad: Disco persistente 50ms 🐢 vs Redis en RAM <1ms ⚡]**

"Pero hay datos que cambian cada segundo y no tiene sentido escribirlos de inmediato en una base de datos planetaria como Spanner porque saturaríamos el sistema.

¿Qué se guarda exactamente en **Redis (Cloud Memorystore)** en Street Fighter 6?

- **El estado efímero del Battle Hub**: ¿En qué cabina recreativa virtual está sentado cada avatar?
- **El bloqueo exclusivo de máquinas**: Si tú te sientas en el lado izquierdo de una cabina para retar a alguien, Redis bloquea ese asiento al instante para que otra persona que pulse un milisegundo después no se siente encima de ti.
- **Las salas privadas y las colas de espectadores**: Quién está mirando el combate desde fuera.

Redis guarda todo directamente en **memoria (RAM)** y Responde en **menos de un milisegundo**."

### 12. BigQuery (Análisis Masivo de Partidas)

**[Embudo de 100M de partidas escaneadas en 3 segundos hacia Balance y Retención]**

"¿Y qué ocurre cuando se han jugado cien millones de combates? Toda la telemetría que generan las consolas al terminar cada asalto viaja a **BigQuery**.

A diferencia de Spanner o Redis, que están pensadas para gestionar las partidas en vivo al milisegundo, **BigQuery es un almacén de análisis masivo (_Data Warehouse_)**. No se usa mientras estás jugando, sino para hacerle preguntas complejas a montañas gigantescas de datos históricos y procesar millones de registros en segundos sin ralentizar los servidores del juego.

¿Qué analiza Capcom en BigQuery?

- **El balanceo de personajes**: ¿Está Ryu ganando el 65% de los combates contra Ken? ¿Hay algún movimiento especial que esté demasiado fuerte?
- **Estadísticas de abandono (_Rage Quits_)**: ¿En qué nivel los jugadores se desconectan enfadados al perder?
- **Duración media de los combates y uso del Battle Hub**.

BigQuery escanea petabytes de datos de combates en segundos para que los diseñadores del juego puedan retocar los personajes en el siguiente parche."

### 13. Lección (Mundo 1)

**[Slide de lección con trofeo 🏆 y pastillas de resumen]**

"Primera lección: En un gran juego cada tecnología cumple una misión concreta: los jugadores resuelven la pelea sin retardo en local, GKE y Redis dan vida al salón virtual, Spanner garantiza la justicia del ranking mundial y BigQuery aporta la inteligencia de datos para el futuro del juego.

Dejemos los guantes de pelea y pasemos a nuestro segundo mundo: el mundo móvil."

---

## MUNDO 2: FRUIT NINJA

### 14. HERO: Fruit Ninja

**[Portada de Fruit Ninja de Halfbrick Studios]**

"Mundo 2. Fruit Ninja de Halfbrick Studios,el juego para móviles de cortar fruta con el dedo que acumula millones de descargas. La gran pregunta: ¿Cómo mantienes vivo y rentable un juego durante diez años sin obligar a la gente a descargarse constantes actualizaciones?"

### 15. LiveOps y el Reto de las Tiendas

**[Puntos clave de LiveOps y la problemática de las revisiones en App Store y Google Play]**

"En los juegos móviles, el lanzamiento es solo el kilómetro cero. Lo verdaderamente importante son las operaciones en vivo (**LiveOps**) que mantienen enganchados a los usuarios: torneos de fin de semana, eventos temáticos de Navidad o Halloween y ajustes de dificultad.

Pero las tiendas como App Store y Google Play tardan entre 24 y 48 horas en revisar cualquier actualización. Si para poner una espada de San Valentín o cambiar los puntos de una sandía tienes que mandar una versión nueva y pedirle a la gente que se descargue 200 megabytes, has perdido el evento. Mucha gente tiene las descargas automáticas apagadas y ni se enteraría.

¿Cómo cambiamos las reglas del juego en caliente y al instante?"

### 16. Firebase

**[Visión general de Firebase como plataforma integral para desarrollo móvil]**

"Para conseguirlo, Halfbrick utiliza **Firebase**.

Firebase es la **caja de herramientas integral** de Google para aplicaciones móviles: proporciona soluciones para problemas como la autenticación de usuarios, el envío de notificaciones y el almacenamiento de datos, permitiendo al estudio de videojuegos centrarse en la experiencia de juego, es decir, en hacer que cortar fruta sea divertido."

### 17. Remote Config (El Mando a Distancia en la Nube)

**[Panel de variables en la nube aplicadas en 1 segundo en los móviles]**

"La herramienta estrella de Halfbrick en Fruit Ninja es **Firebase Remote Config**.

Remote Config es un servicio que te permite guardar parámetros y valores de configuración (números, textos o interruptores) en la nube en lugar de dejarlos fijos dentro del código de la app. Cada vez que alguien abre el juego en su móvil, la app descarga estos valores en un segundo y cambia su comportamiento al instante, sin necesidad de publicar una nueva versión en las tiendas.

¿Qué variables controla exactamente el equipo de Fruit Ninja desde este 'mando a distancia en la nube'?

- **El momento exacto para pedir una valoración en la tienda**: Probar si pedir que puntúen el juego justo después de ganar una partida y superar su récord (un momento de alegría) en lugar de hacerlo nada más abrir la app.
- **Los poderes y eventos del juego**: Cuántos segundos dura el efecto del _Plátano Congelador_ o activar automáticamente el Dojo de Halloween un viernes por la tarde.
- **La frecuencia y momento de los anuncios publicitarios**: Probar si es mejor mostrar un anuncio cada 3 partidas o cada 5, buscando el punto óptimo donde no molestas al jugador pero mantienes la rentabilidad del juego.

El teléfono consulta estas variables al abrir el juego y las aplica de manera instantánea, sin descargas y de forma invisible para quien juega."

### 18. El Ciclo Vital (Analytics ➔ BigQuery ➔ Remote Config)

**[Flywheel circular de 3 pasos: Medir ➔ Ajustar con A/B Test ➔ Validar impacto]**

"Halfbrick utiliza un ciclo continuo de medición y experimentación:

1. **Medir el comportamiento con Google Analytics for Firebase**: En primer lugar usan la herramienta de Google Analytics for Firebase que está diseñado para la medición de apps. Proporciona estadísticas sobre el uso de las apps y la participación de los usuarios. Esa información la exportan automáticamente a **BigQuery** para poder analizarlos en profundidad. Con esto, Halfbrick pudo medir con precisión la tolerancia de los jugadores a los anuncios: si pones demasiados, la gente desinstala; si pones muy pocos, no financias el juego.
2. **Probar diferentes configuraciones con Tests A/B y personalización**: Con Remote Config, Halfbrick probó distintas frecuencias de anuncios y ajustó el momento de solicitar la reseña en la tienda.
3. **El resultado real de negocio**:
   - Descubrieron que pedir la valoración tras un momento de triunfo **aumentó las reseñas positivas de 5 estrellas en un +15%**.
   - Encontraron el 'punto dulce' de anuncios para cada tipo de jugador, logrando **un aumento del +16% en los ingresos totales del juego**.

Y todo esto sin tocar una sola línea de código en la app ni obligar a nadie a esperar una actualización en la tienda."

### 19. Lección (Mundo 2)

**[Slide de lección con sandía 🍉 y pastillas de resumen]**

"Segunda lección: Un videojuego no termina cuando se publica en la tienda; ahí empieza su evolución. La nube te da el mando a distancia para encontrar el equilibrio perfecto entre monetización, diversión y satisfacción de tu comunidad sin fricción."

---

## MUNDO 3: POKÉMON GO

### 20. HERO: Pokémon GO

**[Portada de Pokémon GO de Niantic]**

"Mundo 3. Pokémon GO de Niantic. Nos adentramos en el mayor fenómeno viral de la historia móvil: ¿Qué haces cuando tu juego tiene tanto éxito que aparece cincuenta veces más gente de la que habías calculado en el caso más optimista?"

### 21. El Pico de Tráfico Viral

**[Gráfica oficial de Google Cloud: 1X Target (naranja), 5X Worst Case (rojo), 50X Actual Traffic (verde vertical)]**

"Verano de 2016. Se estrena Pokémon GO, un juego que toca por un lado la fibra sensible de una generación que creció jugando a Pokémon, que pone al alcance del móvil ese mundo que hasta entonces solo podíamos ver en la consola y que además lo hace de una manera revolucionaria con una mezcla de realidad aumentada y geolocalización... el nivel de expectación ante su lanzamiento era máximo.

Fijaos en la gráfica real publicada por el equipo de ingeniería de Google Cloud:

- La línea naranja era el tráfico estimado para un lanzamiento exitoso (1X).
- La línea roja era el 'peor escenario posible' calculado por los ingenieros (5X).
- Y la línea verde vertical fue lo que ocurrió en la realidad: **50 veces el tráfico objetivo inicial** y 10 veces el peor escenario estimado.

Quinientos millones de personas salieron a la calle a cazar monstruos al mismo tiempo. Ante una avalancha que pulverizaba cualquier previsión, el gran reto de ingeniería era: ¿cómo sostienes el mayor pico imprevisto de la historia sin que los servidores caigan para siempre?"

### 22. ¿Cómo Absorbió la Nube el Impacto? (GKE + Cloud Datastore)

**[Dos columnas: GKE para Cómputo masivo + Cloud Datastore para Almacenamiento elástico]**

"La respuesta estuvo en la combinación de múltiples piezas de Google Cloud y un equipo de ingeniería trabajando contrarreloj:

1. **Cómputo en GKE (Google Kubernetes Engine)**:
   Pokémon GO se convirtió en el mayor clúster de Kubernetes del planeta en 2016. Desplegó y escaló automáticamente miles de nodos de cómputo para procesar en tiempo real la lógica del mapa, los avatares y la geolocalización.

2. **Almacenamiento en Cloud Datastore (NoSQL Serverless)**:
   ¿Qué se guardaba en esta base de datos?
   - **El inventario de cada entrenador**: Cuántas Pokéballs, pociones, cebos e incubadoras tienes en la mochila.
   - **Tu colección de Pokémon**: Qué criaturas has capturado, sus puntos de combate (CP), sus ataques y sus estadísticas.
   - **El mapa del mundo real**: La ubicación de millones de Poképaradas y Gimnasios.

Datastore funcionó como un **almacén completamente elástico** absorbiendo millones de transacciones por segundo de forma totalmente transparente."

El trabajo de llevar todo esto a producción conllevó que el equipo de ingenieros de Niantic y el equipo de **Google SRE** trabajaran codo con codo inyectando capacidad en tiempo real en la red global de Google para mantener el juego en pie."

### 23. Cloud Pub/Sub (Transportar Millones de Eventos)

**[Diagrama de tubería: Entrenadores y entrenadoras ➔ Pub/Sub Topic ➔ Fan-out a Spawns, Analytics y Anti-bot]**

"Pero además de todo esto, a cada segundo, millones de entrenadores realizaban acciones en la calle: dar pasos para eclosionar un huevo, lanzar una Pokéball o girar el fotodisco de una parada. Si todos esos mensajes fueran directos a la base de datos del juego, la saturarían.

Para ordenar ese diluvio de mensajes se utilizó **Cloud Pub/Sub**.

Pub/Sub es **un servicio de mensajería asíncrono y escalable que permite aislar la carga de quienes generan los mensajes de quienes tienen que procesarlos**. Los teléfonos envían sus millones de mensajes a este servicio. Pub/Sub los recoge evitando que se pierdan por el camino y los reparte ordenadamente a quienes estén esperando esos mensajes: a los sistemas que calculan las criaturas que aparecen en el mapa, a los sistemas de estadísticas y a los filtros de seguridad."

### 24. Dataflow (Procesamiento en Streaming en Tiempo Real)

**[Pipeline continuo: Pub/Sub Raw Stream ➔ Dataflow ETL ➔ BigQuery / Spanner]**

"Pero esos datos no pueden esperar al final del día para revisarse; hay que limpiarlos y procesarlos mientras se producen. Ese es el trabajo de **Cloud Dataflow**.

Dataflow es el motor de procesamiento de datos en tiempo real (_Streaming ETL_) de Google Cloud. A medida que los millones de eventos entran desde Pub/Sub, Dataflow los va capturando, validando, filtrando y transformando sobre la marcha antes de proceder a guardarlos donde corresponda. En Pokémon GO hace dos cosas fundamentales:

1. **Detectar trampas en directo (Anti-spoofing)**: Si un jugador finge con una app falsa de GPS que está en un parque de Madrid y dos segundos después captura un Pokémon en Central Park en Nueva York, Dataflow detecta esa velocidad imposible y bloquea la acción.
2. **Calcular la densidad de jugadores y eventos por zonas**: Agrupa los millones de señales GPS en tiempo real para saber cuánta gente hay jugando en cada parque o barrio en ventanas de pocos minutos. Esto permite ajustar dinámicamente la frecuencia de apariciones de criaturas y activar eventos o incursiones grupales en vivo allí donde se concentran los entrenadores."

### 25. Datastore (NoSQL) vs Spanner (Relacional)

**[Comparativa en 2 columnas: NoSQL en el lanzamiento ➔ Migración a Spanner para Intercambios y PvP]**

"Con el éxito inicial consolidado, Pokémon GO continuó evolucionando: Niantic quería dar el siguiente paso e introducir funcionalidades sociales muy esperadas como los **intercambios de Pokémon entre entrenadores, los combates PvP, las listas de amigos y las incursiones cooperativas**.

Y aquí surgió un gran desafío técnico: cuando dos jugadores interactúan a la vez, las operaciones ya no son independientes. Si tú me vas a intercambiar tu Pikachu por mi Charizard, ambos inventarios deben actualizarse exactamente en el mismo milisegundo con consistencia total. No puede ocurrir que yo pierda mi criatura y a ti no te llegue por un microcorte de red, ni que un fallo de concurrencia duplique el Pikachu y ambos nos quedemos con él.

Esto motivó la migración a un nuevo sistema de base de datos.

1. **En el lanzamiento, Cloud Datastore (NoSQL)** fue la salvación: cada documento era independiente. Cada jugador tenía un documento con la información de sus monstruos y sus objetos, lo que permitía un escalado masivo instantáneo. Pero los documentos vivían aislados.
2. **Para las funciones sociales necesitaban Cloud Spanner (Relacional / NewSQL)**: funciona como **una biblioteca interconectada con consistencia total**. Todas las tablas y relaciones están sincronizadas y garantizan transacciones seguras entre múltiples usuarios a la vez.

El equipo de Niantic logró una auténtica proeza técnica: **migraron miles de millones de registros de Datastore a Spanner en producción en vivo, sin parar el juego ni un solo minuto**."

### 26. Arquitectura Pokémon GO

**[Esquema de arquitectura unificado: CDN + Load Balancer ➔ GKE ➔ Spanner + Pub/Sub + Dataflow + BigQuery]**

"Así resistió y ha seguido evolucionando la arquitectura de Pokémon GO hasta el día de hoy, tal como detalla el equipo de Google Cloud:

- **Cloud Load Balancing y Cloud CDN** se encargan de procesar las peticiones de millones de entrenadores, de balancear la carga entre todos los clusters de Kubernetes disponibles y de entregan las imágenes del juego desde el borde de la red más cercano a cada punto.
- **En el centro (Cómputo)**: Los miles de microservicios en **GKE** calculan qué criaturas aparecen en las celdas espaciales del mapa donde estás caminando.
- **Cloud Spanner** custodia los datos garantizando la consistencia global en las transacciones.
- La combinación de **Pub/Sub, Dataflow y BigQuery** procesa el torrente continuo de eventos en tiempo real, cazando trampas de GPS en directo y permitiendo analizar el comportamiento de millones de jugadores en todo el mundo."

### 27. Lección (Mundo 3)

**[Slide de lección con rayo ⚡ y pastillas de resumen]**

"Tercera lección: Tu infraestructura debe estar preparada para dos grandes retos: ser lo suficientemente elástica para resistir incluso lo inesperado, y tener la flexibilidad necesaria para evolucionar sus tecnologías a medida que el juego introduce nuevas formas de jugar."

---

## MUNDO 4: HALLOWEEN DOODLE

### 28. HERO: Halloween Doodle

**[Portada con el GIF animado de Magic Cat Academy de Google]**

"Mundo 4. Aquí encontramos un videojuego algo menos convencional. No sé si conocéis los Doodle de Google, son adaptaciones del logo de Google en su portada que Google lanza para celebrar fechas especiales.

El primer Doodle surgió cuando los fundadores de Google, Larry Page y Sergey Brin, se encontraron con que iban a estar fuera de la oficina y no podrían atender el servidor en caso de que algo fallara. Así que colocaron un muñequito detrás del logo para avisar a la gente de que estaban en el festival Burning Man.

Desde entonces los Doodle fueron evolucionando cada vez más incorporando imágenes, animaciones e incluso pequeños juegos.

En Halloween de 2018 Google dio por primera vez un salto más en sus Doodle creando su primer juego multijugador.

Pero cómo resolver el problema de elegir quién juega con quién. ¿Cómo emparejas a millones de personas que entran desde la portada de Google en partidas justas en segundos?"

### 29. ¿Qué es el Matchmaking?

**[Arena de matchmaking: Cola de tickets con ELO/Ping ➔ Motor de reglas ➔ Match equilibrado]**

"En cualquier juego multijugador, tú no buscas rivales en una lista interminable. Pulsas 'Jugar' y esperas que el sistema elija por ti. A eso lo llamamos **Matchmaking** (emparejamiento).

No sé si habéis tenido que organizar las mesas de una boda alguna vez, pero para mí el matchmaking es exactamente ese desafío: tienes que cuadrar afinidades para que nadie acabe tirándose los platos a la cabeza. Como sientes en la misma mesa a tu cuñado el que opina de criptomonedas y política al lado de tu tía la susceptible, o sientes juntos a familiares que no se hablan desde la última herencia, la fiesta acaba en drama.
El emparejador tiene que resolver una ecuación en segundos:

1. **Nivel de habilidad**: Si juegas contra alguien experto y tú eres novato, te elimina en un segundo; si juegas contra alguien novato y tú eres experto, te aburres. Tienen que ser rivales equilibrados.
2. **Cercanía de red (Ping)**: Tienes que jugar con personas de tu misma región para que los fantasmas no se muevan a saltos por culpa de la distancia.
3. **Modo de juego y tamaño de grupo**: El emparejador no solo resuelve duelos de 1 contra 1. Dependiendo del juego, puede necesitar emparejar 1v1, grupos de 4 personas o partidas de 5 contra 5, y el sistema debe encajar los tamaños exactos en segundos para no dejar partidas incompletas ni jugadores colgados esperando solos.

### 30. Open Match (El Estándar Abierto de Emparejamiento)

**[Flujo en 3 pasos: Ticket ➔ Match Function personalizada ➔ Assignment de servidor]**

"Para no reinventar este organizador en cada videojuego, Google y Unity crearon **Open Match**, un sistema libre y gratuito.

¿Cómo funciona exactamente en una partida?

1. Al pulsar jugar, tu navegador emite una entrada con tu nivel y tu velocidad de conexión.
2. **La Función de Emparejamiento** revisa las entradas en la cola y agrupa a los jugadores compatibles según las reglas que determine del juego.
3. Y finalmente busca una sala de juego libre en el servidor más cercano y conecta a los participantes en cuestión de segundos."

### 31. Lección (Mundo 4)

**[Slide de lección con calabaza 🎃 y pastillas de resumen]**

"Cuarta lección: Decidir con quién juegas es tan importante como el juego mismo. Un emparejamiento inteligente y rápido con Open Match es el ingrediente invisible para que una partida sea divertida desde el primer segundo."

---

## MUNDO 5: RAINBOW SIX MOBILE

### 32. HERO: Rainbow Six Mobile

**[Portada de Rainbow Six Mobile de Ubisoft]**

"Mundo 5. Rainbow Six Mobile de Ubisoft. Un juego de disparos táctico de 5 contra 5 donde un solo milisegundo decide quién gana. Aquí empezamos a ver algunos problemas que resuenan a otros niveles que ya hemos superado en nuestra partida de hoy. Sin embargo, es necesario responder a dos preguntas: ¿Dónde vive de verdad la partida y cómo evitamos que nadie haga trampas en el móvil?"

### 33. Dedicated Game Server (El Servidor Autoritativo)

**[Comparativa de autoridad del servidor vs clientes para Anti-Cheat]**

"Al tratarse de múltiples jugadores contra múltiples jugadores, la misma solución de conectar uno a uno como veíamos en Street Fighter no es viable. Y si la partida se ejecutara en el móvil del jugador sería podríamos encontrar con más facilidad que los jugadores pudieran hacer modificaciones en la memoria del teléfono para ser invulnerables o atravesar paredes. En estos juegos, la partida **nunca** se ejecuta por ello en el teléfono de los jugadores. Tu teléfono es solo una pantalla que envía lo que tocas y dibuja lo que le dicen.

La partida real vive en un ordenador en la nube llamado **Servidor Dedicado**.

¿Qué calcula exactamente este servidor 60 veces por segundo?

- **La posición 3D exacta de los 10 jugadores** (5 atacantes y 5 defensores).
- **La trayectoria de cada bala y los impactos en la cabeza (_headshots_)**.
- **La destrucción de las paredes**: Si una pared reforzada se ha roto con una carga explosiva.
- **La visión de las cámaras de los drones y el temporizador de la bomba**.

El servidor es el **árbitro supremo**: si tu teléfono dice que disparaste a través de un muro sólido, el árbitro en la nube comprueba que había una pared en medio y anula el disparo. Así se evitan trampas como ver a través de las paredes o volar."

### 34. MEME 1: Kubernetes vs Game Dev

**[Meme Woman Yelling at Cat: "¡¡Era la ronda final del Six Invitational!!" vs "Había poca carga y tocaba reducir pods"]**

"_(Risas de la audiencia al ver el meme)_. Y aquí tenemos el gran choque cultural de la industria:

Como comentábamos antes, si hay poca carga o algo va mal, Kubernetes se encarga de destruir los pods y los nodos. Si tú estás navegando por una web pero hay múltiples pods con su contenido, ni te enteras de que antes tenías 5 instancias y ahora tienes 3.

Pero en un videojuego, si dentro de ese contenedor están diez personas disputando la ronda final de un campeonato, si Kubernetes decide borrar ese pod para hacer limpieza, expulsa a los diez jugadores, la partida que está en memoria se pierde. Así que la industria necesitaba alguna manera de integrarse con Kubernetes asegurando que las partidas fueran intocables."

### 35. Agones (Kubernetes para Servidores de Videojuegos)

**[Conceptos de Fleet, Allocation y ciclo de vida de una partida en Agones]**

"Para resolver este problema, Ubisoft y Google Cloud crearon **Agones** (un proyecto open source que hoy usan los mayores estudios del mundo).

Agones utiliza Kubernetes por debajo pero digamos que le enseña a Kubernetes a entender las reglas del juego: le da información sobre qué servidores están vacíos esperando gente, cuáles están disputando una partida y prohíbe terminantemente apagar cualquier máquina donde haya una partida activa hasta que termine el encuentro."

### 36. La Flota de Servidores (Fleet Matrix)

**[Matriz visual de servidores: 3 en verde READY esperando ➔ 3 en magenta ALLOCATED con partidas activas ⚔️]**

"¿Cómo opera Agones? Gestionando una **Flota de servidores**:

Mantiene siempre un grupo de servidores en verde (**READY**), en el caso de Rainbow Six Mobilecon el mapa táctico cargado en memoria, con todo listo para levar a cabo una partida.

En cuanto Open Match junta a diez jugadores, Agones les entrega uno de esos servidores, lo pasa a color magenta (**ALLOCATED**) y le coloca un escudo protector: nadie puede apagar ese servidor hasta que la partida termine, se guarden los puntos y los jugadores salgan de la sala. Cuando la partida haya acabado será cuando el servidor se marque como listo para ser destruido o reutilizado para una nueva partida"

### 37. El Ciclo Maestro (Open Match + Agones)

**[Diagrama central en 4 pasos: Jugadores ➔ Open Match (¿Con quién?) ➔ Agones (¿Dónde?) ➔ Conexión UDP directa]**

"Con esta pieza se obtiene el ciclo perfecto que hace posible cualquier partida online moderna:

1. Los jugadores pulsan 'Buscar partida'.
2. **Open Match** evalúa diferentes reglas y decide qué personas van a jugar juntas.
3. **Agones** busca el servidor más cercano y lo reserva.
4. Y ya está todo listo para disfrutar de una partida sin interrupciones."

### 38. Lección (Mundo 5)

**[Slide de lección con diana 🎯 y pastillas de resumen]**

"Quinta lección: Kubernetes es una herramienta muy potente, pero hay que saber adaptarla a las necesidades específicas de cada industria. En los videojuegos competitivos, las partidas en curso son sagradas. Herramientas como Agones enseñan a Kubernetes a respetar el ciclo de vida de los videojuegos."

---

## RESUMEN Y CIERRE

### 39. El Mapa de Tecnologías en la Nube

**[Matriz 8-bit con las 11 tecnologías organizadas en cuadrícula y sus preguntas clave]**

"Hemos llegado al final de los cinco mundos y hemos completado nuestro mapa con once grandes tecnologías que trabajan juntas como un equipo de superhéroes:

- **GKE**: La plataforma de Kubernetes gestionada por Google para poder desplegar y escalar en contenedores las piezas de nuestro juego.
- **Cloud Spanner**: La base de datos relacional que nos permite almacenar de manera estructurada la información que necesitan nuestros juegos para funcionar.
- **Redis / Memorystore**: Una base de datos en memoria que permite almacenar información de manera temporal y acceder a información de manera ultrarrápida.
- **BigQuery**: El datawarehouse que nos permite almacenar y procesar petabytes de información analítica.
- **Firebase Remote Config**: El componente dentro de la suite de productos de Firebase que permite modificar parámetros de nuestros juegos en tiempo real.
- **Firebase Analytics**: La herramienta de medición que nos permite conocer cómo interactúan los usuarios con una aplicación.
- **Cloud Datastore**: Otro sistema de base de datos en este caso estructurado en documentos que escala de manera transparente.
- **Cloud Pub/Sub**: El sistema de mensajería que se encarga de recibir y hacer llegar a quienes tengan que procesar millones de mensajes por segundo.
- **Cloud Dataflow**: La herramienta que nos permite procesar grandes cantidades de información en tiempo real.
- **Open Match**: El organizador de partidas que ayuda a buscar rivales en segundos.
- **Agones**: La herramienta que le permite entender a Kubernetes cuál debe ser el ciclo de vida de los componentes de un videojuego."

### 40. Un Videojuego es un Sistema Distribuido

**[Diagrama orbital elíptico con el núcleo del videojuego y los 11 satélites tecnológicos en perfecta armonía]**

"La gran idea con la que quiero que os marchéis hoy es esta:

Un videojuego moderno no es solo un dibujo en una pantalla o un programa aislado. **Es un sistema distribuido completo:** once piezas hiperespecializadas cooperando en milisegundos.

Ese es el verdadero poder y la magia de la nube: **hacer que lo extremadamente complejo parezca totalmente invisible**."

### 41. Referencias Oficiales

**[Panel interactivo con los 12 enlaces oficiales a casos de estudio y documentación técnica de Google Cloud, Firebase, Agones y Open Match]**

"Aquí tenéis una recopilación de enlaces directos a publicaciones oficiales referentes a los juegos y tecnologías que hemos visto hoy por si alguien quiere consultarlos en más detalle."

---

### 42. Cierre (¡Gracias! · ¿Preguntas?)

**[Slide final retro con 3 corazones: INSERT COIN + Código QR para conectar + '¡GRACIAS! · PREGUNTAS']**

"_(Dejar esta diapositiva visible durante el turno de preguntas)_.

La próxima vez que cojáis vuestro móvil, encendáis vuestra consola o echéis una partida con vuestros amigos al otro lado del mundo... acordaos por un segundo de todas las piezas invisibles que están girando en el cielo para que podáis divertiros.

Si queréis seguir en contacto o comentar cualquier duda técnica, tenéis ahí mi código QR para conectar.

Muchísimas gracias a todas y a todos por jugar esta partida conmigo. Quedo a vuestra disposición para cualquier pregunta. ¡Ha sido un auténtico placer!"
