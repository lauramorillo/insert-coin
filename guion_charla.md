# 🕹️ Guion de la Charla: INSERT COIN, PLAY GOOGLE CLOUD
**Duración objetivo:** ~34 minutos de exposición (dejando 5–6 min de margen para no superar nunca el límite estricto de 40 min).  
**Estilo:** Escrito con tu propio tono y expresiones reales de la charla, ajustado para ir al grano en las transiciones que antes alargaban el tiempo.

---

## ⏱️ Mapa de Tiempos (Checkpoints en vivo)
* **00:00 – 03:00 (3 min):** Intro y Perfil (Slides 01–03)
* **03:00 – 09:00 (6 min):** World 1 · Fruit Ninja (Slides 04–09)
* **09:00 – 19:00 (10 min):** World 2 · Street Fighter 6 (Slides 10–18)
* **19:00 – 25:30 (6.5 min):** World 3 · Rainbow Six Mobile (Slides 19–24)
* **25:30 – 32:30 (7 min):** World 4 · Pokémon GO (Slides 25–32)
* **32:30 – 34:30 (2 min):** Resumen Final y Cierre (Slides 33–36)

---

## 🟢 BLOQUE 0: INTRODUCCIÓN (Slides 01 – 03) · *[00:00 - 03:00]*

### Slide 01: INSERT COIN / PLAY GOOGLE CLOUD
> "¡Buenas! Bienvenidos a *Insert Coin, Play Google Cloud*, un pequeño guiño ya desde el título a las antiguas máquinas recreativas.  
> Antes de empezar, que levante la mano quién haya jugado a algún videojuego en la última semana... No tenéis por qué ser personas súper viciadas con una consola en casa; hoy en día con el móvil tenemos mogollón de opciones, desde un solitario o el Candy Crush hasta juegos competitivos.  
> Cuando jugamos, lo que a simple vista parece casi magia y funciona solo, en realidad lleva por detrás una combinación enorme de tecnologías para que millones de usuarios en todo el mundo tengamos la mejor experiencia posible."

### Slide 02: SELECT YOUR GAME (Los 4 Mundos)
> "Y eso es justo lo que vamos a ver hoy: qué ocurre detrás de cuatro juegos muy conocidos —*Fruit Ninja*, *Street Fighter 6*, *Rainbow Six Mobile* y *Pokémon GO*— aumentando poquito a poco la complejidad para ver qué retos tenía cada uno y con qué piezas de Google Cloud los resolvieron."

### Slide 03: PLAYER 1 · Laura Morillo-Velarde
> "Antes de meternos en harina, me presento muy rápido: soy Laura Morillo-Velarde, trabajo como Technical Lead en Seedtag y soy Google Developer Expert (GDE) en Google Cloud —que, por si alguien no conoce el programa, no trabajamos para Google, sino que somos gente de comunidad a la que nos gusta compartir lo que aprendemos—. Y también soy embajadora de Women Techmakers.  
> Llevo más de 19 años entre desarrollo e ingeniería de plataforma y siempre me ha gustado destripar qué pasa detrás de lo que el ojo ve.  
> Ahí tenéis el **código QR** con mi X, mi Bluesky y mi LinkedIn: lo dejo especialmente por si durante la charla queréis hacer alguna foto y subirla mencionándome, o por si me queréis escribir después. Como hoy vamos con el tiempo muy ajustado a 40 minutos, si al final no nos da tiempo a preguntas estaré encantada de responderos todas las dudas en el descanso."

---

## 🍉 WORLD 1: FRUIT NINJA (Slides 04 – 09) · *[03:00 - 09:00]*

### Slide 04: WORLD 1 · FRUIT NINJA
> "Empezamos por un clásico: *Fruit Ninja*, que nació en 2010 cuando empezaban a despegar los smartphones. La mecánica la conocemos todos: van saliendo frutas en pantalla, deslizas el dedo como si fueras un ninja para cortarlas antes de que caigan y esquivas las bombas.  
> Parece sencillísimo porque juegas tú solo contra la máquina en tu móvil. ¿Dónde está entonces el reto técnico? En **cómo consigo que un jugador no se aburra a los dos días** y en cómo puedo cambiar el comportamiento del juego en vivo sin obligarle a actualizar la aplicación."

### Slide 05: LIVEOPS: OPERAR UN JUEGO EN VIVO
> "Pensad en lo que pasa cuando desarrollas para móvil: si cada vez que quieres ajustar la dificultad o lanzar un evento de Halloween tienes que subir una versión nueva a la App Store o a Google Play, esperar 24 o 48 horas a que te la revisen y rezar para que el usuario tenga activadas las actualizaciones automáticas... cuando le llega el cambio ya se ha pasado Halloween.  
> Por eso hoy los juegos operan bajo el modelo de **LiveOps** (operaciones en vivo): poder ajustar parámetros, eventos temporales y monetización al vuelo desde la nube."

### Slide 06: FIREBASE (La plataforma de desarrollo de apps)
> "Para no tener que construir toda esa fontanería desde cero, Halfbrick Studios se apoyó en **Firebase**, que es básicamente la navaja suiza que ofrece Google para aplicaciones móviles y web. Te da resuelto desde la autenticación o las notificaciones hasta la configuración remota y la analítica."

### Slide 07: ¿CÓMO CAMBIO EL JUEGO SIN ACTUALIZARLO? (Firebase Remote Config)
> "La primera pieza clave que utilizan es **Firebase Remote Config**. En lugar de meter constantes fijas en el código, el juego consulta a la nube al abrirse qué valores debe usar hoy.  
> ¿Para qué lo usa *Fruit Ninja*? Por ejemplo, para decidir cada cuántas partidas te muestra un anuncio sin llegar a desesperarte, cuándo te enseña el mensajito pidiéndote que valores la app en la store, o incluso para ajustar las reglas del juego en tiempo real, como cuántos segundos duran las bananas especiales que congelan el tiempo."

### Slide 08: EL CICLO VITAL DE MEJORA (Analytics + BigQuery + A/B Testing)
> "Pero claro, cambiar parámetros a ciegas es tirar una moneda al aire. Por eso combinan tres piezas en bucle:  
> Primero, con **Firebase Analytics** recogen eventos de todo lo que pasa en el juego (cuándo ganas, cuándo pierdes, si cierras la app cuando sale un anuncio).  
> Segundo, como son millones de jugadores generando terabytes de eventos cada día, vuelcan todo eso a **BigQuery**, que es el Data Warehouse sin servidor de Google Cloud capaz de cruzar petabytes de datos analíticos en pocos segundos.  
> Y tercero, con **Firebase A/B Testing** prueban hipótesis con grupos pequeños de usuarios. Así descubrieron algo súper curioso: el mejor momento para pedirte que valores la app no es al abrirla ni tras jugar cinco partidas, sino **justo cuando acabas de ganar una partida o batir tu récord**, porque estás en pleno subidón de euforia. Solo con ese ajuste consiguieron un **15% más de valoraciones de 5 estrellas** y un **16% más de ingresos publicitarios**."

### Slide 09: WORLD 1 · LECCIÓN
> "Así que primera lección con *Fruit Ninja*: incluso un juego de un solo jugador que corre en tu móvil necesita hoy la nube por detrás para medir, experimentar con datos reales y evolucionar en vivo sin pasar por la tienda de aplicaciones."

---

## 🥊 WORLD 2: STREET FIGHTER 6 (Slides 10 – 18) · *[09:00 - 19:00]*

### Slide 10: WORLD 2 · STREET FIGHTER 6
> "Subimos de nivel y nos vamos al mundo 2 con el rey indiscutible de los juegos de lucha: *Street Fighter 6*, lanzado por Capcom en 2023."

### Slide 11: EL JUEGO Y EL RETO
> "Hasta *Street Fighter V* tú entrabas al juego y decías 'quiero pelear', te emparejaban con alguien y listo. Pero en *Street Fighter 6* quisieron recuperar la magia de los salones recreativos de los 90 creando el **Battle Hub**: un salón virtual en 3D donde entras con tu avatar, caminas por la sala, te sientas en una recreativa libre esperando rival, o te acercas a otra máquina donde ya hay dos personas peleando para **cotillear su partida en directo**.  
> Además, tiene **cross-play total** entre PlayStation 5, Xbox y PC, y un **ranking mundial único**.  
> Y ojo a un detalle arquitectónico fundamental que nos servirá luego: el combate de 1 contra 1 entre los dos luchadores **no se ejecuta en la nube**, sino que va por conexión directa consola a consola (**P2P** con *Rollback Netcode*) para no añadir ni un milisegundo de latencia. Pero todo lo demás —el salón 3D del Battle Hub, el matchmaking, el ranking mundial y la retransmisión del combate para la gente que se acerca a la recreativa a mirar— corre íntegramente en Google Cloud."

### Slide 12: ¿CÓMO EMPAQUETAMOS EL JUEGO? (Contenedores)
> "¿Y cómo organiza Capcom todas esas piezas en la nube? Aquí pasa exactamente igual que en el transporte marítimo en los años 50: antes cargaban sacos, barriles y cajas de mil tamaños distintos a mano en los barcos y era un caos; hasta que inventaron el **contenedor estándar**, que da igual si dentro lleva coches o plátanos porque encaja con las mismas grúas en cualquier barco o camión del mundo.  
> En software copiamos la idea con los **contenedores (Docker)**: empaquetamos cada funcionalidad con su código y sus dependencias para olvidarnos del famoso *'en mi máquina funciona'*. Así Capcom tiene contenedores separados para la autenticación, para el chat, para la sala 3D del Battle Hub y para retransmitir las partidas."

### Slide 13: TECNOLOGÍA · KUBERNETES
> "Claro, en el lanzamiento de *Street Fighter 6* tuvieron picos de más de 100.000 jugadores simultáneos solo en PC. Cuando tienes miles de contenedores corriendo, necesitas un capitán de puerto que los coordine, y ese es **Kubernetes** (que de hecho en griego significa 'timonel').  
> Un clúster de Kubernetes tiene arriba el **Control Plane** (el cerebro que decide dónde va cada cosa y vigila que todo esté sano) y abajo los **Nodos** (los servidores físicos o virtuales). Dentro de los nodos corren los **Pods**, que son la unidad mínima que envuelve a nuestros contenedores: ahí veis pods para el *Battle Hub*, el *Chat*, el *Rank*, el *Auth* y esos pods de **Match**.  
> ¿Qué hacen esos pods de *Match* si hemos dicho que la pelea 1v1 va directo de consola a consola? Pues mientras los dos jugadores pelean en P2P, sus consolas van enviando las acciones que pulsan a ese pod de *Match* en Kubernetes para que **reproduzca el combate en tiempo real a cualquier avatar que se acerque a esa máquina recreativa del Battle Hub a mirar la pelea**, y para validar y registrar el resultado final."

### Slide 14: GKE · GOOGLE KUBERNETES ENGINE
> "Ahora bien, montarte un clúster de Kubernetes en casa con cuatro mini-ordenadores para trastear está genial, pero mantener la seguridad, las redes y los parches de un clúster global en producción es un dolor de cabeza, y un estudio de videojuegos quiere dedicarse a hacer juegos, no a enchufar cables.  
> Por eso usan **GKE (Google Kubernetes Engine)**: Google gestiona el clúster y les da **auto-escalado automático**. Si un martes por la mañana hay poco tráfico, el clúster se encoge para ahorrar costes; si el fin de semana hay un torneo mundial y entran 100.000 personas de golpe, GKE levanta nuevos nodos y pods en segundos sin que nadie tenga que tocar un botón."

### Slide 15: ¿DÓNDE GUARDO MIS DATOS GLOBALES? (Cloud Spanner)
> "Los contenedores van y vienen, así que no podemos guardar en ellos los datos importantes. ¿Dónde guarda Capcom el perfil del jugador, sus compras y el ranking mundial? En **Cloud Spanner**.  
> Normalmente en bases de datos teníamos que elegir: o una base de datos relacional tradicional (consistente pero difícil de escalar a todo el planeta) o una NoSQL (que escala genial pero tarda un rato en sincronizarse entre países). Cloud Spanner rompe ese límite usando **TrueTime** —una red de relojes atómicos y receptores GPS en los datacenters de Google— para sellar cada transacción con una hora exacta al milisegundo. Así, si termina un combate en Madrid y otro en Tokio exactamente a la vez, Spanner sabe en qué orden ocurrieron y todo el mundo ve el mismo ranking mundial sin incoherencias."

### Slide 16: ¿CÓMO RESPONDO EN MILISEGUNDOS? (Redis · Memorystore)
> "Pero claro, pedirle a una base de datos en disco con consistencia global que escriba y lea todo tiene un coste de unos 30 a 50 milisegundos. Para guardar quién ha ganado el combate está perfecto, pero para saber en qué coordenada del Battle Hub se está moviendo tu avatar ahora mismo o a qué recreativa te has acercado a cotillear 5 minutos es demasiado lento y caro.  
> Para todos esos datos efímeros y de acceso inmediato ponen delante **Memorystore (Redis)**, que vive en memoria RAM y responde en **menos de un milisegundo**."

### Slide 17: ¿CÓMO ANALIZO CANTIDADES ENORMES? (BigQuery)
> "Y por último en este mundo, vuelve a aparecer nuestro amigo **BigQuery**. Ya vimos antes qué es, así que aquí vamos directos a por qué es vital en un juego de lucha: Capcom vuelca en BigQuery el registro de los cientos de millones de combates que se juegan.  
> Así pueden cruzar los datos en segundos y detectar si, por ejemplo, todo el mundo está eligiendo a un luchador concreto y ganando el 80% de las peleas porque se les ha ido la mano con el daño de un golpe especial. Con ese dato objetivo sacan el siguiente parche y reequilibran a los personajes."

### Slide 18: WORLD 2 · LECCIÓN
> "La gran lección que nos deja *Street Fighter 6* es que no existe una única base de datos ni una única herramienta mágica para todo: necesitas un equipo de especialistas donde **GKE** pone el músculo elástico, **Spanner** la verdad absoluta a nivel mundial, **Redis** la velocidad en memoria para el tiempo real y **BigQuery** la inteligencia analítica."

---

## 🎯 WORLD 3: RAINBOW SIX MOBILE (Slides 19 – 24) · *[19:00 - 25:30]*

### Slide 19: WORLD 3 · RAINBOW SIX MOBILE
> "Pasamos al tercer mundo con *Rainbow Six Mobile*, de Ubisoft. Y aquí damos un salto arquitectónico muy importante respecto a *Street Fighter*."

### Slide 20: DEDICATED GAME SERVER (DGS)
> "En *Street Fighter* peleaban 1 contra 1 y nos valía conectar las dos consolas directamente entre sí. Pero *Rainbow Six* es un shooter táctico de **5 contra 5**: son 10 personas disparando, destruyendo paredes y moviéndose a la vez desde sus móviles.  
> Aquí el modelo P2P ya no sirve por dos motivos: primero, coordinar 10 móviles entre sí todos contra todos sería inmanejable; y segundo, **las trampas (Anti-Cheat)**. Nunca puedes fiarte de lo que dice el móvil del jugador, porque alguien podría trucar su cliente para decir que tiene vida infinita o que dispara a través de las paredes.  
> Necesitamos un **Dedicated Game Server (DGS)**: un servidor en la nube que ejecuta la simulación real de la partida y actúa como árbitro absoluto.  
> ¿Cuál es el problema si metemos este servidor de juego en un Kubernetes normal? Que Kubernetes está diseñado para páginas web sin estado: si ve que un nodo está lleno o toca actualizar versión, mata un contenedor y levanta otro tan pancho."

### Slide 21: MEME · SIX INVITATIONAL VS KUBERNETES
> "Y claro, imaginaos la final mundial del *Six Invitational* —con premios millonarios en juego—, los dos equipos jugándose la última ronda en una prórroga de infarto... y que de repente a Kubernetes le dé por decir: *'Uy, este contenedor consume mucha memoria, lo mato y os creo uno nuevo desde cero'*. ¡Se nos va la final a la porra!  
> Justo para evitar ese desastre, **Ubisoft y Google Cloud se unieron para crear Agones**."

### Slide 22: TECNOLOGÍA · AGONES
> "**Agones** es un proyecto open source que se instala encima de Kubernetes y le enseña a hablar el idioma de los videojuegos, resolviendo dos problemas críticos:  
> El primero es el **ciclo de vida del contenedor**. Agones añade estados propios del juego: cuando un contenedor arranca y carga el mapa se pone en **`READY`** (listo para recibir jugadores). En el instante en que el matchmaking mete a los 10 jugadores dentro, pasa a estado **`ALLOCATED`** (asignado). Mientras esté en `ALLOCATED`, ese contenedor es sagrado: aunque Kubernetes quiera escalar a la baja o actualizar el clúster, **tiene prohibido tocarlo**. Solo cuando termina la partida tras 15 minutos y los jugadores salen, el propio servidor avisa de que ha terminado, pasa a **`SHUTDOWN`** y se destruye limpiamente para no reutilizar memoria sucia.  
> Y el segundo punto clave que resuelve Agones es la **latencia de red**: en un shooter no queremos pasar cada disparo por un balanceador de carga HTTP tradicional que añada milisegundos extra. Agones le asigna al contenedor un puerto directo en la máquina (`hostPort`) y le da a los 10 móviles la IP y el puerto exactos para que hablen por **UDP directo** con su contenedor."

### Slide 23: LA FLOTA DE SERVIDORES (FLEET)
> "¿Y cómo se gestiona esto a gran escala en producción? Con lo que Agones llama una **Fleet (Flota)**.  
> Como cargar en memoria un mapa 3D y las físicas del juego puede tardar varios segundos, no podemos crear el contenedor cuando los jugadores le dan a 'Buscar partida'. Lo que hace la flota es mantener siempre un colchón de contenedores pre-calentados en estado `READY` (los verdes del diagrama). En cuanto entran 10 jugadores, ocupan uno al instante pasando a `ALLOCATED`, y automáticamente Agones levanta otro contenedor `READY` por detrás para reponer el hueco.  
> Y por si os preguntáis: *'Oye, si abres puertos UDP directos a los contenedores sin balanceador, ¿no es peligroso por seguridad?'*, en GKE se protege aislando los rangos de puertos en el firewall del nodo, ocultando los servicios internos y poniendo delante proxies UDP con protección anti-DDoS."

### Slide 24: WORLD 3 · LECCIÓN
> "Lección del mundo 3: cuando el propio mundo virtual y las físicas de la partida corren dentro de la nube, necesitamos herramientas como **Agones** que adapten la orquestación de contenedores a sesiones con estado que duran lo que dura una partida."

---

## 🌍 WORLD 4: POKÉMON GO (Slides 25 – 32) · *[25:30 - 32:30]*

### Slide 25: WORLD 4 · POKÉMON GO
> "Y llegamos al cuarto y último mundo con un juego del que seguro que nadie aquí ha oído hablar nunca: **Pokémon GO**, lanzado por Niantic en verano de 2016. Fue una auténtica revolución porque sacó el videojuego a la calle: el tablero de juego era el planeta Tierra entero en tiempo real."

### Slide 26: EL PICO DE TRÁFICO VIRAL (50x)
> "Esta gráfica es historia viva de la ingeniería de sistemas, publicada por el equipo de Google y Niantic tras el lanzamiento.  
> La línea naranja de abajo del todo era el tráfico que Niantic estimaba tener. La línea roja discontinua era el *'peor escenario posible'*, calculado por si el juego era un bombazo mundial absoluto.  
> Y la línea verde prácticamente vertical que rompe la gráfica fue la realidad: **50 veces más tráfico que la estimación inicial** y 10 veces por encima del escenario más extremo que habían imaginado."

### Slide 27: ¿CÓMO ABSORBIÓ LA NUBE EL IMPACTO? (GKE + S2 Cells + Datastore)
> "¿Cómo sobrevivió el juego sin colapsar del todo ante esa avalancha? Mano a mano con los ingenieros de fiabilidad (SRE) de Google, la arquitectura se apoyó en tres pilares iniciales:  
> Primero, **GKE**, que escaló hasta convertirse en aquel momento en el mayor clúster de Kubernetes en producción del mundo.  
> Segundo, para saber qué Pokémon o qué Poképarada tienes cerca sin fundir los servidores calculando distancias matemáticas contra millones de coordenadas, dividieron el globo terráqueo con la librería de **celdas espaciales S2** de Google (la misma que usa Google Maps), asignando cada trocito de barrio a procesos concretos.  
> Y tercero, para guardar los datos de cada jugador en el lanzamiento utilizaron **Cloud Datastore**, una base de datos NoSQL documental: imaginaos una carpetita independiente por cada entrenador donde guardas su mochila y su Pokédex, lo cual les permitió escalar escrituras para cientos de millones de personas rapidísimo."

### Slide 28: ¿CÓMO TRANSPORTO MILLONES DE EVENTOS? (Cloud Pub/Sub)
> "Ahora imaginad a millones de personas caminando por la calle a la vez: cada paso que das actualiza tu GPS, cada Poképarada que giras y cada Pokéball que lanzas genera eventos constantes.  
> Si todos esos eventos intentaran impactar directamente contra las bases de datos a la vez, las tumbarían. Por eso en la puerta de entrada pusieron **Cloud Pub/Sub**, una tubería de mensajería asíncrona a escala global capaz de tragarse millones de eventos por segundo, amortiguar los picos de tráfico y repartirlos ordenadamente a los sistemas que van por detrás."

### Slide 29: ¿CÓMO PROCESO EL STREAM DE DATOS? (Cloud Dataflow · Apache Beam)
> "¿Y quién lee de esa tubería de Pub/Sub en tiempo real? **Cloud Dataflow**, que ejecuta pipelines de **Apache Beam**.  
> Uno de los usos más chulos que tiene en juegos geolocalizados como *Pokémon GO* es **limpiar las señales de GPS y detectar trampas al vuelo**. El GPS de los móviles rebota mucho entre edificios, así que con Apache Beam agrupan tus coordenadas en pequeñas ventanas de tiempo (por ejemplo, ventanas de 30 segundos) para filtrar el ruido y validar el movimiento real.  
> Y de paso cazan a los tramposos (*GPS spoofing*): si has lanzado una Pokéball aquí en España y 5 segundos después aparece otro evento tuyo cazando un Pokémon raro en mitad de Central Park en Nueva York... Dataflow calcula la velocidad en la ventana de tiempo y detecta al instante que, a menos que seas Goku teletransportándote, estás falseando el GPS."

### Slide 30: EVOLUCIÓN DE LA BASE DE DATOS (De Datastore a Cloud Spanner)
> "Y fijaos cómo evolucionan las arquitecturas cuando cambia el producto: os decía que al principio usaban **Cloud Datastore** (una carpeta documental por jugador) y les iba de lujo porque capturar un Pokémon era una acción individual.  
> Pero tiempo después añadieron los **intercambios de Pokémon entre entrenadores** y las batallas cooperativas en gimnasios. En el momento en que yo te doy mi Pikachu y tú me das tu Charmander, si falla la red a mitad no puede ser que los dos nos quedemos con los dos Pokémon o que desaparezcan: necesitamos una **transacción ACID estricta** entre dos jugadores distintos.  
> Como el modelo documental se les quedaba corto para eso, Niantic migró su base de datos principal en caliente y sin parar el juego hacia **Cloud Spanner**, que ya vimos en *Street Fighter*."

### Slide 31: ARQUITECTURA DE ESCALA PLANETARIA (Vista global de Pokémon GO)
> "Dejo esta diapositiva unos segundos como foto global para que seamos conscientes de cómo se conectan todas las piezas que hemos ido nombrando: desde que el móvil entra por el balanceador global y el CDN para descargar los gráficos, pasando por el gran clúster de **GKE** y la base de datos transaccional en **Spanner**, hasta toda la rama inferior donde **Pub/Sub** recoge cada paso que damos en el mundo real y **Dataflow** lo procesa en tiempo real antes de llevarlo a **BigQuery**."

### Slide 32: WORLD 4 · LECCIÓN
> "La lección que nos deja *Pokémon GO* es que cuando diseñas con piezas desacopladas y elásticas en la nube, tu sistema no solo puede sobrevivir a que el tráfico se multiplique por 50 de la noche a la mañana, sino que además puede evolucionar sus propias bases de datos mientras el avión está volando."

---

## 🏁 BLOQUE FINAL: RESUMEN Y CIERRE (Slides 33 – 36) · *[32:30 - 34:30]*

### Slide 33: EL MAPA DE TECNOLOGÍAS EN LA NUBE
> "Para ir cerrando, aquí tenéis el mapa completo de las piezas que hemos recorrido hoy en los cuatro juegos:  
> En **Cómputo**, contenedores en **GKE** y **Agones** para servidores de partidas en tiempo real.  
> En **Bases de Datos**, **Datastore** para documentos rápidos, **Cloud Spanner** cuando necesitamos consistencia relacional en todo el planeta y **Redis (Memorystore)** para responder en menos de un milisegundo en memoria.  
> En **Datos y Analítica**, **Pub/Sub** y **Dataflow** para mover y limpiar millones de eventos al vuelo, y **BigQuery** para analizar petabytes en segundos.  
> Y en **LiveOps**, **Firebase** para cambiar y experimentar en el juego sin pasar por la store."

### Slide 34: UN VIDEOJUEGO ES UN SISTEMA DISTRIBUIDO
> "Si os quedáis con una idea hoy, que sea esta: **un videojuego moderno es uno de los sistemas distribuidos más exigentes que existen**, pero las piezas que lo hacen posible —contenedores, colas de eventos, cachés en memoria, bases de datos distribuidas— son exactamente las mismas que podéis usar vosotros mañana en vuestras aplicaciones de banca, de e-commerce o de logística."

### Slide 35: REFERENCIAS OFICIALES
> "Todo lo que os he contado hoy está contrastado con los casos de estudio oficiales publicados por Google Cloud junto a Halfbrick, Capcom, Ubisoft y Niantic, que os dejo enlazados aquí para que podáis profundizar."

### Slide 36: GAME OVER · ¡MUCHAS GRACIAS!
> "Y hasta aquí la partida de hoy. Os dejo de nuevo el QR en pantalla por si queréis conectar o etiquetarme en redes. ¡Muchísimas gracias a todos y nos vemos ahora mismo en el descanso para comentar cualquier pregunta que tengáis!"
