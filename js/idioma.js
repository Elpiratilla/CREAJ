(() => {
  // Diccionario principal para traducir textos visibles al inglés.
  const translations = {
    "Por qué Blue's": "Why Blue's",
    Nosotros: "About us",
    "Sobre Nosotros": "About us",
    Inicio: "Start",
    Home: "Home",
    Playlists: "Playlists",
    Contacto: "Contact",
    "Volver al acceso": "Back to access",
    "Volver al Start": "Go to Start",
    "Ir al Start": "Go to Start",
    "Ir al Home": "Explore Blue's",
    "Explorar Blue's": "Explore Blue's",
    "Volver al inicio": "Back to start",
    "Mi perfil": "My profile",
    "Iniciar sesión": "Log in",
    Registrarse: "Sign up",
    "Sana tu alma": "Heal your soul",
    "con el blues.": "with the blues.",
    "El origen de Blue's": "The origin of Blue's",
    "— El origen de Blue's": "— The origin of Blue's",
    "— Quiénes somos": "— Who we are",
    "El" : "The", 
    "equipo":  "team",
    "Acompañamiento emocional": "Emotional support",
    "Sesiones adaptadas a ti": "Sessions tailored to you",
    "Un ritmo que acompaña, calma y hace sentir.": "A rhythm for every moment",
    "— Servicios y beneficios": "- Services and benefits",
    "Musicoterapia infantil": "Music therapy for children",
    "Estimulación prenatal": "Prenatal stimulation",
    "Atención a adultos y manejo del estrés": "Adult care and stress management",
    "Estimulación cognitiva para adultos mayores": "Cognitive stimulation for older adults",
    "— Elige una playlist": "- Choose a playlist",
    "¿Cómo te": "How do you",
    "sientes": "feel",
    "sientes hoy?": "feel today?",
    "hoy?": "today?",
    "Sorpréndeme 🎲": "Surprise me 🎲",
    "Adivina la Emoción": "Guess the Emotion",
    "Emoción": "Emotion",
    "Adivina la": "Guess the",
    "Imagen del juego Adivina la Emoción": "Guess the Emotion game image",
    "Añade aquí la imagen del juego": "Add the game image here",
    "Reglas del juego": "Game rules",
    "Tienes 10 segundos para adivinar qué emoción transmite la canción según Blue's.": "You have 10 seconds to guess which emotion the song conveys according to Blue's.",
    "Elige una emoción entre Tranquilo, Alegre, Ansioso, Triste y Amor.": "Choose an emotion: Calm, Happy, Anxious, Sad, or Love.",
    "Con 3 respuestas malas, pierdes la partida.": "With 3 wrong answers, you lose the game.",
    "Tienes 10 segundos": "You have 10 seconds",
    "para adivinar qué emoción transmite la canción según Blue's.": "to guess which emotion the song conveys according to Blue's.",
    "Con": "With",
    ", pierdes la partida.": ", you lose the game.",
    "Con 5 aciertos, ganas y desbloqueas el premio.": "With 5 correct answers, you win and unlock the prize.",
    "Empezar juego": "Start game",
    "Volver a Blue's": "Back to Blue's",
    "Escucha una canción del repertorio de Blue's y descubre qué emoción transmite.": "Listen to a song from Blue's collection and discover which emotion it conveys.",
    "10 segundos": "10 seconds",
    "3 respuestas malas": "3 wrong answers",
    "5 aciertos": "5 correct answers",
    "Escucha el tema, identifica la emoción que representa en Blue's y responde antes de que se acabe el tiempo.": "Listen to the song, identify the emotion it represents in Blue's, and answer before time runs out.",
    "Puntuación": "Score",
    "aciertos": "correct answers",
    "intentos": "attempts",
    "Tiempo:": "Time:",
    "Opciones de respuesta": "Answer options",
    "Opciones de emoción": "Emotion options",
    "Reproductor de Spotify": "Spotify player",
    "Recompensa desbloqueada": "Reward unlocked",
    "Has reconocido cinco emociones musicales.": "You recognized five musical emotions.",
    "Premio por completar el juego": "Prize for completing the game",
    "Imagen de participación finalizada": "Game over image",
    "Has alcanzado tres respuestas fallidas. Gracias por participar.": "You reached three wrong answers. Thanks for participating.",
    "Volver al inicio": "Back to home",
    "← Volver al inicio": "← Back to home",
    "Volver al Home": "Back to Home",
    "← Volver al Home": "← Back to Home",
    "Juego": "Game",
    "🎮 Adivina la Emoción": "🎮 Guess the Emotion",
    "🎮 Empezar a Jugar": "🎮 Start Playing",
    "Partida en juego": "Game in progress",
    "Minijuego interactivo": "Interactive minigame",
    "Blue's · Juego musical": "Blue's · Music game",
    "Blue's · Recompensa desbloqueada": "Blue's · Reward unlocked",
    "Escucha el tema, identifica la emoción que representa en Blue's y responde antes de que se acabe el tiempo.": "Listen to the song, identify the emotion it represents in Blue's, and answer before time runs out.",
    "Escucha el fragmento": "Listen to the fragment",
    "Pulsa reproducir en Spotify y escucha con atención.": "Press play on Spotify and listen carefully.",
    "Emoción oculta": "Hidden emotion",
    "¿Qué emoción representa esta canción?": "Which emotion does this song represent?",
    "Siguiente canción": "Next song",
    "5 canciones": "Five songs",
    "¡Cinco canciones!": "Five songs!",
    "Has reconocido cinco emociones musicales.": "You recognized five musical emotions.",
    "¡Reclama tu premio!": "Claim your prize!",
    "Volver a jugar": "Play again",
    "Gracias por participar": "Thanks for participating",
    "Has alcanzado tres respuestas fallidas. Gracias por participar.": "You reached three incorrect answers. Thanks for participating.",
    "Volver al principio": "Restart game",
    "¿No sabes cómo te sientes? Deja que Blue's elija por ti.": "Don't know how you feel? Let Blue's choose for you.",
    "Tranquilo": "Calm",
    "Alegre": "Happy",
    "Ansioso": "Anxious",
    "Triste": "Sad",
    "Amor": "Love",
    "¿Realmente sirve la": "Does music therapy",
    " musicoterapia? ": " really work? ",
    "musicoterapia?": "music therapy?",
    "— ¿Por qué Blue's es importante?": "— Why is Blue's important?",
    "La musicoterapia es importante porque la música puede influir directamente en nuestras emociones, pensamientos y bienestar. A través de diferentes sonidos, ritmos y melodías, puede ayudar a reducir el estrés y la ansiedad, mejorar el estado de ánimo y crear un espacio de relajación.": "Music therapy is important because music can directly influence our emotions, thoughts, and well-being. Through different sounds, rhythms, and melodies, it can help reduce stress and anxiety, improve mood, and create a space for relaxation.",
    "Además, la música permite expresar sentimientos que muchas veces son difíciles de comunicar con palabras. Por eso, la musicoterapia puede utilizarse como una herramienta de apoyo para mejorar la comunicación, fortalecer la memoria, estimular la concentración y acompañar diferentes procesos emocionales.": "Music also allows us to express feelings that are often difficult to communicate with words. For this reason, music therapy can be used as a support tool to improve communication, strengthen memory, stimulate concentration, and support different emotional processes.",
    "En Blue's creemos que la música no solo está hecha para escucharla, sino también para sentirla. Cada canción puede transmitir una emoción diferente y convertirse en una forma de conectar con nosotros mismos y con los demás.": "At Blue's, we believe music is not only meant to be heard, but also to be felt. Each song can convey a different emotion and become a way to connect with ourselves and with others.",
    "— Hablemos": "- Let's talk",
    "Contáctanos": "Contact us",
    "¿Dudas?": "Questions?",
    "Si tienes preguntas, sugerencias o quieres colaborar con Blue's, escríbenos y te responderemos lo antes posible.": "If you have questions, suggestions, or want to collaborate with Blue's, write to us and we will get back to you as soon as possible.",
    "Colegio Don Bosco": "Don Bosco School",
    Nombre: "First name",
    Apellido: "Last name",
    Usuario: "Username",
    Contraseña: "Password",
    "Enviar mensaje": "Send message",
    "¿Eres parte del equipo?": "Are you part of the team?",
    Ingresar: "Enter",
    "Cerrar sesión": "Log out",
    "Notas internas": "Internal notes",
    "Este espacio reúne los mensajes recibidos para revisar dudas, sugerencias o comentarios.": "This space brings together received messages to review questions, suggestions, or comments.",
    "Aún no hay mensajes recibidos.": "No messages received yet.",
    "Editar": "Edit",
    "Eliminar": "Delete",
    "Guardar": "Save",
    "Cancelar": "Cancel",
    "✓ Mensaje enviado. ¡Gracias por escribirnos!": "✓ Message sent. Thanks for writing to us!",
    "Usuario o contraseña incorrectos.": "Incorrect username or password.",
    "Sesión iniciada": "Signed in",
    "Panel del": "Team",
    equipo: "team",
    Asunto: "Subject",
    Mensaje: "Message",
    "Musicoterapia Digital · Crea-J 2026": "Digital Music Therapy · Crea-J 2026",
    "Una plataforma interactiva que usa el poder terapéutico de la música para acompañarte en tu bienestar emocional, adaptada a ti.": "An interactive platform that uses the therapeutic power of music to support your emotional well-being, adapted to you.",
    "La música expresa lo que no puede ser dicho y aquello sobre lo que es imposible permanecer en silencio.": "Music expresses what cannot be said and what it is impossible to remain silent about.",
    "La música también puede ser un espacio para": "Music can also be a space to",
    "sentir y sanar.": "feel and heal.",
    "Blue's nació con la idea de acercar la musicoterapia a más personas de una forma sencilla, humana y accesible. Creamos este espacio para acompañar diferentes momentos emocionales mediante sesiones y selecciones musicales pensadas para cada estado de ánimo.": "Blue's was born with the idea of bringing music therapy to more people in a simple, human, and accessible way. We created this space to support different emotional moments through sessions and musical selections designed for every mood.",
    "La música no sustituye la atención de un profesional, pero puede convertirse en una herramienta de apoyo para relajarse, expresar lo que sentimos, recuperar recuerdos y encontrar un momento de calma.": "Music does not replace professional care, but it can become a support tool for relaxing, expressing what we feel, recovering memories, and finding a moment of calm.",
    "Servicios de musicoterapia": "Music therapy services",
    "Dirigido a:": "For:",
    "Beneficios:": "Benefits:",
    "Niños con TDAH, autismo (TEA) o retraso en el lenguaje.": "Children with ADHD, autism (ASD), or language delays.",
    "Mejora la atención, estimula la comunicación y facilita la expresión emocional.": "Improves attention, stimulates communication, and supports emotional expression.",
    "Gestantes a partir del segundo trimestre y sus parejas.": "Expectant mothers from the second trimester onward and their partners.",
    "Fomenta la calma, la conexión familiar y la expresión de emociones durante el embarazo.": "Encourages calm, family connection, and emotional expression during pregnancy.",
    "Personas con ansiedad, depresión o estrés laboral.": "People with anxiety, depression, or work-related stress.",
    "Ayuda a reducir la tensión, fortalece la calma y acompaña distintos procesos emocionales.": "Helps reduce tension, strengthens calm, and supports different emotional processes.",
    "Adultos mayores y personas con Alzheimer o demencia temprana.": "Older adults and people with Alzheimer's or early-stage dementia.",
    "Evoca recuerdos, mantiene la agilidad mental y fomenta la socialización.": "Evokes memories, maintains mental agility, and encourages social connection.",
    "Somos un grupo de estudiantes apasionados por la tecnología, la música y el bienestar emocional. Creamos Blue's para acercar la ayuda emocional de una forma más humana, creativa y accesible.": "We are a group of students passionate about technology, music, and emotional well-being. We created Blue's to bring emotional support closer in a more human, creative, and accessible way.",
    "Playlist de musicoterapia · Alegría": "Music therapy playlist · Happiness",
    "Playlist de musicoterapia · Amor": "Music therapy playlist · Love",
    "Playlist de musicoterapia · Ansiedad": "Music therapy playlist · Anxiety",
    "Playlist de musicoterapia · Tranquilidad": "Music therapy playlist · Calm",
    "Playlist de musicoterapia · Tristeza": "Music therapy playlist · Sadness",
    "Emoción:": "Mood:",
    "Alegría": "Happiness",
    "Ansiedad": "Anxiety",
    "Amor": "Love",
    "Tranquilidad": "Calm",
    "Tristeza": "Sadness",
    "Ritmos que sanan, abrazan y contagian. La banda sonora perfecta para celebrar los días buenos y contagiar el alma de pura felicidad.": "Rhythms that heal, embrace, and spread joy. The perfect soundtrack for celebrating good days and filling your soul with happiness.",
    "Canciones para decir lo que a veces no alcanza en palabras.": "Songs for saying what words sometimes cannot express.",
    "Sonidos que le ponen nombre al nudo en el pecho, para soltarlo canción a canción.": "Sounds that give a name to the knot in your chest, so you can release it one song at a time.",
    "Pausas sonoras para bajar el ritmo, respirar hondo y quedarte quieto un rato.": "Sound pauses to slow down, breathe deeply, and be still for a while.",
    "Melodías que acompañan el duelo, calman el llanto y no te piden fingir que estás bien.": "Melodies that accompany grief, soothe tears, and never ask you to pretend you are okay.",
    "Enamórate de ti, de la vida y luego de quien tú quieras.": "Fall in love with yourself, with life, and then with whoever you want.",
    "Sufrimos más a menudo en la imaginación que en la realidad.": "We suffer more often in imagination than in reality.",
    "Sonríe, respira y ve despacio.": "Smile, breathe, and take it slowly.",
    "La melancolía es la felicidad de estar triste.": "Melancholy is the happiness of being sad.",
    "La alegría es poder, y el poder es capaz de derribar cualquier barrera.": "Joy is power, and power is capable of breaking down any barrier.",
    "Enamórate de ti, de la vida y luego de quien tú quieras.": "Fall in love with yourself, with life, and then with whoever you want.",
    "Sufrimos más a menudo en la imaginación que en la realidad.": "We suffer more often in imagination than in reality.",
    "La melancolía es la felicidad de estar triste.": "Melancholy is the happiness of being sad.",
    "Canciones": "Songs",
    "Toca para ver las canciones": "Tap to view songs",
    Título: "Title",
    Duración: "Duration",
    Reproduciendo: "Now playing",
    Favoritos: "Favorites",
    "🔀 Aleatoria": "🔀 Shuffle",
    "Mostrar canciones favoritas": "Show favorite songs",
    Idioma: "Language",
    Mostrar: "Show",
    Ocultar: "Hide",
    "Buscar canción o artista en esta playlist…": "Search song or artist in this playlist…",
    "Por qué esta selección": "Why this selection",
    "La ciencia detrás de": "The science behind",
    "esta playlist": "this playlist",
    "Construida alrededor de alta valencia positiva y activación moderada/alta: ritmos marcados, armonías luminosas e interpretaciones vocales expresivas.": "Built around high positive valence and moderate-to-high arousal: strong rhythms, bright harmonies, and expressive vocal performances.",
    "Construida alrededor de baja o moderada activación, intimidad vocal y contenido relacionado con vínculos afectivos.": "Built around low or moderate arousal, vocal intimacy, and content related to emotional bonds.",
    "Se priorizan piezas de baja intensidad, tempo estable y estructuras repetitivas que pueden favorecer un entorno auditivo menos estimulante.": "Tracks with low intensity, steady tempo, and repetitive structures are prioritized to create a less stimulating listening environment.",
    "Busca producir un entorno auditivo de baja activación, priorizando piezas instrumentales, voces no lingüísticas y arreglos con pocos elementos agresivos o percusivos.": "It aims to create a low-arousal listening environment by favoring instrumental pieces, non-lexical vocals, and arrangements with minimal aggressive or percussive elements.",
    "Tempo rápido, modo mayor": "Fast tempo, major mode",
    "Ritmo, activación y movimiento": "Rhythm, arousal, and movement",
    "Calidez, no solo activación": "Warmth, not just energy",
    "Letra positiva y familiaridad": "Positive lyrics and familiarity",
    "Cercanía, no solo energía": "Closeness, not just energy",
    "Más allá de la letra": "Beyond the lyrics",
    "Estética íntima": "Intimate aesthetic",
    "Romance explícito e implícito": "Explicit and implicit romance",
    "Menor activación, no una fórmula": "Lower arousal, not a formula",
    "Evidencia consistente": "Consistent evidence",
    "Efecto real, pero variable": "Real effect, but variable",
    "Una nota de honestidad": "A note of honesty",
    "Menos letra, más textura": "Less lyrics, more texture",
    "Tempo lento, calma e introspección": "Slow tempo, calm and introspection",
    "Evidencia sobre el estrés": "Evidence on stress",
    "Texturas sostenidas y evolución gradual": "Sustained textures and gradual evolution",
    "Tempo rápido,": "Fast tempo,",
    "modo mayor": "major mode",
    "Ritmo,": "Rhythm,",
    "activación y movimiento": "arousal and movement",
    "Calidez,": "Warmth,",
    "no solo activación": "not just energy",
    "Letra positiva": "Positive lyrics",
    "y familiaridad": "and familiarity",
    "Cercanía,": "Closeness,",
    "no solo energía": "not just energy",
    "Más allá de": "Beyond",
    "la letra": "the lyrics",
    "Estética": "Aesthetic",
    "íntima": "intimate",
    "Romance": "Romance",
    "explícito e implícito": "explicit and implicit",
    "Menor activación,": "Lower arousal,",
    "no una fórmula": "not a formula",
    Evidencia: "Evidence",
    consistente: "consistent",
    "Efecto real,": "Real effect,",
    "pero variable": "but variable",
    "Una nota": "A note",
    "de honestidad": "of honesty",
    "Menos letra,": "Less lyrics,",
    "más textura": "more texture",
    "Tempo lento,": "Slow tempo,",
    "calma e introspección": "calm and introspection",
    "sobre el estrés": "about stress",
    "Texturas sostenidas": "Sustained textures",
    "y evolución gradual": "and gradual evolution",
    "modo menor": "minor mode",
    "Acompañar,": "Accompany,",
    "no eliminar": "not erase",
    "Voces íntimas,": "Intimate voices,",
    "temas de pérdida": "themes of loss",
    Contemplación: "Contemplation",
    "y memoria": "and memory",
    "El tempo y el modo musical son dos de las señales más importantes para comunicar emociones. Un estudio con 1,289 participantes encontró que los tempos rápidos se asocian con mayor \"vitalidad\", y el modo mayor obtuvo valoraciones más altas de vitalidad que el modo menor.": "Tempo and musical mode are two of the clearest signals for communicating emotion. A study with 1,289 participants found that fast tempos are associated with greater \"vitality,\" and major mode received higher vitality ratings than minor mode.",
    "<strong>September</strong>, <strong>Uptown Funk</strong> e <strong>I Got You (I Feel Good)</strong> fueron seleccionadas por sus ritmos marcados y alta energía, que favorecen una experiencia de activación y ganas de moverse.": "<strong>September</strong>, <strong>Uptown Funk</strong>, and <strong>I Got You (I Feel Good)</strong> were selected for their strong rhythms and high energy, which support an activating experience and a sense of movement.",
    "<strong>What a Wonderful World</strong> e <strong>I'm Yours</strong> funcionan como contrapeso: no buscan máxima activación, sino una sensación de calidez, optimismo y bienestar sostenido.": "<strong>What a Wonderful World</strong> and <strong>I'm Yours</strong> act as a counterweight: they are not designed for maximum arousal, but for warmth, optimism, and sustained well-being.",
    "La presencia de letras positivas puede reforzar la interpretación emocional, pero no produce automáticamente felicidad: la familiaridad y las experiencias personales también modifican considerablemente la respuesta a la música.": "Positive lyrics can reinforce emotional interpretation, but they do not automatically create happiness: familiarity and personal experience also shape the response to music significantly.",
    "A diferencia de la playlist alegre, aquí no buscamos maximizar la energía. La intención es producir cercanía, romanticismo y conexión interpersonal, por lo que géneros como bedroom pop, R&B suave y lo-fi funcionan especialmente bien.": "Unlike the happy playlist, here we are not trying to maximize energy. The goal is to create closeness, romance, and interpersonal connection, which is why bedroom pop, smooth R&B, and lo-fi work especially well.",
    "La música emocional no depende exclusivamente de la letra: investigaciones experimentales muestran que tempo, modo, melodía y timbre contribuyen de manera independiente a la percepción emocional.": "Emotional music does not depend only on the lyrics: experimental research shows that tempo, mode, melody, and timbre each contribute independently to emotional perception.",
    "<strong>Coffee</strong>, <strong>Sofia</strong>, <strong>Best Friend</strong> y <strong>Lo Que Siento</strong> aportan voces suaves y producciones con espacio alrededor de la voz, generando una sensación de proximidad que encaja con el concepto de amor.": "<strong>Coffee</strong>, <strong>Sofia</strong>, <strong>Best Friend</strong>, and <strong>Lo Que Siento</strong> bring soft voices and spacious production around the lead vocal, creating a sense of closeness that fits the idea of love.",
    "<strong>All of Me</strong> y <strong>Perfect</strong> expresan afecto y compromiso directamente. No todas las canciones tienen que describir literalmente una relación romántica: pueden transmitir intimidad, nostalgia o atracción.": "<strong>All of Me</strong> and <strong>Perfect</strong> express affection and commitment directly. Not every song has to describe a romantic relationship literally: they can also convey intimacy, nostalgia, or attraction.",
    "No se trata de canciones \"diseñadas para regular la respiración\". Se seleccionan por presentar características asociadas con menor activación: tempo moderado/lento, repetición, texturas suaves y menor agresividad rítmica.": "This is not about songs designed to calm breathing. They are chosen because they have characteristics linked with lower arousal: moderate/slow tempo, repetition, soft textures, and less rhythmic aggression.",
    "Una revisión y metaanálisis de 2024 con 11 ensayos controlados y 1,204 pacientes encontró que las intervenciones musicales redujeron significativamente la ansiedad.": "A 2024 review and meta-analysis of 11 controlled trials with 1,204 patients found that music interventions significantly reduced anxiety.",
    "Una revisión de 51 estudios encontró un efecto medio sobre la ansiedad autoinformada, pero el efecto sobre indicadores fisiológicos fue pequeño y no significativo: la respuesta varía entre personas.": "A review of 51 studies found a moderate effect on self-reported anxiety, but the effect on physiological indicators was small and non-significant: the response varies from person to person.",
    "El concepto de 432Hz se usa aquí como característica de la playlist, no como tecnología científicamente demostrada. La evidencia sólida respalda la escucha musical como intervención en general, no una superioridad de una frecuencia sobre otra.": "The idea of 432Hz is used here as a feature of the playlist, not as a scientifically demonstrated technology. Strong evidence supports music listening as an intervention in general, but not the superiority of one frequency over another.",
    "La ausencia o reducción de letra disminuye la cantidad de información semántica que el oyente debe procesar, permitiendo que la atención se centre en el timbre, la armonía y la textura sonora.": "Reducing or removing lyrics decreases the amount of semantic information the listener has to process, allowing attention to focus on timbre, harmony, and sonic texture.",
    "Los tempos más lentos tienden a asociarse con menor activación, mientras que determinados patrones armónicos y melódicos pueden favorecer sensaciones de calma o introspección.": "Slower tempos tend to be associated with lower arousal, while certain harmonic and melodic patterns can encourage calm or introspection.",
    "Una revisión sistemática de 104 ensayos aleatorizados encontró que la música produjo una reducción significativa tanto del estrés psicológico como del fisiológico.": "A systematic review of 104 randomized trials found that music significantly reduced both psychological and physiological stress.",
    "<strong>Near Light</strong>, <strong>An Ending (Ascent)</strong> y <strong>On the Nature of Daylight</strong> presentan dinámica contenida y ausencia de percusión dominante. <strong>Time</strong> y <strong>Your Hand in Mine</strong> aumentan la intensidad progresivamente, útiles por su construcción gradual y ausencia de letra explícita.": "<strong>Near Light</strong>, <strong>An Ending (Ascent)</strong>, and <strong>On the Nature of Daylight</strong> feature restrained dynamics and little dominant percussion. <strong>Time</strong> and <strong>Your Hand in Mine</strong> gradually build intensity, which makes them useful for their slow evolution and absence of explicit lyrics.",
    "Esta playlist no busca necesariamente eliminar la tristeza, sino acompañarla mediante música que comparte características acústicas asociadas con estados emocionales de baja activación. La investigación sobre emoción musical ha encontrado repetidamente una asociación entre tempo lento, modo menor y percepción de tristeza.": "This playlist does not aim to erase sadness, but to accompany it through music that shares acoustic features associated with low-arousal emotional states. Research on musical emotion has repeatedly found an association between slow tempo, minor mode, and the perception of sadness.",
    "Esto es especialmente interesante porque una canción triste no necesariamente empeora el estado emocional. La música puede permitir que la persona reconozca y procese un estado emocional existente. Las respuestas emocionales musicales dependen tanto de las características acústicas como de la experiencia personal y la familiaridad con la canción.": "This is especially interesting because a sad song does not necessarily worsen emotional state. Music can help a person recognize and process an existing emotion. Emotional responses to music depend on both acoustic features and personal experience and familiarity with the song.",
    "<strong>Skinny Love</strong>, <strong>The Scientist</strong>, <strong>Someone Like You</strong> y <strong>Hurt</strong> utilizan interpretaciones vocales íntimas y temáticas relacionadas con pérdida, ruptura, arrepentimiento o vulnerabilidad. Esto genera una correspondencia entre contenido lírico y estructura musical, haciendo que la playlist resulte emocionalmente coherente.": "<strong>Skinny Love</strong>, <strong>The Scientist</strong>, <strong>Someone Like You</strong>, and <strong>Hurt</strong> use intimate vocal delivery and themes related to loss, breakup, regret, and vulnerability. This creates a strong match between lyrical content and musical structure, making the playlist emotionally coherent.",
    "<strong>The Sound of Silence</strong> y <strong>Flightless Bird, American Mouth</strong> añaden una sensación más contemplativa, mientras que <strong>Heartbeats</strong> y <strong>Photograph</strong> introducen nostalgia y memoria afectiva. Hay además una razón psicológica para no eliminar automáticamente toda música triste de una playlist para alguien que está triste: sentirse comprendido o acompañado resulta diferente de simplemente aumentar el malestar.": "<strong>The Sound of Silence</strong> and <strong>Flightless Bird, American Mouth</strong> add a more contemplative quality, while <strong>Heartbeats</strong> and <strong>Photograph</strong> introduce nostalgia and emotional memory. There is also a psychological reason not to automatically remove all sad music from a playlist for someone who is sad: feeling understood or accompanied is different from simply increasing discomfort.",
    "Basado en investigación sobre percepción musical y emoción (PubMed Central).": "Based on research on musical perception and emotion (PubMed Central).",
    "Basado en investigación sobre percepción musical y emoción (PubMed).": "Based on research on musical perception and emotion (PubMed).",
    "La alegría es poder, y el poder es capaz de derribar cualquier barrera.": "Joy is power, and power is capable of breaking down any barrier.",
    "Enamórate de ti, de la vida y luego de quien tú quieras.": "Fall in love with yourself, with life, and then with whoever you want.",
    "Sufrimos más a menudo en la imaginación que en la realidad.": "We suffer more often in imagination than in reality.",
    "La melancolía es la felicidad de estar triste.": "Melancholy is the happiness of being sad.",
    "Sonríe, respira y ve despacio.": "Smile, breathe, and take it slowly.",
    "La música expresa lo que no puede ser dicho y aquello sobre lo que es imposible permanecer en silencio.": "Music expresses what cannot be said and what it is impossible to remain silent about.",
    "Blue's Studio": "Blue's Studio",
    "Sesiones en vivo": "Live sessions",
    "Descubre vinilos de colección y experiencias musicales únicas.": "Discover collectible vinyl and unique musical experiences.",
    "Novedades": "New releases",
    "Lanzamientos de la semana": "This week's releases",
    "Los temas más recientes y recomendados para tu escucha.": "The latest and most recommended tracks for your listening.",
    "Selección": "Selection",
    "Listas curadas": "Curated playlists",
    "Listas de reproducción seleccionadas para cada momento del día.": "Playlists selected for every moment of the day.",
    "Sensación": "Feeling",
    "Siente el verdadero blues": "Feel the real blues",
    "Blues · Folk": "Blues · Folk",
    "Imagen temática de blues": "Blues-themed image",
    "Persona junto a una guitarra con ambiente de blues": "Person beside a guitar in a blues atmosphere",
    "Una experiencia íntima con el ritmo y la esencia del género.": "An intimate experience with the rhythm and essence of the genre.",
    "Comunidad": "Community",
    "Eventos y conciertos": "Events and concerts",
    "Conecta con la comunidad y descubre vivencias en vivo.": "Connect with the community and discover live experiences.",
    "Ambient · Drone": "Ambient · Drone",
    "Soul · Jazz": "Soul · Jazz",
    "432Hz · Breathwork": "432Hz · Breathwork",
    "Binaural · Lo-Fi": "Binaural · Lo-Fi",
    "CREA TU": "CREATE YOUR",
    "CUENTA EN": "ACCOUNT ON",
    "UN GUSTO": "NICE TO",
    "VERTE DE": "SEE YOU",
    "vuelta!": "again!",
    "¿No tienes una cuenta?": "Don't have an account?",
    "¿Ya tienes una cuenta?": "Already have an account?",
    "Regístrate": "Sign up",
    "Inicia sesión": "Log in",
    "Correo electrónico": "Email",
    "¿Cómo quieres que te llamemos?": "What should we call you?",
    "Confirma tu contraseña": "Confirm your password",
    "El poder de la música": "The power of music",
    Escucha: "Listen",
    Respira: "Breathe",
    Conecta: "Connect",
    "— El blues como lenguaje del alma": "- Blues as the language of the soul",
    "Un sonido que habla de dolor, memoria y": "A sound that speaks of pain, memory, and",
    "resistencia.": "resilience.",
    "El blues nació en comunidades afroamericanas del sur de Estados Unidos y se convirtió en una forma de narrar la vida, la injusticia, la esperanza y la emoción más profunda. No es solo música: es una expresión emocional con raíces en la historia, la resistencia y la conexión humana.": "The blues was born in African American communities in the southern United States and became a way to tell stories of life, injustice, hope, and deep emotion. It is not just music: it is an emotional expression rooted in history, resilience, and human connection.",
    "Sus tonos lentos, sus frases improvisadas y su intensidad emocional hacen que cada canción parezca una confesión. Por eso, en Blue's lo vemos como un puente entre el sentir personal y la calma interior; una manera de acompañar el duelo, la nostalgia, la alegría y la sanación.": "Its slow tones, improvised phrases, and emotional intensity make every song feel like a confession. That is why, at Blue's, we see it as a bridge between personal feeling and inner calm: a way to accompany grief, nostalgia, joy, and healing.",
    "La guitarra como voz del sentimiento.": "The guitar as the voice of feeling.",
    "Una experiencia íntima y emocional.": "An intimate and emotional experience.",
    "La historia viva del blues en cada nota.": "The living history of the blues in every note.",
    "— De los campos del Delta a las grandes ciudades": "- From the Delta fields to the big cities",
    "Un poco más de": "A little more of",
    "su historia.": "its history.",
    "Raíces en el Delta del Misisipi": "Roots in the Mississippi Delta",
    "Origen:": "Origin:",
    "A finales del siglo XIX y comienzos del XX, en las plantaciones y campos de algodón del sur de Estados Unidos, los \"field hollers\", los cantos de trabajo y los espirituales afroamericanos se fusionaron con tradiciones musicales de África Occidental.": "In the late 19th and early 20th centuries, on plantations and cotton fields in the southern United States, field hollers, work songs, and African American spirituals merged with musical traditions from West Africa.",
    "Sonido:": "Sound:",
    "Guitarras de resonador, slide y una estructura de doce compases con \"blue notes\" —notas ligeramente desafinadas a propósito— que expresan tensión emocional. Artistas como Robert Johnson y Son House sentaron las bases del llamado Delta blues.": "Resonator and slide guitars, plus a twelve-bar structure with blue notes, deliberately slightly out of tune, express emotional tension. Artists such as Robert Johnson and Son House laid the foundations of what became known as Delta blues.",
    "La Gran Migración y el blues eléctrico de Chicago": "The Great Migration and Chicago electric blues",
    "Contexto:": "Context:",
    "Entre 1916 y 1970, millones de afroamericanos se trasladaron del sur rural a ciudades industriales del norte como Chicago, buscando mejores oportunidades y huyendo de la segregación.": "Between 1916 and 1970, millions of African Americans moved from the rural South to northern industrial cities such as Chicago, seeking better opportunities and escaping segregation.",
    "Evolución:": "Evolution:",
    "El blues se electrificó para hacerse escuchar en clubes ruidosos: guitarras eléctricas, armónica amplificada y una sección rítmica más contundente. Muddy Waters, Howlin' Wolf y Willie Dixon convirtieron el sello Chess Records en el epicentro de este nuevo sonido urbano.": "The blues became electric to be heard in noisy clubs: electric guitars, amplified harmonica, and a stronger rhythm section. Muddy Waters, Howlin' Wolf, and Willie Dixon made Chess Records the epicenter of this new urban sound.",
    "La semilla del rock, el soul y el jazz": "The seed of rock, soul, and jazz",
    "Influencia:": "Influence:",
    "El blues es la raíz directa del rock and roll, el R&B y el soul. Su estructura armónica y su fraseo vocal inspiraron a artistas como Elvis Presley, The Rolling Stones, B.B. King y Eric Clapton, quienes llevaron el género a audiencias globales.": "The blues is the direct root of rock and roll, R&B, and soul. Its harmonic structure and vocal phrasing inspired artists such as Elvis Presley, The Rolling Stones, B.B. King, and Eric Clapton, who brought the genre to audiences around the world.",
    "Legado:": "Legacy:",
    "En 2011, el Congreso de Estados Unidos declaró oficialmente al blues \"tesoro nacional americano\" por su papel fundamental en la historia musical del país.": "In 2011, the United States Congress officially declared the blues an American national treasure for its fundamental role in the country's musical history.",
    "El blues hoy: memoria emocional y musicoterapia": "The blues today: emotional memory and music therapy",
    "Vigencia:": "Relevance:",
    "Más allá de su valor histórico, el blues sigue siendo una herramienta emocional poderosa: nombra el dolor sin adornarlo, pero también celebra la resistencia y la comunidad.": "Beyond its historical value, the blues remains a powerful emotional tool: it names pain without embellishing it, while also celebrating resilience and community.",
    "En Blue's:": "At Blue's:",
    "Por eso lo integramos como un género propio dentro de la plataforma —no solo como playlist de tristeza, sino como un espacio para escuchar historias reales contadas en primera persona a través de la música.": "That is why we include it as its own genre within the platform, not only as a sadness playlist, but as a space to hear real stories told in the first person through music.",
    "— Cinco canciones esenciales": "- Five essential songs",
    "Clásicos que": "Classics that",
    "todo oído": "every listener",
    "debería conocer.": "should know.",
    "Toca para ver las canciones": "Tap to view songs",
    "Duración": "Duration",
    "Grabada por B.B. King en 1969, mezcla blues con arreglos de cuerdas y se convirtió en una de sus canciones más reconocidas, ganadora de un Grammy.": "Recorded by B.B. King in 1969, it blends blues with string arrangements and became one of his best-known songs, winning a Grammy.",
    "Compuesta por Willie Dixon para Muddy Waters (1954); su uso de la magia hoodoo y su ritmo de 'stop-time' la volvieron un estándar del blues de Chicago.": "Written by Willie Dixon for Muddy Waters (1954), its use of hoodoo imagery and stop-time rhythm made it a Chicago blues standard.",
    "Grabada por Robert Johnson en 1936, dio origen a la leyenda de que vendió su alma en un cruce de caminos; es una pieza fundacional del Delta blues.": "Recorded by Robert Johnson in 1936, it gave rise to the legend that he sold his soul at a crossroads; it is a foundational piece of Delta blues.",
    "Escrita por John Lee Hooker (1961), es uno de los riffs de blues eléctrico más reconocibles, con un groove hipnótico que influyó al rock británico de los 60.": "Written by John Lee Hooker (1961), it features one of the most recognizable electric blues riffs, with a hypnotic groove that influenced British rock in the 1960s.",
    "Grabada por Howlin' Wolf en 1956, inspirada en el recuerdo de ver trenes pasar de noche; su riff hipnótico influyó a generaciones de músicos de blues y rock.": "Recorded by Howlin' Wolf in 1956 and inspired by the memory of watching trains pass at night, its hypnotic riff influenced generations of blues and rock musicians.",
    "Historia del blues": "Blues history",
    "Bienvenido de nuevo a Blue's. En breve serás redirigido...": "Welcome back to Blue's. You will be redirected shortly...",
    "Gracias por unirte. En breve serás redirigido...": "Thanks for joining us. You will be redirected shortly...",
    "Completa todos los campos": "Complete all fields",
    "Correo o contraseña incorrectos": "Incorrect email or password",
    "Inicio de sesión correcto": "Login successful",
    "Las contraseñas no coinciden.": "Passwords do not match.",
    "Por favor, ingresa un correo electrónico válido": "Please enter a valid email address",
    "Ese correo ya está registrado": "That email is already registered",
    "¡Has iniciado sesión!": "You have signed in!",
    "Necesitas iniciar sesión para entrar a Blue's.": "You need to sign in to enter Blue's.",
    "Inicia sesión para entrar a tu espacio musical.": "Sign in to enter your music space.",
    "Inicia sesión para escuchar las playlists.": "Sign in to listen to the playlists.",
    "Sin título": "Untitled",
    "Desconocido": "Unknown",
    "Toca para ver las canciones": "Tap to view songs",
    "- Álbum -": "- Album -",
    "Desarrollo de Software · 1°C · Crea-J 2026": "Software Development · 1°C · Crea-J 2026",
    "Asesor: Ing. Carlos Amílcar Chávez": "Advisor: Eng. Carlos Amílcar Chávez",
    "Sitio web con fines estrictamente académicos y educativos. No persigue fines de lucro. Todo el material audiovisual utilizado pertenece a sus respectivos autores bajo el derecho de cita didáctica.": "Website for strictly academic and educational purposes. It is not intended for profit. All audiovisual material used belongs to its respective authors under the right of educational quotation.",
    "— Victor Hugo": "— Victor Hugo",
    "– Victor Hugo": "– Victor Hugo",
    "– Frida Kahlo": "– Frida Kahlo",
    "– Séneca": "– Seneca",
    "– Thich Nhat Hanh": "– Thich Nhat Hanh",
    "- Porque Blue's es importante?": "- Why is Blue's important?",
    "Un ritmo para cada momento": "A rhythm for every moment",
    "¡Registro Completado! ": "Registration complete! ",
    "SPieza meditativa y ambiental diseñada con frecuencias armónicas para conciliar el sueño profundo, aliviar el estrés y serenar la mente.": "Meditative ambient piece designed with harmonic frequencies to promote deep sleep, relieve stress, and calm the mind.",
    "Un clásico alegre de soul y funk sobre pedir perdón, admitir errores en una relación y entregarse por completo a la persona amada.": "A joyful soul and funk classic about apologizing, admitting mistakes in a relationship, and giving yourself completely to the person you love.",
    "Himno enérgico de R&B y empoderamiento que exige respeto y valoración equitativa en una relación de pareja.": "An energetic R&B and empowerment anthem that demands respect and equal appreciation in a relationship.",
    "Un himno a la esperanza y al optimismo que invita a apreciar la belleza de la naturaleza, las conexiones humanas y las cosas simples de la vida.": "An anthem of hope and optimism that invites us to appreciate nature's beauty, human connections, and life's simple things.",
    "Canción de disco/funk llena de energía festiva que celebra el amor, la alegría y los recuerdos memorables compartidos.": "A disco and funk song full of festive energy that celebrates love, joy, and shared memorable moments.",
    "Versión con arreglos de big band y jazz sobre la liberación, la renovación y la confianza ante un nuevo comienzo en la vida.": "A big band and jazz arrangement about liberation, renewal, and confidence when facing a new beginning in life.",
    "Éxito de funk-pop centrado en la diversión, el estilo, el carisma y la actitud fiestera.": "A funk-pop hit focused on fun, style, charisma, and a party spirit.",
    "Un clásico de jazz/big band lleno de encanto y sofisticación que invita a viajar, explorar el mundo y disfrutar del romance sin preocupaciones.": "A charming and sophisticated jazz and big band classic that invites you to travel, explore the world, and enjoy carefree romance.",
    "Tema ritmado de soul/pop que expresa la nostalgia y el anhelo por el regreso de un amor o una persona cercana que se encuentra lejos.": "A rhythmic soul and pop track expressing nostalgia and longing for the return of a loved one or someone close who is far away.",
    "Himno icónico del funk/soul desbordante de alegría y optimismo, centrado en la euforia de sentirse enamorado y pleno.": "An iconic funk and soul anthem overflowing with joy and optimism, centered on the euphoria of feeling in love and fulfilled.",
    "Canción de pop/reggae acústico con un mensaje relajado sobre dejar de lado las dudas, dejarse llevar y entregarse abiertamente al amor.": "An acoustic pop and reggae song with a relaxed message about letting go of doubts, going with the flow, and openly surrendering to love.",
    "Tema indie pop dulce e íntimo que evoca la calidez del amor cotidiano y la comodidad de compartir cosas sencillas con alguien especial.": "A sweet and intimate indie pop track that evokes the warmth of everyday love and the comfort of sharing simple things with someone special.",
    "Canción de indie pop/bedroom pop sobre la atracción sincera, los primeros enamoramientos y la vulnerabilidad de confesar sentimientos.": "An indie pop and bedroom pop song about sincere attraction, first crushes, and the vulnerability of confessing your feelings.",
    "Pista de dream pop/lo-fi en bilingüe dedicada a la devoción romántica, la ternura y la ilusión de estar enamorado.": "A bilingual dream pop and lo-fi track devoted to romantic devotion, tenderness, and the joy of being in love.",
    "Emotiva balada de piano dedicada a la devoción total, donde se acepta y ama a la pareja incondicionalmente con todas sus virtudes e imperfecciones.": "An emotional piano ballad about total devotion, accepting and loving a partner unconditionally with all their virtues and imperfections.",
    "Balada romántica que celebra el amor verdadero, el crecimiento compartido desde la juventud y la visión de un futuro juntos.": "A romantic ballad celebrating true love, growing together from youth, and imagining a future together.",
    "Suave tema de jazz/pop que habla sobre el arrepentimiento, las oportunidades perdidas en el amor y la duda de no haber tomado una decisión a tiempo.": "A soft jazz and pop track about regret, missed opportunities in love, and wondering whether a decision was made too late.",
    "Tema de R&B contemporáneo enfocado en la comunicación en la era digital, la búsqueda de una conexión real y las ganas de reunirse en persona con alguien.": "A contemporary R&B track about communication in the digital age, the search for a real connection, and wanting to meet someone in person.",
    "Canción con ritmos de bossa nova y jazz que aborda de manera alegre y nostálgica el amor no correspondido y la frustración de guardar sentimientos en secreto.": "A bossa nova and jazz song that addresses unrequited love and the frustration of keeping feelings secret in a joyful yet nostalgic way.",
    "Éxito de pop/disco noventero que trata sobre la desesperación afectiva y el ruego por ser amado o engañado dulcemente, aunque la relación esté desgastada.": "A 1990s pop and disco hit about emotional desperation and pleading to be loved or sweetly deceived, even when the relationship is worn out.",
    "Tema de indie pop/bedroom pop íntimo y delicado que utiliza metáforas astronómicas para hablar sobre el consuelo, la vulnerabilidad y el deseo de proteger a alguien querido.": "An intimate and delicate indie pop and bedroom pop track that uses astronomical metaphors to talk about comfort, vulnerability, and the desire to protect someone dear.",
    "Famosa obra de música ambiental creada junto con terapeutas del sonido para reducir el ritmo cardíaco, la ansiedad y promover una relajación absoluta.": "A famous ambient piece created with sound therapists to reduce heart rate and anxiety and promote complete relaxation.",
    "Tema de lo-fi hip-hop instrumental con ritmos suaves y atmósferas nostálgicas, ideal para estudiar, descansar o acompañar la introspección.": "An instrumental lo-fi hip-hop track with soft rhythms and nostalgic atmospheres, ideal for studying, resting, or introspection.",
    "Composición de música electrónica ambiental y downtempo que evoca sensaciones cálidas, paisajes melancólicos y la tranquilidad de una caminata contemplativa.": "An ambient and downtempo electronic composition that evokes warm feelings, melancholic landscapes, and the calm of a contemplative walk.",
    "Pista de glitch-hop/psybient orgánico que combina texturas místicas y ritmos envolventes para crear una experiencia auditiva meditativa y tribal.": "An organic glitch-hop and psybient track combining mystical textures and enveloping rhythms to create a meditative, tribal listening experience.",
    "Tema de dream pop/indie sobre la vulnerabilidad, la intensidad de enamorarse y la sensación de ahogarse en la mirada de alguien.": "A dream pop and indie track about vulnerability, the intensity of falling in love, and the feeling of drowning in someone's gaze.",
    "Clásico de alternative rock impulsado por un característico riff de piano, centrado en la obsesión, el paso del tiempo y la lucha interna por encontrar sentido.": "An alternative rock classic driven by a distinctive piano riff, focused on obsession, the passage of time, and the inner struggle to find meaning.",
    "Canción de indie folk introspectiva y atmosférica que reflexiona sobre la insignificancia personal frente a la grandeza del universo y la humilde aceptación de uno mismo.": "An introspective and atmospheric indie folk song reflecting on personal insignificance before the vastness of the universe and the humble acceptance of oneself.",
    "Tema de post-rock eufórico y luminoso cuyo título significa saltar en charcos, enfocado en la inocencia infantil, la alegría pura y el asombro por la vida.": "A bright and euphoric post-rock track whose title means jumping in puddles, focused on childhood innocence, pure joy, and wonder at life.",
    "Una suave balada de jazz/folk acústico que invita a escapar juntos de la rutina diaria para buscar paz y romance en intimidad.": "A gentle acoustic jazz and folk ballad inviting two people to escape their daily routine together and seek peace and romance in intimacy.",
    "Pieza neoclásica instrumental que combina piano melancólico e instrumentos de cuerda. Trata sobre buscar claridad, calma y nostalgia en momentos de introspección.": "An instrumental neoclassical piece combining melancholic piano and strings. It is about seeking clarity, calm, and nostalgia during introspection.",
    "Una obra progresiva de música ambiental y electrónica suave. Transmite una sensación de viaje mental, calma expansiva y contemplación profunda a medida que los sintetizadores van creciendo.": "A progressive work of ambient music and soft electronics. It conveys a sense of mental travel, expansive calm, and deep contemplation as the synthesizers grow.",
    "Clásico del género ambient diseñado para evocar ingravidez, paz y trascendencia. Transmite la sensación de una despedida tranquila o una transición pacífica.": "An ambient classic designed to evoke weightlessness, peace, and transcendence. It conveys the feeling of a quiet farewell or peaceful transition.",
    "Composición minimalista para cuerdas de Max Richter (2004); una de las piezas contemporáneas más utilizadas en cine y televisión por su atmósfera introspectiva y melancólica.": "A minimalist composition for strings by Max Richter (2004), one of the contemporary pieces most used in film and television for its introspective, melancholic atmosphere.",
    "Tema de post-rock etéreo y adormecedor en islandés inventado (Hopelandic). Su título se traduce como Ángeles del sueño y transmite una sensación de paz profunda, como estar flotando entre sueños.": "An ethereal, dreamy post-rock track in an invented Icelandic language (Hopelandic). Its title translates as Angels of Sleep and conveys deep peace, like floating among dreams.",
    "Pieza de piano neoclásica muy emotiva. Nubes blancas evoca pureza, nostalgia, ligereza y una dulce calma mental.": "A highly emotional neoclassical piano piece. White clouds evoke purity, nostalgia, lightness, and a gentle mental calm.",
    "Una de las obras de piano contemporáneo más populares; transmite la fluidez del amor, la ternura y la serenidad de dejarse llevar.": "One of the most popular contemporary piano pieces; it conveys the flow of love, tenderness, and the serenity of letting go.",
    "Tema new age sobre la incertidumbre del futuro, el paso del tiempo y la idea de que solo el tiempo puede curar las heridas o dar respuestas.": "A new age track about uncertainty about the future, the passage of time, and the idea that only time can heal wounds or provide answers.",
    "Pieza instrumental de post-rock crescendos intensos que habla (sin palabras) sobre la devoción, el apoyo incondicional y la compañía a través de las dificultades.": "An instrumental post-rock piece with intense crescendos that speaks without words about devotion, unconditional support, and companionship through hardship.",
    "Perteneciente a la banda sonora de la película Inception; una composición épica y melancólica que explora la inevitabilidad del tiempo, la nostalgia y la aceptación.": "From the soundtrack of Inception, an epic and melancholic composition exploring the inevitability of time, nostalgia, and acceptance.",
    "Tema indie folk desgarrador respaldado por una guitarra acústica, que habla sobre una relación frágil, desgastada y a punto de colapsar a pesar del dolor.": "A heartbreaking indie folk track backed by acoustic guitar about a fragile, worn-out relationship on the verge of collapse despite the pain.",
    "Interpretada por Etta James en 1967, es un clásico soul-blues sobre el dolor de ver partir a quien se ama; su voz cruda la volvió un referente del género.": "Performed by Etta James in 1967, this soul-blues classic is about the pain of watching someone you love leave; her raw voice made it a genre landmark.",
    "Composición de indie folk melancólica y poética que aborda la pérdida de la inocencia, la madurez y la añoranza del pasado a través de metáforas visuales.": "A melancholic and poetic indie folk composition addressing lost innocence, maturity, and longing for the past through visual metaphors.",
    "Pieza de indie folk caracterizada por sus armonías vocales pastorales y un tono de cuento invernal sobre la camaradería y la fugacidad del tiempo.": "An indie folk piece marked by pastoral vocal harmonies and a winter-tale tone about companionship and the fleeting nature of time.",
    "Versión acústica íntima del tema original de The Knife, enfocada en la fugacidad de los encuentros amorosos y las huellas emocionales que dejan.": "An intimate acoustic version of The Knife's original, focused on the fleeting nature of romantic encounters and the emotional traces they leave.",
    "Clásico del jazz/soul que expresa la liberación, la renovación y la eufórica sensación de comenzar una nueva etapa en la vida.": "A jazz and soul classic expressing liberation, renewal, and the euphoric feeling of beginning a new stage in life.",
    "Balada de piano sobre la madurez emocional, el dolor de la ruptura y la aceptación al desearle lo mejor a una expareja que ha seguido adelante..": "A piano ballad about emotional maturity, the pain of a breakup, and acceptance while wishing an ex-partner who has moved on the best.",
    "Tema de rock alternativo enfocado en el arrepentimiento, el deseo de regresar al principio de una relación y la dificultad de descifrar el amor.": "An alternative rock track focused on regret, the desire to return to the beginning of a relationship, and the difficulty of deciphering love.",
    "Folk clásico que reflexiona sobre la falta de comunicación humana, la desconexión social y la soledad en el mundo moderno.": "A folk classic reflecting on the lack of human communication, social disconnection, and loneliness in the modern world.",
    "Balada acústica que aborda cómo la distancia en una relación se puede sobrellevar a través de los recuerdos y las fotografías guardadas.": "An acoustic ballad about coping with distance in a relationship through memories and saved photographs.",
    "Profunda y desgarradora versión del tema de Nine Inch Nails que habla sobre el paso del tiempo, la fragilidad humana, los errores pasados y el arrepentimiento.": "A profound and heartbreaking version of the Nine Inch Nails song about the passage of time, human fragility, past mistakes, and regret.",
    "Tienes 30 segundos": "You have 30 seconds",
    "3 aciertos": "3 correct answers",
    ", ganas y desbloqueas el premio.": ", you win and unlock the prize.",
    "fallas": "misses",
    "Has reconocido tres emociones musicales.": "You recognized three musical emotions."
  };

  // Traducciones de atributos como placeholder, aria-label y alt.
  const attributeTranslations = {
    "Seleccionar idioma": "Select language",
    "Cambiar idioma": "Change language",
    "Abrir menú": "Open menu",
    "Cerrar menú": "Close menu",
    "Carrusel de fotos": "Photo carousel",
    "Anterior": "Previous",
    "Siguiente": "Next",
    "Navegación del carrusel": "Carousel navigation",
    "Ir a la foto 1": "Go to photo 1",
    "Ir a la foto 2": "Go to photo 2",
    "Ir a la foto 3": "Go to photo 3",
    "Ir a la foto 4": "Go to photo 4",
    "Ir a la foto 5": "Go to photo 5",
    "Servicios de musicoterapia": "Music therapy services",
    "El poder de la música": "The power of music",
    "Historia del blues": "Blues history",
    "Guitarra de blues en escena": "Blues guitar on stage",
    "Persona escuchando música en un lugar íntimo": "Person listening to music in an intimate setting",
    "Música en vivo con ambiente cálido": "Live music in a warm atmosphere",
    "Mostrar contraseña": "Show password",
    "Ocultar contraseña": "Hide password",
    "Reproducir una canción aleatoria": "Play a random song",
    "Quitar de favoritos": "Remove from favorites",
    "Añadir a favoritos": "Add to favorites",
    "Blues Studio": "Blues Studio",
    "Artistas en concierto": "Artists performing live",
    "Colección de discos": "Record collection",
    "Ambiente nocturno": "Night atmosphere",
    "Estudio de audio": "Audio studio",
    discovinyl: "Vinyl record",
    "Blues Guitar": "Blues guitar",
    "Correo electrónico": "Email",
    Contraseña: "Password",
    Nombre: "First name",
    Apellido: "Last name",
    Usuario: "Username",
    "¿Cómo quieres que te llamemos?": "What should we call you?",
    "Confirma tu contraseña": "Confirm your password",
    "Buscar canción o artista en esta playlist…": "Search song or artist in this playlist…",
    feliz: "happy",
    amor: "love",
    ansioso: "anxious",
    tranquilo: "calm",
    triste: "sad",
    "Punto 1": "Dot 1",
    "Punto 2": "Dot 2",
    "Punto 3": "Dot 3",
    "Punto 4": "Dot 4"
  };

  function translateNode(node) {
    // Traduce textos de nodos según el idioma actual.
    if (node.nodeType === Node.TEXT_NODE) {
      const value = node.nodeValue.trim();
      const unquotedValue = value.replace(/^["“]|["”]$/g, '').trim();
      const translation = translations[value] || translations[unquotedValue];
      if (translation && translation !== value) {
        const translatedValue = translations[value] ? translation : value.replace(unquotedValue, translation);
        node.nodeValue = node.nodeValue.replace(value, translatedValue);
      }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;
    ['placeholder', 'aria-label', 'title', 'alt', 'data-info'].forEach(attribute => {
      const value = node.getAttribute(attribute);
      const translation = translations[value] || attributeTranslations[value];
      if (value && translation && translation !== value) {
        node.setAttribute(attribute, translation);
      }
    });
    node.childNodes.forEach(translateNode);
  }

  function translatePage(language) {
    // Cambia el idioma de la página y actualiza el título.
    document.documentElement.lang = language;
    document.title = language === 'en' ? document.title.replace(' - Iniciar Sesión', ' - Log in').replace(' - Registro', ' - Sign up').replace(' - Adivina la Emoción', ' - Guess the Emotion').replace(" | Blues", " | Blues") : document.title.replace(' - Log in', ' - Iniciar Sesión').replace(' - Sign up', ' - Registro').replace(' - Guess the Emotion', ' - Adivina la Emoción');
    if (language === 'en') {
      Array.from(document.body.childNodes).forEach(translateNode);
      if (window.applyPlaylistTranslations) window.applyPlaylistTranslations();
    } else {
      window.location.reload();
    }
  }

  window.translateText = text => translations[text] || text;

  function createLanguageControl() {
    // Crea el control ES/EN en la barra de navegación.
    const nav = document.querySelector('nav');
    if (!nav || nav.querySelector('.language-control')) return;
    const controls = getNavControls(nav);
    const wrapper = document.createElement('div');
    wrapper.className = 'language-control';
    wrapper.innerHTML = '<span class="language-label">Idioma</span><button class="language-toggle" type="button" role="switch" aria-checked="false" aria-label="Cambiar idioma"><span class="language-option language-es">ES</span><span class="language-option language-en">EN</span><span class="language-thumb" aria-hidden="true"></span></button>';
    const toggle = wrapper.querySelector('.language-toggle');
    const savedLanguage = localStorage.getItem('bluesLanguage') === 'en' ? 'en' : 'es';
    toggle.setAttribute('aria-checked', String(savedLanguage === 'en'));
    wrapper.classList.toggle('is-english', savedLanguage === 'en');
    toggle.addEventListener('click', () => {
      const language = toggle.getAttribute('aria-checked') === 'true' ? 'es' : 'en';
      toggle.setAttribute('aria-checked', String(language === 'en'));
      wrapper.classList.toggle('is-english', language === 'en');
      localStorage.setItem('bluesLanguage', language);
      translatePage(language);
    });
    controls.appendChild(wrapper);
  }

  function getNavControls(nav) {
    // Agrupa los elementos de navegación para ajustar el layout.
    let controls = nav.querySelector('.nav-controls');
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'nav-controls';
      Array.from(nav.children)
        .filter(child => child.classList.contains('nav-actions') || child.classList.contains('profile-area'))
        .forEach(child => controls.appendChild(child));
      nav.appendChild(controls);
    }
    return controls;
  }

  function createSessionControl() {
    // Muestra el perfil o acceso según si el usuario está autenticado.
    const nav = document.querySelector('nav');
    if (!nav || document.getElementById('profile-area')) return;

    let user;
    try {
      user = JSON.parse(localStorage.getItem('bluesCurrentUser'));
    } catch {
      user = null;
    }
    const homeAccess = document.querySelector('.home-access');
    if (!user) {
      if (document.querySelector('.nav-actions') || document.getElementById('login-form') || document.getElementById('register-form')) return;
      const loginLink = document.createElement('a');
      loginLink.className = 'session-login-link';
      loginLink.href = 'iniciosesion.html';
      loginLink.textContent = 'Iniciar sesión';
      getNavControls(nav).appendChild(loginLink);
      return;
    }

    homeAccess?.removeAttribute('hidden');
    document.querySelectorAll('.nav-actions .inicio, .nav-actions .registro').forEach(action => action.remove());
    const displayName = user.alias || `${user.nombre || ''} ${user.apellido || ''}`.trim() || user.usuario;
    const profile = document.createElement('div');
    profile.className = 'session-profile';
    const trigger = document.createElement('button');
    trigger.className = 'session-profile-trigger';
    trigger.type = 'button';
    trigger.setAttribute('aria-expanded', 'false');
    const avatar = document.createElement('span');
    avatar.className = 'session-profile-avatar';
    avatar.textContent = displayName.charAt(0).toUpperCase();
    const name = document.createElement('span');
    name.className = 'session-profile-name';
    name.textContent = displayName;
    trigger.append(avatar, name);

    const card = document.createElement('div');
    card.className = 'session-profile-card';
    card.hidden = true;
    const status = document.createElement('span');
    status.className = 'session-profile-status';
    status.textContent = 'Sesión iniciada';
    const fullName = document.createElement('strong');
    fullName.textContent = displayName;
    const email = document.createElement('span');
    email.className = 'session-profile-email';
    email.textContent = user.usuario || '';
    const logout = document.createElement('button');
    logout.className = 'session-profile-logout';
    logout.type = 'button';
    logout.textContent = 'Cerrar sesión';
    card.append(status, fullName, email, logout);
    profile.append(trigger, card);
    getNavControls(nav).appendChild(profile);

    trigger.addEventListener('click', () => {
      card.hidden = !card.hidden;
      trigger.setAttribute('aria-expanded', String(!card.hidden));
    });
    logout.addEventListener('click', () => {
      localStorage.removeItem('bluesCurrentUser');
      window.location.href = 'start.html';
    });
    document.addEventListener('click', event => {
      if (!profile.contains(event.target)) {
        card.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function addStyles() {
    // Añade estilos para el selector de idioma y perfil de sesión.
    if (document.getElementById('language-control-styles')) return;
    const style = document.createElement('style');
    style.id = 'language-control-styles';
    style.textContent = `.nav-logo{flex-shrink:0}.nav-links{left:180px;right:340px;transform:none;justify-content:center;gap:clamp(12px,2vw,32px);background:none!important;border:none!important;padding:0!important;box-shadow:none!important}.nav-controls{display:flex;align-items:center;gap:18px;margin-left:auto;flex-shrink:0}.nav-controls .nav-actions,.nav-controls .profile-area{margin-left:0;display:flex;align-items:center}.nav-actions .home-access{display:inline-flex;align-items:center;min-height:38px;padding:0 16px;border:1px solid rgba(61,84,160,.55);border-radius:999px;background:rgba(61,84,160,.12);color:var(--cream,#e8dcc8);font:500 10px 'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;white-space:nowrap;transition:background .25s,border-color .25s,transform .25s}.nav-actions .home-access:hover{background:rgba(61,84,160,.24);transform:translateY(-1px)}.language-control{display:flex;align-items:center;gap:9px;margin-left:0;padding-left:18px;border-left:1px solid rgba(61,84,160,.24);font:500 10px 'DM Mono',monospace;letter-spacing:.08em;color:var(--text-dim,#8d96ad);text-transform:uppercase}.language-toggle{position:relative;display:flex;align-items:center;width:64px;height:30px;padding:0 7px;border:1px solid rgba(61,84,160,.6);border-radius:999px;background:rgba(14,19,37,.9);color:var(--cream,#e8dcc8);font:500 9px 'DM Mono',monospace;letter-spacing:0;cursor:pointer;transition:background .25s,border-color .25s}.language-toggle:hover{background:rgba(61,84,160,.18);border-color:rgba(61,84,160,.9)}.language-toggle:focus-visible{outline:2px solid rgba(61,84,160,.65);outline-offset:2px}.language-option{position:relative;z-index:1;width:50%;text-align:center;transition:color .25s}.language-es{color:var(--cream,#e8dcc8)}.language-en{color:var(--text-dim,#8d96ad)}.language-thumb{position:absolute;top:3px;left:3px;width:28px;height:22px;border-radius:999px;background:var(--indigo,#3d54a0);box-shadow:0 2px 8px rgba(0,0,0,.3);transition:transform .25s ease}.language-control.is-english .language-thumb{transform:translateX(30px)}.language-control.is-english .language-es{color:var(--text-dim,#8d96ad)}.language-control.is-english .language-en{color:var(--cream,#e8dcc8)}.session-login-link{display:flex;align-items:center;min-height:38px;padding:9px 13px;border:1px solid rgba(61,84,160,.55);border-radius:999px;background:rgba(61,84,160,.12);color:var(--cream,#e8dcc8);font:500 10px 'DM Mono',monospace;text-decoration:none;white-space:nowrap}.session-login-link:hover{background:rgba(61,84,160,.24)}.session-profile{position:relative;z-index:2;margin-left:0}.session-profile-trigger{display:flex;align-items:center;gap:8px;min-height:38px;padding:4px 11px 4px 5px;border:1px solid rgba(61,84,160,.5);border-radius:7px;background:rgba(18,24,48,.88);color:var(--cream,#e8dcc8);font:500 10px 'DM Mono',monospace;cursor:pointer}.session-profile-avatar{display:grid;place-items:center;width:28px;height:28px;border-radius:6px;background:var(--indigo,#3d54a0);color:var(--cream,#e8dcc8);font-weight:700}.session-profile-name{max-width:105px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.session-profile-card{position:absolute;top:calc(100% + 12px);right:0;width:230px;padding:18px;border:1px solid rgba(61,84,160,.5);border-radius:8px;background:rgba(10,14,30,.98);box-shadow:0 20px 50px rgba(0,0,0,.45)}.session-profile-card strong,.session-profile-email{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.session-profile-status{display:block;margin-bottom:7px;color:var(--indigo,#3d54a0);font:500 9px 'DM Mono',monospace;letter-spacing:.1em;text-transform:uppercase}.session-profile-card strong{color:var(--cream,#e8dcc8);font:700 1rem 'Playfair Display',serif}.session-profile-email{margin-top:5px;color:var(--cream-dim,#b6a992);font:10px 'DM Mono',monospace}.session-profile-logout{margin-top:14px;padding:8px 10px;border:1px solid rgba(61,84,160,.35);border-radius:5px;background:transparent;color:var(--cream-dim,#b6a992);font:10px 'DM Mono',monospace;cursor:pointer}.session-profile-logout:hover{color:var(--cream,#e8dcc8);background:rgba(61,84,160,.12)}@media(max-width:900px){.nav-links{left:16px;right:16px}}@media(max-width:700px){.language-control{padding-left:0;border-left:0}.language-label{display:none}.session-profile-name{display:none}.session-profile-card{position:fixed;top:70px;right:16px}}`;
    document.head.appendChild(style);
  }

  const initLanguageSystem = () => {
    // Inicializa controles visuales y escucha cambios de idioma.
    if (!document.body) return;
    addStyles();
    createLanguageControl();
    createSessionControl();
    if (localStorage.getItem('bluesLanguage') === 'en') translatePage('en');
    const observer = new MutationObserver(records => {
      if (localStorage.getItem('bluesLanguage') !== 'en') return;
      records.forEach(record => {
        if (record.type === 'characterData') translateNode(record.target);
        if (record.type === 'attributes') translateNode(record.target);
        if (record.addedNodes) record.addedNodes.forEach(translateNode);
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['placeholder', 'aria-label', 'title', 'alt']
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSystem, { once: true });
  } else {
    initLanguageSystem();
  }
})();