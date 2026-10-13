# Guion de la Charla: INSERT COIN, PLAY GOOGLE CLOUD

Este documento contiene el discurso completo sugerido para tu presentación de 35 a 45 minutos. Está diseñado para ser **totalmente accesible y divulgativo**, explicando la tecnología mediante **analogías cotidianas y metáforas sencillas**, pero anclado rigurosamente en la **información técnica real y pública** de los casos de estudio oficiales de cada videojuego.

---

## 01. COVER (Portada)

**[La diapositiva muestra "INSERT COIN / PLAY GOOGLE CLOUD", 3 corazones de vida, créditos: 45 MIN y el parpadeo de "PRESS SPACE / START"]**

"¡Hola a todo el mundo! Gracias por asistir a mi charla _'Insert Coin, Play Google Cloud'_.

Me gustaría empezar haciendo una pregunta rápida: que levante la mano quien haya jugado a algún videojuego en la última semana, ya sea en el móvil mientras venía en transporte público, en la consola o en el ordenador. _(Pausa para ver las manos alzadas)_. Prácticamente toda la sala. Y es completamente natural: hoy los videojuegos son la mayor industria de entretenimiento del mundo.

Cuando jugamos, todo parece instantáneo y mágico: encendemos la pantalla, pulsamos un botón para empezar una partida y, en cuestión de segundos, estamos jugando con personas que están a miles de kilómetros.

Pero detrás de esa pantalla no hay magia. Hay una obra colosal de ingeniería. Hay decenas de piezas invisibles trabajando en segundo plano."

## 02. AGENDA (Stage Select)

**[Aparece el menú arcade de selección de nivel con las 4 tarjetas de los mundos]**

"Hoy vamos a recorrer cuatro videojuegos que espero que os sean conocidos y descubriremos cómo la nube de Google Cloud hace posible que todo funcione entre bambalinas.

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

## MUNDO 1: FRUIT NINJA

### 04. HERO: Fruit Ninja

**[Portada con arte de Fruit Ninja de Halfbrick Studios]**

"Mundo 1. Fruit Ninja de Halfbrick Studios. El juego de cortar fruta al vuelo que batió récords en todos nuestros móviles. Y con él abordamos el primer gran reto: ¿Cómo mantienes vivo un juego móvil, pruebas nuevas mecánicas y cambias parámetros en directo sin obligar a los jugadores a descargarse actualizaciones constantes de las tiendas?"

### 05. LiveOps y el Reto de las Tiendas

**[Comparativa visual: Vía lenta de parches en App Store/Google Play vs Vía rápida de LiveOps en la nube]**

"En los videojuegos para móviles existe un concepto fundamental llamado **LiveOps (operaciones en vivo)**. Un juego móvil nunca se termina: tienes que lanzar eventos de Navidad, ajustar la dificultad si un nivel es imposible o cambiar el precio de una espada.

El problema tradicional es la burocracia de las tiendas de aplicaciones:

1. Cambias una sola variable en tu código para rebajar la velocidad de una fruta.
2. Tienes que compilar una versión nueva del juego entero.
3. Lo envías a revisión a Google Play o a la App Store de Apple, donde pueden tardar días en aprobarlo.
4. Y lo peor: tienes que obligar al usuario a descargarse un parche de 500 MB solo por haber cambiado un número.

Muchos jugadores, si ven una actualización obligatoria cuando van en el metro con mala cobertura, simplemente cierran el juego y no vuelven a entrar."

### 06. Firebase Platform

**[Ecosistema integral de Firebase para desarrollo y operaciones móviles]**

"Para resolver este problema en el mundo móvil, Google ofrece **Firebase**, una plataforma completa de herramientas diseñadas específicamente para crear, monitorizar y hacer evolucionar aplicaciones y juegos móviles a escala mundial."

### 07. Remote Config (El Mando a Distancia en la Nube)

**[Diagrama de mandos: Servidor en la nube cambiando variables en tiempo real en los teléfonos de los jugadores]**

"La herramienta estrella de Firebase para solucionar el problema de las tiendas es **Firebase Remote Config**.

Remote Config es como tener un **mando a distancia en la nube conectado a cada teléfono**. En lugar de escribir en el código del juego que una partida dura 60 segundos o que una katana vale 100 monedas, el juego le pregunta a la nube en milisegundos qué valores utilizar.

¿Qué nos permite hacer esto?

- **Cambios instantáneos**: Cambias un número en la consola de Google Cloud y, al segundo siguiente, todos los jugadores del mundo ven el nuevo valor sin descargar nada.
- **Experimentos A/B**: A la mitad de los jugadores les pones un evento de frutas doradas y a la otra mitad el juego normal, para ver qué grupo se divierte más.
- **Personalización por segmentos**: Mostrar un aviso pidiendo una valoración en la tienda solo a los jugadores que han ganado 5 partidas seguidas y están contentos."

### 08. El Ciclo Vital (Analytics ➔ BigQuery ➔ Remote Config)

**[Diagrama circular Flywheel: Teléfono ➔ Firebase Analytics ➔ BigQuery ➔ Remote Config ➔ Teléfono (+16% ingresos)]**

"Pero, ¿cómo decide Halfbrick qué parámetros cambiar en Fruit Ninja? No lo hacen al azar.

Crearon un **círculo virtuoso de datos en tiempo real**:

1. **Medir**: El juego envía los eventos anónimos a **Firebase Analytics** (qué fruta se corta, en qué segundo se pierde, cuántos anuncios se ven).
2. **Analizar**: Esos datos viajan a **BigQuery**, el almacén masivo de Google Cloud capaz de analizar miles de millones de eventos en tres segundos para descubrir qué patrones hacen que los jugadores se enganchen más o cuándo un anuncio resulta molesto.
3. **Actuar**: Con esas conclusiones matemáticas, el equipo ajusta **Remote Config**.

¿El resultado real en Fruit Ninja? **Un incremento del 16% en los ingresos** y millones de jugadores más fieles sin haber publicado ni una sola actualización en las tiendas de apps."

### 09. Lección (Mundo 1)

**[Slide de lección con sandía partida 🍉 y pastillas de resumen]**

"Primera gran lección: Tu juego no termina cuando lo publicas en la tienda. Cambiar parámetros en caliente y escuchar los datos con Firebase y BigQuery te permite mejorar la experiencia de juego en tiempo real."

---

## MUNDO 2: STREET FIGHTER 6

### 10. HERO: Street Fighter 6

**[Portada con arte de Street Fighter 6 de Capcom]**

"Fruit Ninja era un juego individual en el móvil... pero ¿qué ocurre cuando queremos meter a millones de personas a la vez en salones recreativos 3D mundiales?

Pasemos al Mundo 2. Street Fighter 6 de Capcom, el rey de los juegos de lucha. ¿Cómo creas un salón recreativo virtual donde millones de personas puedan encontrarse y retarse entre consolas y ordenadores, y cómo mantienes un ranking mundial unificado?"

### 11. El Juego y el Reto

**[Detalles del Battle Hub, cross-play y la caja de enfrentamiento Madrid vs Tokio]**

"En Street Fighter 6, Capcom creó el _'Battle Hub'_: un salón recreativo virtual en 3D donde caminas con tu avatar, chateas con otros jugadores y te sientas en máquinas recreativas virtuales para iniciar una pelea.

Cuenta con **crossplay**: alguien jugando en PlayStation en Madrid puede retar a alguien en PC en Tokio o en Xbox en Londres.

El gran desafío aquí es doble: por un lado, gestionar cientos de salones virtuales en paralelo con hasta 100 avatares sincronizados en tiempo real y rankings universales inmutables; y por otro, cuando dos jugadores se sientan en la máquina, arrancar un combate 1v1 que se ejecuta directamente entre sus consolas mediante conexión punto a punto (P2P). ¿Cómo organizamos toda esta infraestructura en la nube?"

### 12. Contenedores (¿Cómo empaquetamos el juego?)

**[Tarjeta conceptual con la analogía del transporte marítimo en los años 50 vs contenedores de software Docker con piezas del juego]**

"Para resolver el reto del Battle Hub, el primer paso de Capcom fue decidir cómo empaquetar todas las piezas que dan vida al juego: el salón 3D, el chat, la tienda, el matchmaking, el ranking...

Para entender cómo lo hicieron, nos fijamos en la revolución de los **contenedores marítimos**. Antes de los años 50, cargar un barco de mercancías era caótico porque cada mercancía venía en cajas, barriles o sacos distintos. El contenedor estándar lo cambió todo: la caja exterior tiene medidas idénticas y encaja en cualquier barco, tren o camión del mundo.

En software hacemos exactamente lo mismo. Capcom empaqueta cada servicio del juego en su propio **Contenedor (Docker)** junto con su código y sus dependencias. ¿La gran ventaja? Elimina por completo el _'en mi máquina funciona'_. Se ejecuta con idéntico comportamiento en el ordenador del desarrollador y en los servidores de la nube."

### 13. Kubernetes (¿Quién gestiona tantos contenedores?)

**[Tarjeta de Kubernetes: El capitán y timonel automatizado que orquesta la flota]**

"Pero cuando tienes cientos de salones virtuales abiertos y miles de contenedores de juego ejecutándose a la vez, surge la pregunta: ¿quién coordina toda esa flota?

Ahí entra **Kubernetes** (que en griego clásico significa _'timonel'_ o _'capitán'_).

Kubernetes es el director de orquesta del puerto: vigila constantemente todos los contenedores del juego, decide en qué servidor desplegar cada sala, arranca nuevos contenedores si hay avalanchas de jugadores y, si un contenedor de chat sufre un fallo, lo reemplaza en cuestión de segundos sin que nadie lo note."

### 14. ¿Qué es un Clúster?

**[Diagrama visual del Clúster: Control Plane arriba y Nodos con Pods iluminados abajo]**

"Para llevar a cabo esta tarea Kubernetes se ejecuta en **clústeres**.

Un clúster es un equipo de ordenadores trabajando juntos. A cada ordenador lo llamamos **Nodo**.

En lo alto está el **Plano de Control**: vigila todo el tráfico y decide qué nodo tiene espacio libre.

Y dentro viajan los **Pods**, que son las unidades mínimas donde corren los contenedores: unos pods contienen salas del Battle Hub, otros el chat y otros los perfiles. Si una sala se llena de jugadores, el plano de control despliega más pods en los nodos disponibles."

### 15. GKE (Google Kubernetes Engine)

**[Diagrama de auto-escalado: 10K tráfico normal con 2 nodos ➔ 100K pico de torneo con 15 nodos]**

"Construir y mantener toda la infraestructura necesaria uno mismo es caro y complejo. Por eso Capcom utiliza **GKE (Google Kubernetes Engine)**.

GKE nos facilita la tarea: tú solo entregas los contenedores con las piezas de tu juego, y Google se encarga de gestionar las máquinas, parches y seguridad.

Durante el lanzamiento de Street Fighter 6, más de 100.000 jugadores entraron a la vez. GKE detectó la avalancha y amplió automáticamente la infraestructura de 2 a 15 máquinas en cuestión de dos minutos, manteniendo los servidores estables sin una sola caída. Y cuando bajó el tráfico, redujo las máquinas para ahorrar costes."

### 16. Cloud Spanner (Datos Globales Consistentes)

**[Diagrama interactivo del globo terráqueo con nodos en Madrid y Tokio sincronizados vía TrueTime]**

"Una vez que tenemos los salones corriendo en GKE... surge la siguiente gran pregunta: ¿dónde guardamos los datos sagrados que jamás pueden perderse ni corromperse?

Ahí es donde entra **Cloud Spanner**.

En Street Fighter 6, Spanner guarda los datos permanentes y críticos:

- Tu perfil oficial y la cuenta Capcom ID.
- Tus puntos de ranking mundial (_League Points_ y _Master Rating_).
- Tus compras de _Fighter Coins_ y tu progreso en el Pase de Batalla.

Spanner actúa como un **árbitro global con sincronización perfecta**. Apoyado en los **relojes atómicos y satélites GPS** de la tecnología _TrueTime_ de Google, garantiza que cualquier victoria o compra se registre con una marca temporal indiscutible en todo el mundo, evitando que dos servidores se contradigan."

### 17. Redis / Memorystore (Velocidad Sub-Milisegundo)

**[Comparador de velocidad: Disco persistente 50ms 🐢 vs Redis en RAM <1ms ⚡]**

"Pero hay datos que cambian cada milisegundo y no tiene sentido escribirlos en Spanner:

¿Qué se guarda en **Redis (Cloud Memorystore)**?

- **El estado efímero del Battle Hub**: ¿En qué cabina recreativa virtual está sentado cada avatar?
- **El bloqueo exclusivo de máquinas**: Si te sientas a la izquierda de una cabina, Redis bloquea ese asiento al instante para que nadie se siente encima de ti.
- **Las colas de espectadores**.

Redis guarda todo directamente en **memoria RAM** y responde en **menos de un milisegundo**."

### 18. BigQuery (Telemetría y Balance de Golpes)

**[Embudo de millones de partidas procesadas en BigQuery hacia Balance y Parches]**

"Y al igual que vimos en Fruit Ninja, Capcom envía toda la telemetría de los combates a **BigQuery**: qué personajes ganan más torneos, qué golpes hacen demasiado daño y qué técnicas están descompensadas. Con ese análisis masivo, los diseñadores pueden sacar parches periódicos de equilibrio completamente justos."

### 19. Lección (Mundo 2)

**[Slide de lección con puño K.O. 🥊 y pastillas de resumen]**

"Segunda lección: Separa el estado de la lógica. Usa GKE para procesar, Redis para la inmediatez en memoria y Spanner para la verdad absoluta de tus jugadores."

---

## MUNDO 3: RAINBOW SIX MOBILE

### 20. HERO: Rainbow Six Mobile

**[Portada con arte de Rainbow Six Mobile de Ubisoft]**

"En un juego 1v1 como Street Fighter, una conexión directa P2P entre dos jugadores funciona genial... pero ¿qué pasa cuando tienes una partida competitiva de 10 personas armadas con rifles tácticos donde nadie se fía de nadie?

Bienvenidos al Mundo 3. Rainbow Six Mobile de Ubisoft. ¿Cómo ejecutas partidas multijugador tácticas sin trampas, con latencia mínima y gestionando servidores dedicados de forma elástica?"

### 21. Dedicated Game Server (El Servidor Autoritativo vs P2P)

**[Comparativa: P2P con riesgo de trampas y lag host vs Servidor Dedicado Autoritativo neutral]**

"En un shooter competitivo 5v5 como Rainbow Six, el modelo P2P no sirve: si el jugador que hace de 'anfitrión' tiene mala conexión, toda la partida tiene lag; y si es un tramposo, puede trucar el tráfico a su favor.

La solución estándar es el **Servidor Dedicado de Juego (Dedicated Game Server)**: una instancia del motor del juego corriendo en la nube que actúa como **juez neutral**. Los 10 móviles solo envían sus pulsaciones, y el servidor calcula la física, las balas y las vidas de forma autoritativa.

El gran problema: cada servidor dedicado consume mucha CPU y memoria. ¿Cómo los levantamos y apagamos dinámicamente en la nube según la demanda?"

### 22. MEME: Kubernetes vs Game Dev

**[Meme de K8s: Six Invitational ➔ Kubernetes matando el Pod en plena final ➔ Cara de pánico]**

"El primer impulso de cualquier ingeniero de sistemas sería: _'¡Pues usemos Kubernetes!'_.

Pero aquí hay un choque cultural gigantesco entre cómo piensa Kubernetes y cómo funciona un videojuego:

- Kubernetes fue diseñado para la web: si una máquina se satura, Kubernetes 'mata' un contenedor web y lo arranca en otro servidor. En una web de compras no pasa nada: el usuario recarga la página y sigue comprando.
- Pero en un videojuego, **un contenedor ES una partida en curso**. Si Kubernetes decide matar un Pod a mitad de una final de torneo porque necesita reordenar el clúster... acaba de arruinar la partida a 10 personas."

### 23. Agones (Kubernetes para Servidores de Videojuegos)

**[Arquitectura de Agones extendiendo Kubernetes con el Custom Resource 'GameServer']**

"Para solucionar este desencuentro, Google Cloud y Ubisoft cofundaron **Agones**, un proyecto de código abierto que se instala sobre Kubernetes.

Agones le 'enseña' a Kubernetes las reglas de los videojuegos mediante un nuevo concepto: el **GameServer**.

Le dice a Kubernetes: _'Jamás toques ni apagues un contenedor que esté en estado ALLOCATED (partida en curso). Espera a que termine la ronda y sea el propio juego el que te avise de que se puede cerrar'._"

### 24. La Flota de Servidores (Fleet Matrix)

**[Ciclo de vida de la flota: Servidores READY en espera ➔ ALLOCATED en combate ➔ SHUTDOWN ordenado]**

"Agones gestiona lo que llamamos una **Flota de Servidores (Fleet)**:

1. **Estado READY**: Mantiene un colchón de servidores dedicados vacíos, ya arrancados y listos en memoria para que cuando 10 jugadores quieran jugar, la asignación sea instantánea (cero segundos de espera).
2. **Estado ALLOCATED**: Cuando empieza la partida, el servidor pasa a estado reservado y queda completamente blindado contra reinicios automáticos.
3. **Estado SHUTDOWN**: Cuando la partida termina tras 15 minutos, el servidor guarda los resultados y se destruye limpiamente para liberar memoria para nuevas partidas."

### 25. Lección (Mundo 3)

**[Slide de lección con escudo táctico 🛡️ y pastillas de resumen]**

"Tercera lección: No fuerces tu problema a la herramienta; adapta la herramienta a tu problema. Agones enseña a la nube a respetar la naturaleza de las partidas en directo."

---

## MUNDO 4: POKÉMON GO

### 26. HERO: Pokémon GO

**[Portada con arte de Pokémon GO de Niantic]**

"Ya sabemos cómo orquestar servidores dedicados, partidas y bases de datos para cientos de miles de personas... pero ¿qué ocurre si de la noche a la mañana tu juego explota y desata el mayor fenómeno viral de la historia de los videojuegos móviles?

Llegamos a nuestro cuarto y último mundo: Pokémon GO de Niantic. ¿Cómo diseñas una infraestructura capaz de soportar 50 veces más tráfico del peor escenario que jamás habías imaginado?"

### 27. El Pico de Tráfico Viral

**[Gráfica real de Niantic: Tráfico esperado 1X ➔ Peor escenario estimado 5X ➔ Tráfico real alcanzado 50X 🚀]**

"Verano de 2016. Niantic lanza Pokémon GO.

Los ingenieros de Niantic y Google Cloud se habían sentado meses antes a calcular la capacidad:
- Definieron un **tráfico esperado normal (1X)**.
- Por seguridad, se prepararon para un **peor escenario catastrófico (5X)**.

La realidad: en cuestión de días, millones de personas salieron a la calle en todo el planeta buscando Pokémon. El tráfico real superó **50 veces las estimaciones iniciales** y 10 veces el peor escenario temido.

Cualquier centro de datos tradicional habría colapsado en minutos."

### 28. ¿Cómo Absorbió la Nube el Impacto? (GKE + Cloud Datastore)

**[Diagrama de colaboración: El clúster de GKE más grande de la historia + Datastore NoSQL + Equipo Google SRE]**

"¿Cómo sobrevivió Pokémon GO?

1. **GKE al límite**: Se convirtió en el clúster de Kubernetes en producción más grande jamás desplegado en Google Cloud en ese momento, escalando miles de nodos automáticamente.
2. **Cloud Datastore**: Una base de datos NoSQL documental diseñada para absorber escrituras y lecturas masivas sin degradarse.
3. **El equipo de Google SRE (Site Reliability Engineering)**: Ingenieros de Google y Niantic colaborando hombro con hombro en tiempo real para inyectar recursos y balancear el tráfico conforme el juego se encendía en cada huso horario del planeta."

### 29. Cloud Pub/Sub (Transportar Millones de Eventos)

**[Diagrama de tuberías: Capturas y Poképaradas ➔ Tubería Pub/Sub desacoplada]**

"Con decenas de millones de personas jugando a la vez, cada captura de Pokémon, cada giro de Poképarada y cada combate genera eventos.

Para que los servidores no se atasquen intentando procesar todo a la vez, utilizan **Cloud Pub/Sub**: una cinta transportadora gigante capaz de ingerir millones de mensajes por segundo y entregarlos de forma ordenada y garantizada sin perder ni un solo dato."

### 30. Dataflow (Procesamiento en Streaming en Tiempo Real)

**[Diagrama de flujo: Cloud Pub/Sub ➔ Cloud Dataflow en paralelo ➔ Detección de trampas y analítica]**

"Esos millones de eventos que viajan por Pub/Sub entran directamente a **Cloud Dataflow**.

Dataflow es un procesador de datos en tiempo real: analiza la información mientras está en movimiento, calculando estadísticas del mapa, detectando patrones de trampas o teletransporte de GPS y alimentando los sistemas del juego sin retraso."

### 31. Datastore (NoSQL) vs Spanner (Relacional)

**[Comparativa de bases de datos: Datastore para el lanzamiento NoSQL flexible ➔ Cloud Spanner para escala relacional global]**

"En el lanzamiento, Niantic usó Cloud Datastore por su elasticidad extrema.

Sin embargo, conforme el juego maduró y se añadieron combates entre entrenadores, amigos e intercambio de Pokémon, se hizo imprescindible tener relaciones estrictas e inventarios compartidos.

Niantic llevó a cabo una de las hazañas de ingeniería más impresionantes de la industria: **migrar la base de datos de cientos de millones de jugadores de Datastore a Cloud Spanner en vivo**, combinando la flexibilidad de NoSQL con la consistencia atómica relacional sin apagar el juego."

### 32. Arquitectura Pokémon GO

**[Diagrama completo: Móvil ➔ Cloud CDN ➔ GKE (Lógica) ➔ Datastore / Spanner / Bigtable + Pub/Sub + Dataflow]**

"Esta es la foto completa de la infraestructura de Pokémon GO: una arquitectura desacoplada, donde cada pieza —desde el CDN que entrega los mapas hasta Spanner y Bigtable— está diseñada para escalar de forma independiente hasta el infinito."

### 33. Lección (Mundo 4)

**[Slide de lección con Pokéball 🔴 y pastillas de resumen]**

"Cuarta lección: El éxito masivo no avisa. Diseñar arquitecturas desacopladas y apoyarte en servicios gestionados elásticos es la única garantía para que tu aplicación sobreviva a su propio éxito."

---

## RESUMEN Y CIERRE

### 34. El Mapa de Tecnologías en la Nube

**[Matriz 8-bit con las 10 tecnologías organizadas en cuadrícula 5x2 y sus preguntas clave]**

"Hemos llegado al final de nuestros cuatro mundos y hemos completado nuestro mapa con diez grandes tecnologías que trabajan juntas como un equipo de superhéroes:

- **Firebase Remote Config**: El mando a distancia para cambiar variables y mecánicas en vivo sin pasar por las tiendas de apps.
- **Firebase Analytics**: La telemetría móvil para medir el comportamiento de los jugadores en tiempo real.
- **BigQuery**: El motor analítico para procesar petabytes de partidas y guiar el balanceo del juego.
- **GKE**: La plataforma de Kubernetes gestionada por Google para desplegar y autoescalar los componentes del juego.
- **Cloud Spanner**: La base de datos relacional planetaria con sincronización TrueTime para inventarios y rankings sagrados.
- **Redis / Memorystore**: La memoria RAM ultrarrápida para estados efímeros en menos de 1 milisegundo.
- **Agones**: La extensión de Kubernetes que enseña a la nube a respetar el ciclo de vida de los servidores de videojuegos dedicados.
- **Cloud Datastore**: La base de datos NoSQL documental de elasticidad masiva.
- **Cloud Pub/Sub**: La cinta transportadora de mensajería para millones de eventos por segundo.
- **Cloud Dataflow**: El procesador de datos en streaming en tiempo real."

### 35. Un Videojuego es un Sistema Distribuido

**[Diagrama orbital elíptico con el núcleo del videojuego y los 10 satélites tecnológicos en perfecta armonía]**

"La gran idea con la que quiero que os marchéis hoy es esta:

Un videojuego moderno no es solo un dibujo en una pantalla o un programa aislado. **Es un sistema distribuido completo:** diez piezas hiperespecializadas cooperando en milisegundos.

Ese es el verdadero poder y la magia de la nube: **hacer que lo extremadamente complejo parezca totalmente invisible**."

### 36. Referencias Oficiales

**[Panel interactivo con los enlaces oficiales a casos de estudio y documentación técnica de Google Cloud, Firebase y Agones]**

"Aquí tenéis una recopilación de enlaces directos a publicaciones y charlas técnicas oficiales referentes a los cuatro juegos que hemos analizado hoy por si queréis profundizar en su arquitectura."

---

### 37. Cierre (¡Gracias! · ¿Preguntas?)

**[Slide final retro con 3 corazones: INSERT COIN + Código QR para conectar + '¡GRACIAS! · PREGUNTAS']**

"_(Dejar esta diapositiva visible durante el turno de preguntas)_.

La próxima vez que cojáis vuestro móvil, encendáis vuestra consola o echéis una partida con vuestros amigos al otro lado del mundo... acordaos por un segundo de todas las piezas invisibles que están girando en el cielo para que podáis divertiros.

Si queréis seguir en contacto o comentar cualquier duda técnica, tenéis ahí mi código QR para conectar.

Muchísimas gracias a todas y a todos por jugar esta partida conmigo. Quedo a vuestra disposición para cualquier pregunta. ¡Ha sido un auténtico placer!"
