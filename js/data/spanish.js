// Spanish vocabulary database
const spanishDatabase = [
    // ── VERBS ────────────────────────────────────────────────────────────
    { super: "Verbs", category: "Parts of 'ser'", textColor: "#ffffff", bg: "#1e40af", pool: ["soy", "eres", "es", "somos", "sois", "son"] },
    { super: "Verbs", category: "Parts of 'estar'", textColor: "#ffffff", bg: "#2563eb", pool: ["estoy", "estás", "está", "estamos", "estáis", "están"] },
    { super: "Verbs", category: "Parts of 'tener'", textColor: "#ffffff", bg: "#3b82f6", pool: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"] },
    { super: "Verbs", category: "Parts of 'ir'", textColor: "#1e293b", bg: "#60a5fa", pool: ["voy", "vas", "va", "vamos", "vais", "van"] },
    { super: "Verbs", category: "Parts of 'hacer'", textColor: "#1e293b", bg: "#93c5fd", pool: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"] },
    { super: "Verbs", category: "Parts of 'poder'", textColor: "#1e293b", bg: "#dbeafe", pool: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"] },
    { super: "Verbs", category: "Parts of 'querer'", textColor: "#ffffff", bg: "#1e40af", pool: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"] },
    { super: "Verbs", category: "Infinitives (-ar)", textColor: "#ffffff", bg: "#6b21a8", pool: ["ayudar", "bailar", "buscar", "cantar", "cambiar", "celebrar", "cocinar", "comprar", "estudiar", "escuchar", "ganar", "hablar", "jugar", "limpiar", "llegar", "llamar", "mejorar", "nadar", "organizar", "participar", "proteger", "reciclar", "respetar", "trabajar", "viajar", "visitar", "votar"] },
    { super: "Verbs", category: "Infinitives (-er / -ir)", textColor: "#ffffff", bg: "#7c3aed", pool: ["aprender", "beber", "comer", "comprender", "conocer", "correr", "escribir", "leer", "perder", "poder", "recibir", "responder", "salir", "seguir", "vender", "ver", "vivir", "volver"] },
    { super: "Verbs", category: "Reflexive Verbs", textColor: "#ffffff", bg: "#8b5cf6", pool: ["acostarse", "despertarse", "dormirse", "ducharse", "lavarse", "levantarse", "llamarse", "peinarse", "ponerse", "prepararse", "vestirse"] },
    { super: "Verbs", category: "Past Participles (regular)", textColor: "#1e293b", bg: "#a78bfa", pool: ["bailado", "cantado", "comido", "comprado", "estudiado", "hablado", "jugado", "llegado", "trabajado", "viajado", "vivido"] },
    { super: "Verbs", category: "Past Participles (irregular)", textColor: "#1e293b", bg: "#c4b5fd", pool: ["abierto", "dicho", "escrito", "hecho", "muerto", "puesto", "roto", "visto", "vuelto"] },
    { super: "Verbs", category: "Future (ir a + infinitive)", textColor: "#ffffff", bg: "#1e40af", pool: ["voy a ir", "voy a hacer", "voy a comer", "voy a salir", "voy a ver", "vamos a visitar", "vamos a viajar", "va a cambiar", "va a terminar"] },
    
    // ── GRAMMAR & STRUCTURE ──────────────────────────────────────────────
    { super: "Grammar & Structure", category: "Modal Expressions", textColor: "#ffffff", bg: "#475569", pool: ["se debe", "se puede", "se debería", "hay que", "no se debe", "no se puede", "no hay que", "debo"] },
    { super: "Grammar & Structure", category: "Negative Words", textColor: "#ffffff", bg: "#64748b", pool: ["nunca", "no", "nadie", "nada", "tampoco", "ningún", "ni… ni", "jamás"] },
    { super: "Grammar & Structure", category: "Interrogatives", textColor: "#1e293b", bg: "#94a3b8", pool: ["cuánto", "cómo", "dónde", "por qué", "cuándo", "qué", "cuál", "quién"] },
    { super: "Grammar & Structure", category: "Conjunctions", textColor: "#1e293b", bg: "#cbd5e1", pool: ["aunque", "como", "entonces", "pero", "porque", "pues", "si", "sin embargo", "también", "tanto", "y"] },
    { super: "Grammar & Structure", category: "Prepositions", textColor: "#1e293b", bg: "#cbd5e1", pool: ["a", "antes de", "con", "contra", "de", "debajo de", "delante de", "detrás de", "durante", "entre", "hacia", "hasta", "para", "por", "según", "sin", "sobre"] },
    
    // ── IDENTITY & DESCRIPTIONS ──────────────────────────────────────────
    { super: "Identity & Descriptions", category: "Character Adjectives", textColor: "#ffffff", bg: "#be185d", pool: ["alegre", "ambicioso", "comprensivo", "gracioso", "hablador", "independiente", "inteligente", "loco", "optimista", "paciente", "perezoso", "responsable", "romántico", "sensible", "serio", "simpático", "tímido", "tolerante", "trabajador", "vago"] },
    { super: "Identity & Descriptions", category: "Appearance Adjectives", textColor: "#ffffff", bg: "#db2777", pool: ["alto", "bajo", "bonito", "brun", "delgado", "feo", "gordo", "grande", "guapo", "hermoso", "joven", "largo", "moreno", "pequeño", "rubio", "viejo"] },
    { super: "Identity & Descriptions", category: "Nationality Adjectives", textColor: "#1e293b", bg: "#f472b6", pool: ["alemán", "americano", "argentino", "británico", "chileno", "chino", "colombiano", "cubano", "español", "europeo", "francés", "inglés", "italiano", "mexicano"] },
    { super: "Identity & Descriptions", category: "Feeling Adjectives", textColor: "#1e293b", bg: "#f9a8d4", pool: ["cansado", "contento", "enojado", "estresado", "feliz", "nervioso", "orgulloso", "preocupado", "sorprendido", "triste"] },
    { super: "Identity & Descriptions", category: "Family Members", textColor: "#ffffff", bg: "#be185d", pool: ["abuela", "abuelo", "hermana", "hermano", "hija", "hijo", "madrastra", "madre", "marido", "mujer", "padre", "padrastro", "primo", "tía", "tío"] },
    { super: "Identity & Descriptions", category: "Clothes", textColor: "#ffffff", bg: "#ec4899", pool: ["bolsa", "camisa", "camiseta", "falda", "gafas", "mochila", "pantalón", "ropa", "traje", "uniforme", "vestido", "zapato"] },
    { super: "Identity & Descriptions", category: "Colours", textColor: "#ffffff", bg: "#ec4899", pool: ["amarillo", "azul", "blanco", "gris", "marrón", "naranja", "negro", "rojo", "rosa", "verde", "violeta"] },
    { super: "Identity & Descriptions", category: "Opinion Adjectives", textColor: "#1e293b", bg: "#fbcfe8", pool: ["aburrido", "agradable", "alucinante", "divertido", "estupendo", "fatal", "fenomenal", "genial", "horrible", "increíble", "interesante", "perfecto", "terrible", "único"] },
    { super: "Identity & Descriptions", category: "Relationships & People", textColor: "#ffffff", bg: "#db2777", pool: ["amistad", "amor", "boda", "compañero", "copain", "novia", "novio", "pareja", "relación", "separarse", "casarse", "matrimonio"] },
    
    // ── LIFESTYLE & HEALTH ───────────────────────────────────────────────
    { super: "Lifestyle & Health", category: "Food", textColor: "#ffffff", bg: "#c2410c", pool: ["arroz", "bocadillo", "carne", "ensalada", "fruta", "hamburguesa", "huevo", "jamón", "pan", "paella", "pescado", "pollo", "tomate", "tortilla", "verdura"] },
    { super: "Lifestyle & Health", category: "Drinks", textColor: "#ffffff", bg: "#ea580c", pool: ["agua", "bebida", "café", "copa", "jugo", "leche", "té", "vino", "zumo"] },
    { super: "Lifestyle & Health", category: "Meals & Eating Out", textColor: "#ffffff", bg: "#f97316", pool: ["camarero", "carta", "cena", "comida", "desayuno", "menú", "plato", "restaurante", "tapas"] },
    { super: "Lifestyle & Health", category: "Health & Body", textColor: "#1e293b", bg: "#fb923c", pool: ["boca", "brazo", "cabeza", "cara", "corazón", "cuerpo", "diente", "espalda", "mano", "nariz", "ojo", "oreja", "pierna", "pie", "piel"] },
    { super: "Lifestyle & Health", category: "Healthy Lifestyle", textColor: "#ffffff", bg: "#f97316", pool: ["deporte", "dieta", "ejercicio", "energía", "forma", "gimnasio", "natación", "régimen", "salud", "sano"] },
    { super: "Lifestyle & Health", category: "Health & Illness", textColor: "#1e293b", bg: "#fdba74", pool: ["accidente", "alcohol", "cigarrillo", "droga", "enfermedad", "estrés", "medicina", "medicamento", "sobrepeso", "urgencia"] },
    
    // ── MEDIA, LEISURE & SPORT ───────────────────────────────────────────
    { super: "Media, Leisure & Sport", category: "Technology & Devices", textColor: "#ffffff", bg: "#7e22ce", pool: ["app", "blog", "cámara", "dispositivo", "internet", "móvil", "ordenador", "pantalla", "portátil", "red", "sitio web", "tableta", "teclado", "teléfono", "videojuego"] },
    { super: "Media, Leisure & Sport", category: "Media Nouns", textColor: "#ffffff", bg: "#9333ea", pool: ["anuncio", "canal", "diario", "documental", "emisión", "película", "periódico", "programa", "radio", "revista", "serie", "tele", "televisión"] },
    { super: "Media, Leisure & Sport", category: "Celebrity & Culture", textColor: "#ffffff", bg: "#a855f7", pool: ["actriz", "artista", "autor", "celebridad", "concierto", "escritor", "éxito", "famoso", "grupo", "influencer", "músico", "talento"] },
    { super: "Media, Leisure & Sport", category: "Sports", textColor: "#ffffff", bg: "#a855f7", pool: ["atletismo", "baloncesto", "ciclismo", "fútbol", "gimnasia", "natación", "rugby", "tenis", "voleibol"] },
    { super: "Media, Leisure & Sport", category: "Music & Performance", textColor: "#ffffff", bg: "#9333ea", pool: ["canción", "concierto", "danza", "flamenco", "guitarra", "letra", "música", "obra", "teatro", "voz"] },
    
    // ── SCHOOL, JOBS & FUTURE ────────────────────────────────────────────
    { super: "School, Jobs & Future", category: "School Subjects", textColor: "#ffffff", bg: "#4338ca", pool: ["arte", "biología", "ciencias", "dibujo", "economía", "educación física", "español", "francés", "geografía", "historia", "informática", "inglés", "matemáticas", "música", "química", "tecnología"] },
    { super: "School, Jobs & Future", category: "School Places & Objects", textColor: "#ffffff", bg: "#4f46e5", pool: ["aula", "biblioteca", "bolígrafo", "colegio", "deberes", "diccionario", "escuela", "instituto", "libro", "nota", "patio", "pupitre", "recreo", "silla", "uniforme"] },
    { super: "School, Jobs & Future", category: "Jobs & Professions", textColor: "#ffffff", bg: "#6366f1", pool: ["abogado", "camarero", "científico", "cocinero", "cuidador", "dentista", "empleado", "enfermero", "escritor", "ingeniero", "médico", "periodista", "pintor", "policía", "profesor", "veterinario"] },
    { super: "School, Jobs & Future", category: "Work & Future Plans", textColor: "#1e293b", bg: "#818cf8", pool: ["carrera", "empleo", "empresa", "entrevista", "jefe", "paro", "salario", "trabajo", "universidad"] },
    
    // ── TRAVEL, TOWN & ENVIRONMENT ───────────────────────────────────────
    { super: "Travel, Town & Environment", category: "Places in Town", textColor: "#ffffff", bg: "#15803d", pool: ["aeropuerto", "banco", "biblioteca", "castillo", "cine", "estación", "gimnasio", "hospital", "hotel", "iglesia", "mercado", "museo", "parque", "piscina", "restaurante", "supermercado", "teatro"] },
    { super: "Travel, Town & Environment", category: "Transport", textColor: "#ffffff", bg: "#16a34a", pool: ["autobús", "avión", "barco", "bicicleta", "coche", "metro", "taxi", "tren", "a pie"] },
    { super: "Travel, Town & Environment", category: "Travel & Tourism", textColor: "#ffffff", bg: "#16a34a", pool: ["aeropuerto", "alojamiento", "billete", "equipaje", "excursión", "llegada", "maleta", "pasaporte", "retraso", "turismo", "turista", "vacaciones", "viaje", "vuelo"] },
    { super: "Travel, Town & Environment", category: "Parts of the House", textColor: "#1e293b", bg: "#4ade80", pool: ["baño", "casa", "cocina", "comedor", "dormitorio", "escalera", "habitación", "jardín", "pared", "piso", "puerta", "salón", "ventana"] },
    { super: "Travel, Town & Environment", category: "Spanish-speaking Countries", textColor: "#ffffff", bg: "#15803d", pool: ["Argentina", "Chile", "Colombia", "Cuba", "España", "México", "Perú", "Venezuela", "Bolivia", "Ecuador"] },
    { super: "Travel, Town & Environment", category: "Environment", textColor: "#1e293b", bg: "#22c55e", pool: ["árbol", "basura", "bosque", "cambio climático", "clima", "contaminación", "especie", "incendio", "medioambiente", "plástico", "planeta", "reciclaje", "reducir", "tierra"] },
    { super: "Travel, Town & Environment", category: "Global Issues", textColor: "#ffffff", bg: "#15803d", pool: ["crimen", "desigualdad", "desastre", "discriminación", "droga", "guerra", "hambre", "inmigración", "pobreza", "racismo", "violencia"] },
    { super: "Travel, Town & Environment", category: "Geography & Landscape", textColor: "#ffffff", bg: "#16a34a", pool: ["bosque", "campo", "costa", "isla", "lago", "mar", "montaña", "océano", "paisaje", "playa", "río", "sierra"] },
    
    // ── TIME, WEATHER & NUMBERS ──────────────────────────────────────────
    { super: "Time, Weather & Numbers", category: "Adverbs of Time", textColor: "#ffffff", bg: "#ca8a04", pool: ["ahora", "antes", "después", "hoy", "mañana", "pronto", "siempre", "tarde", "temprano", "todavía", "ya"] },
    { super: "Time, Weather & Numbers", category: "Seasons", textColor: "#1e293b", bg: "#fde047", pool: ["primavera", "verano", "otoño", "invierno", "estación"] },
    { super: "Time, Weather & Numbers", category: "Months", textColor: "#1e293b", bg: "#facc15", pool: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"] },
    { super: "Time, Weather & Numbers", category: "Days of the Week", textColor: "#1e293b", bg: "#fde047", pool: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"] },
    { super: "Time, Weather & Numbers", category: "Weather", textColor: "#1e293b", bg: "#eab308", pool: ["calor", "frío", "lluvia", "nieve", "niebla", "nube", "sol", "temperatura", "tormenta", "viento"] },
    { super: "Time, Weather & Numbers", category: "Numbers (1–20)", textColor: "#1e293b", bg: "#fef08a", pool: ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte"] },
    
    // ── CUSTOMS, FESTIVALS & FAITH ───────────────────────────────────────
    { super: "Customs, Festivals & Faith", category: "Customs & Festivals", textColor: "#ffffff", bg: "#86198f", pool: ["boda", "carnaval", "celebración", "costumbre", "cumpleaños", "desfile", "disfraz", "fiesta", "fuegos artificiales", "Las Fallas", "Navidad", "Nochebuena", "Nochevieja", "Sanfermines", "Semana Santa", "Día de los Muertos", "Día de los Reyes", "tradición"] },
    { super: "Customs, Festivals & Faith", category: "Faith & Religion", textColor: "#ffffff", bg: "#9333ea", pool: ["budista", "católico", "cristiano", "fe", "iglesia", "judío", "mezquita", "musulmán", "religión", "sinagoga", "templo"] },
    { super: "Customs, Festivals & Faith", category: "Government & Society", textColor: "#ffffff", bg: "#86198f", pool: ["ciudadano", "democracia", "elección", "gobierno", "impuesto", "ley", "parlamento", "política", "presidente", "república", "voto"] }
];
