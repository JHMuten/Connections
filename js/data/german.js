// German vocabulary database
const germanDatabase = [
    // ── VERBS ────────────────────────────────────────────────────────────
    { super: "Verbs", category: "Parts of 'sein'", textColor: "#ffffff", bg: "#1e40af", pool: ["ich bin", "du bist", "er ist", "sie ist", "es ist", "wir sind", "ihr seid", "sie sind"] },
    { super: "Verbs", category: "Parts of 'haben'", textColor: "#ffffff", bg: "#2563eb", pool: ["ich habe", "du hast", "er hat", "sie hat", "wir haben", "ihr habt", "sie haben"] },
    { super: "Verbs", category: "Parts of 'werden'", textColor: "#ffffff", bg: "#3b82f6", pool: ["ich werde", "du wirst", "er wird", "sie wird", "wir werden", "ihr werdet", "sie werden"] },
    { super: "Verbs", category: "Parts of 'können'", textColor: "#1e293b", bg: "#60a5fa", pool: ["ich kann", "du kannst", "er kann", "wir können", "ihr könnt", "sie können"] },
    { super: "Verbs", category: "Parts of 'müssen'", textColor: "#1e293b", bg: "#93c5fd", pool: ["ich muss", "du musst", "er muss", "wir müssen", "ihr müsst", "sie müssen"] },
    { super: "Verbs", category: "Parts of 'wollen'", textColor: "#1e293b", bg: "#dbeafe", pool: ["ich will", "du willst", "er will", "wir wollen", "ihr wollt", "sie wollen"] },
    { super: "Verbs", category: "Infinitives", textColor: "#ffffff", bg: "#6b21a8", pool: ["arbeiten", "bauen", "besuchen", "bezahlen", "essen", "fahren", "feiern", "finden", "geben", "gehen", "hören", "kaufen", "kochen", "kommen", "laufen", "lesen", "machen", "nehmen", "organisieren", "reisen", "sammeln", "schlafen", "schreiben", "schwimmen", "sehen", "singen", "spielen", "sprechen", "tanzen", "tragen", "treffen", "trinken", "verlieren", "wohnen"] },
    { super: "Verbs", category: "Reflexive Verbs", textColor: "#ffffff", bg: "#7c3aed", pool: ["sich anziehen", "sich ausruhen", "sich bewegen", "sich entspannen", "sich erinnern", "sich fühlen", "sich kümmern", "sich treffen", "sich waschen", "sich vorstellen"] },
    { super: "Verbs", category: "Separable Verbs", textColor: "#ffffff", bg: "#8b5cf6", pool: ["abholen", "anfangen", "ankommen", "anrufen", "ansehen", "aufmachen", "aufstehen", "ausgehen", "ausgeben", "einkaufen", "einladen", "fernsehen", "herunterladen", "hochladen", "mitnehmen", "zurückkommen"] },
    { super: "Verbs", category: "Past Participles", textColor: "#1e293b", bg: "#a78bfa", pool: ["gegessen", "gefahren", "gefunden", "gegangen", "gekauft", "gekommen", "gemacht", "gesehen", "gesungen", "geschwommen", "geschrieben", "getrunken", "gewonnen", "verloren", "gewesen", "gehabt"] },
    { super: "Verbs", category: "Future (werden + infinitive)", textColor: "#ffffff", bg: "#1e40af", pool: ["ich werde gehen", "ich werde machen", "ich werde reisen", "ich werde essen", "wir werden besuchen", "er wird kaufen", "sie wird fahren", "du wirst lernen"] },
    
    // ── GRAMMAR & STRUCTURE ──────────────────────────────────────────────
    { super: "Grammar & Structure", category: "Modal Verbs (present)", textColor: "#ffffff", bg: "#475569", pool: ["ich darf", "ich kann", "ich muss", "ich soll", "ich will", "man darf", "man kann", "man muss", "man soll", "man sollte"] },
    { super: "Grammar & Structure", category: "Negative Words", textColor: "#ffffff", bg: "#64748b", pool: ["kein", "keine", "nicht", "nie", "niemals", "niemand", "nichts", "nirgendwo"] },
    { super: "Grammar & Structure", category: "Question Words", textColor: "#1e293b", bg: "#94a3b8", pool: ["wann", "warum", "was", "welche", "wer", "wie", "wie viel", "wo", "woher", "wohin"] },
    { super: "Grammar & Structure", category: "Conjunctions", textColor: "#1e293b", bg: "#cbd5e1", pool: ["aber", "als", "bevor", "da", "dass", "denn", "entweder", "nachdem", "obwohl", "oder", "und", "weil", "wenn", "während"] },
    { super: "Grammar & Structure", category: "Prepositions", textColor: "#1e293b", bg: "#cbd5e1", pool: ["an", "auf", "aus", "bei", "durch", "für", "gegen", "hinter", "in", "mit", "nach", "neben", "ohne", "über", "um", "unter", "von", "vor", "zwischen"] },
    
    // ── IDENTITY & DESCRIPTIONS ──────────────────────────────────────────
    { super: "Identity & Descriptions", category: "Character Adjectives", textColor: "#ffffff", bg: "#be185d", pool: ["ehrlich", "eifersüchtig", "faul", "freundlich", "geduldig", "gemein", "großzügig", "hilfsbereit", "höflich", "komisch", "kreativ", "lustig", "nett", "ruhig", "sportlich", "streng", "witzig", "unabhängig"] },
    { super: "Identity & Descriptions", category: "Appearance Adjectives", textColor: "#ffffff", bg: "#db2777", pool: ["blond", "dick", "dünn", "groß", "hässlich", "hübsch", "jung", "klein", "kurz", "lang", "schlank", "stark"] },
    { super: "Identity & Descriptions", category: "Nationality Adjectives", textColor: "#1e293b", bg: "#f472b6", pool: ["amerikanisch", "britisch", "deutsch", "englisch", "europäisch", "französisch", "griechisch", "italienisch", "österreichisch", "schweizerisch", "spanisch", "türkisch"] },
    { super: "Identity & Descriptions", category: "Feeling Adjectives", textColor: "#1e293b", bg: "#f9a8d4", pool: ["ärgerlich", "aufgeregt", "froh", "glücklich", "kaputt", "müde", "nervös", "stolz", "traurig", "zufrieden"] },
    { super: "Identity & Descriptions", category: "Family Members", textColor: "#ffffff", bg: "#be185d", pool: ["Bruder", "Cousin", "Cousine", "Geschwister", "Großeltern", "Mutter", "Oma", "Onkel", "Opa", "Schwester", "Sohn", "Tante", "Tochter", "Vater"] },
    { super: "Identity & Descriptions", category: "Clothes", textColor: "#ffffff", bg: "#ec4899", pool: ["Hemd", "Hose", "Jacke", "Kleid", "Kleidung", "Rock", "Schuh", "Tasche", "T-Shirt", "Uniform"] },
    { super: "Identity & Descriptions", category: "Colours", textColor: "#ffffff", bg: "#ec4899", pool: ["blau", "braun", "gelb", "grau", "grün", "lila", "orange", "rosa", "rot", "schwarz", "weiß"] },
    { super: "Identity & Descriptions", category: "Opinion Adjectives", textColor: "#1e293b", bg: "#fbcfe8", pool: ["ausgezeichnet", "fantastisch", "furchtbar", "ideal", "interessant", "langweilig", "schrecklich", "spannend", "toll", "wunderbar"] },
    { super: "Identity & Descriptions", category: "Relationships & People", textColor: "#ffffff", bg: "#db2777", pool: ["Beziehung", "Ehe", "Freund", "Freundschaft", "Hochzeit", "Liebe", "Paar", "Partner", "Streit", "Trennung", "zivile Partnerschaft"] },
    
    // ── LIFESTYLE & HEALTH ───────────────────────────────────────────────
    { super: "Lifestyle & Health", category: "Food", textColor: "#ffffff", bg: "#c2410c", pool: ["Brot", "Ei", "Fleisch", "Fisch", "Gemüse", "Hähnchen", "Käse", "Kuchen", "Obst", "Pommes", "Salat", "Suppe", "Wurst", "Zucker"] },
    { super: "Lifestyle & Health", category: "Drinks", textColor: "#ffffff", bg: "#ea580c", pool: ["Bier", "Cola", "Kaffee", "Milch", "Saft", "Tee", "Wasser", "Wein"] },
    { super: "Lifestyle & Health", category: "Meals & Eating Out", textColor: "#ffffff", bg: "#f97316", pool: ["Abendessen", "Fastfood", "Frühstück", "Gericht", "Getränk", "Imbiss", "Mittagessen", "Rechnung", "Restaurant", "Speisekarte"] },
    { super: "Lifestyle & Health", category: "Health & Body", textColor: "#1e293b", bg: "#fb923c", pool: ["Arm", "Auge", "Bein", "Finger", "Fuß", "Gesicht", "Hand", "Herz", "Kopf", "Körper", "Mund", "Nase", "Ohr", "Rücken", "Zahn"] },
    { super: "Lifestyle & Health", category: "Healthy Lifestyle", textColor: "#ffffff", bg: "#f97316", pool: ["Bewegung", "Diät", "Ernährung", "Fitness", "Fitness-Studio", "gesund", "joggen", "Sport", "Training", "wandern"] },
    { super: "Lifestyle & Health", category: "Health & Illness", textColor: "#1e293b", bg: "#fdba74", pool: ["Alkohol", "Droge", "Krankheit", "Krankenhaus", "Medikament", "Schmerzen", "Stress", "Zigarette", "Arzt", "Unfall"] },
    
    // ── MEDIA, LEISURE & SPORT ───────────────────────────────────────────
    { super: "Media, Leisure & Sport", category: "Technology & Devices", textColor: "#ffffff", bg: "#7e22ce", pool: ["App", "Blog", "Computer", "E-Mail", "Gerät", "Handy", "Internet", "Kamera", "Laptop", "Netz", "SMS", "Telefon", "Video", "WLAN"] },
    { super: "Media, Leisure & Sport", category: "Media Nouns", textColor: "#ffffff", bg: "#9333ea", pool: ["Film", "Fernsehen", "Komödie", "Krimi", "Medien", "Nachricht", "Programm", "Roman", "Seifenoper", "Sendung", "Zeitung"] },
    { super: "Media, Leisure & Sport", category: "Celebrity & Culture", textColor: "#ffffff", bg: "#a855f7", pool: ["Autor", "Einfluss", "Erfolg", "Fan", "Karriere", "Künstler", "Persönlichkeit", "Schauspieler", "Star", "Talent", "Vorbild", "Wettbewerb"] },
    { super: "Media, Leisure & Sport", category: "Sports", textColor: "#ffffff", bg: "#a855f7", pool: ["Basketball", "Fußball", "Leichtathletik", "Radfahren", "Rugby", "Schwimmen", "Skifahren", "Tennis", "Turnen", "Volleyball"] },
    { super: "Media, Leisure & Sport", category: "Music & Performance", textColor: "#ffffff", bg: "#9333ea", pool: ["Band", "Bühne", "Instrument", "Konzert", "Lied", "Musik", "Sänger", "Stimme", "Theater", "Ton"] },
    
    // ── SCHOOL, JOBS & FUTURE ────────────────────────────────────────────
    { super: "School, Jobs & Future", category: "School Subjects", textColor: "#ffffff", bg: "#4338ca", pool: ["Biologie", "Chemie", "Deutsch", "Englisch", "Erdkunde", "Geschichte", "Informatik", "Kunst", "Mathematik", "Musik", "Physik", "Religion", "Sport"] },
    { super: "School, Jobs & Future", category: "School Places & Objects", textColor: "#ffffff", bg: "#4f46e5", pool: ["Bibliothek", "Blatt", "Hausaufgaben", "Kantine", "Klasse", "Klassenarbeit", "Pause", "Schule", "Stunde", "Tasche", "Zeugnis"] },
    { super: "School, Jobs & Future", category: "Jobs & Professions", textColor: "#ffffff", bg: "#6366f1", pool: ["Anwalt", "Arzt", "Ärztin", "Bauer", "Betreuer", "Ingenieur", "Journalist", "Krankenpfleger", "Lehrer", "Polizist", "Politiker", "Verkäufer", "Wissenschaftler"] },
    { super: "School, Jobs & Future", category: "Work & Future Plans", textColor: "#1e293b", bg: "#818cf8", pool: ["Abschluss", "Arbeit", "Ausbildung", "Beruf", "Firma", "Gehalt", "Job", "Lohn", "Praktikum", "Stelle", "Studium", "Universität", "Vorstellungsgespräch"] },
    
    // ── TRAVEL, TOWN & ENVIRONMENT ───────────────────────────────────────
    { super: "Travel, Town & Environment", category: "Places in Town", textColor: "#ffffff", bg: "#15803d", pool: ["Bahnhof", "Bank", "Bäckerei", "Café", "Flughafen", "Kino", "Krankenhaus", "Markt", "Museum", "Park", "Polizei", "Post", "Rathaus", "Restaurant", "Schloss", "Stadion", "Supermarkt", "Theater"] },
    { super: "Travel, Town & Environment", category: "Transport", textColor: "#ffffff", bg: "#16a34a", pool: ["Auto", "Bahn", "Boot", "Bus", "Fahrrad", "Flugzeug", "Schiff", "Straßenbahn", "U-Bahn", "Zug"] },
    { super: "Travel, Town & Environment", category: "Travel & Tourism", textColor: "#ffffff", bg: "#16a34a", pool: ["Aufenthalt", "Ausflug", "Ausland", "Flug", "Hotel", "Koffer", "Reise", "Ticket", "Tourist", "Urlaub", "Zelt"] },
    { super: "Travel, Town & Environment", category: "Parts of the House", textColor: "#1e293b", bg: "#4ade80", pool: ["Bad", "Büro", "Fenster", "Garten", "Haus", "Keller", "Küche", "Schlafzimmer", "Tür", "Wohnzimmer", "Zimmer"] },
    { super: "Travel, Town & Environment", category: "German-speaking Countries & Cities", textColor: "#ffffff", bg: "#15803d", pool: ["Berlin", "Deutschland", "Köln", "München", "Österreich", "Schweiz", "Wien"] },
    { super: "Travel, Town & Environment", category: "Environment", textColor: "#1e293b", bg: "#22c55e", pool: ["Baum", "Dürre", "Energie", "Erde", "Flut", "Klimawandel", "Müll", "Natur", "Pflanze", "Recycling", "Umwelt", "Verschmutzung", "Wald"] },
    { super: "Travel, Town & Environment", category: "Global Issues", textColor: "#ffffff", bg: "#15803d", pool: ["Arbeitslosigkeit", "Armut", "Flüchtling", "Gewalt", "Hunger", "Klimawandel", "Krieg", "Kriminalität", "Rassismus"] },
    { super: "Travel, Town & Environment", category: "Geography & Landscape", textColor: "#ffffff", bg: "#16a34a", pool: ["Berg", "Dorf", "Fluss", "Insel", "Küste", "Landschaft", "Meer", "See", "Strand", "Tal", "Wald"] },
    
    // ── TIME, WEATHER & NUMBERS ──────────────────────────────────────────
    { super: "Time, Weather & Numbers", category: "Adverbs of Time", textColor: "#ffffff", bg: "#ca8a04", pool: ["bald", "bereits", "damals", "dann", "endlich", "früher", "gestern", "heute", "immer", "jetzt", "manchmal", "morgen", "neulich", "nie", "oft", "sofort", "trotzdem"] },
    { super: "Time, Weather & Numbers", category: "Seasons", textColor: "#1e293b", bg: "#fde047", pool: ["Frühling", "Herbst", "Jahreszeit", "Sommer", "Winter"] },
    { super: "Time, Weather & Numbers", category: "Months", textColor: "#1e293b", bg: "#facc15", pool: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] },
    { super: "Time, Weather & Numbers", category: "Days of the Week", textColor: "#1e293b", bg: "#fde047", pool: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"] },
    { super: "Time, Weather & Numbers", category: "Weather", textColor: "#1e293b", bg: "#eab308", pool: ["heiß", "kalt", "Regen", "Schnee", "sonnig", "Sturm", "Temperatur", "warm", "Wind", "Wolke"] },
    { super: "Time, Weather & Numbers", category: "Numbers (1–20)", textColor: "#1e293b", bg: "#fef08a", pool: ["eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn", "zwanzig"] },
    
    // ── CUSTOMS, FESTIVALS & FAITH ───────────────────────────────────────
    { super: "Customs, Festivals & Faith", category: "Customs & Festivals", textColor: "#ffffff", bg: "#86198f", pool: ["Feier", "Fest", "Feuerwerk", "Geburtstag", "Heiliger Abend", "Hochzeit", "Karneval", "Ostern", "Party", "Silvester", "Stimmung", "Tradition", "Weihnachten"] },
    { super: "Customs, Festivals & Faith", category: "Faith & Religion", textColor: "#ffffff", bg: "#9333ea", pool: ["Buddhist", "Christ", "Eid", "Hindu", "Jude", "Jüdin", "Kirche", "Moschee", "Muslim", "Religion", "Synagoge", "Tempel"] },
    { super: "Customs, Festivals & Faith", category: "Government & Society", textColor: "#ffffff", bg: "#86198f", pool: ["Bürger", "Bürgermeister", "Demokratie", "Gesetz", "Regierung", "Staat", "Wahl", "Bundesregierung", "Gesellschaft"] }
];
