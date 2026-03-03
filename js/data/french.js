// French vocabulary database
const frenchDatabase = [
    // ── CONJUGATED VERBS ─────────────────────────────────────────────────
    { super: "Conjugated Verbs", category: "Parts of 'avoir'", textColor: "#ffffff", bg: "#2563eb", pool: ["j'ai", "tu as", "il a", "elle a", "on a", "nous avons", "vous avez", "ils ont", "elles ont"] },
    { super: "Conjugated Verbs", category: "Parts of 'être'", textColor: "#1a1a1a", bg: "#fde68a", pool: ["je suis", "tu es", "il est", "elle est", "on est", "nous sommes", "vous êtes", "ils sont", "elles sont"] },
    { super: "Conjugated Verbs", category: "Parts of 'aller'", textColor: "#ffffff", bg: "#a78bfa", pool: ["je vais", "tu vas", "il va", "elle va", "on va", "nous allons", "vous allez", "ils vont", "elles vont"] },
    { super: "Conjugated Verbs", category: "Parts of 'faire'", textColor: "#ffffff", bg: "#f97316", pool: ["je fais", "tu fais", "il fait", "elle fait", "on fait", "nous faisons", "vous faites", "ils font", "elles font"] },
    { super: "Conjugated Verbs", category: "Parts of 'pouvoir'", textColor: "#ffffff", bg: "#0d9488", pool: ["je peux", "tu peux", "il peut", "elle peut", "on peut", "nous pouvons", "vous pouvez", "ils peuvent", "elles peuvent"] },
    { super: "Conjugated Verbs", category: "Parts of 'vouloir'", textColor: "#ffffff", bg: "#d97706", pool: ["je veux", "tu veux", "il veut", "elle veut", "on veut", "nous voulons", "vous voulez", "ils veulent", "je voudrais"] },
    { super: "Conjugated Verbs", category: "Future (aller + infinitive)", textColor: "#ffffff", bg: "#1e40af", pool: ["je vais aller", "je vais faire", "je vais manger", "je vais partir", "je vais voir", "on va visiter", "nous allons voyager", "il va changer", "elle va finir"] },
    { super: "Conjugated Verbs", category: "Modal Expressions", textColor: "#1e293b", bg: "#dbeafe", pool: ["on doit", "on devrait", "il faut", "on ne doit pas", "on ne peut pas", "il ne faut pas", "je dois"] },

    // ── TYPES OF VERBS ───────────────────────────────────────────────────
    { super: "Types of Verbs", category: "Infinitives (-er)", textColor: "#ffffff", bg: "#3b82f6", pool: ["aider", "aimer", "chanter", "danser", "écouter", "jouer", "manger", "parler", "regarder", "travailler", "voyager", "améliorer", "changer", "chercher", "commencer", "décider", "demander", "donner", "essayer", "expliquer", "gagner", "habiter", "inviter", "organiser", "partager", "protéger", "recycler", "rester", "utiliser", "visiter", "voter"] },
    { super: "Types of Verbs", category: "Infinitives (-ir / -re)", textColor: "#ffffff", bg: "#ef4444", pool: ["choisir", "finir", "grandir", "partir", "réussir", "sortir", "attendre", "comprendre", "entendre", "perdre", "prendre", "répondre", "vendre"] },
    { super: "Types of Verbs", category: "Reflexive Verbs", textColor: "#ffffff", bg: "#6b21a8", pool: ["s'appeler", "se brosser", "se coucher", "se doucher", "se laver", "se lever", "se maquiller", "se préparer", "se relaxer", "se reposer", "s'habiller"] },
    { super: "Types of Verbs", category: "Past Participles (-é)", textColor: "#1a1a1a", bg: "#fbbf24", pool: ["acheté", "aidé", "aimé", "arrivé", "chanté", "demandé", "donné", "écouté", "joué", "mangé", "parlé", "préparé", "regardé", "resté", "travaillé", "trouvé", "visité", "voyagé"] },
    { super: "Types of Verbs", category: "Irregular Past Participles", textColor: "#ffffff", bg: "#7c3aed", pool: ["bu", "compris", "connu", "dit", "écrit", "été", "eu", "fait", "lu", "mis", "mort", "né", "ouvert", "pris", "pu", "reçu", "su", "vu", "voulu"] },

    // ── GRAMMAR & STRUCTURE ──────────────────────────────────────────────
    { super: "Grammar & Structure", category: "Negative Words", color: "", textColor: "#ffffff", bg: "#475569", pool: ["jamais", "pas", "personne", "plus", "que", "rien", "ni", "aucun"] },
    { super: "Grammar & Structure", category: "Interrogatives", color: "", textColor: "#ffffff", bg: "#64748b", pool: ["combien", "comment", "où", "pourquoi", "quand", "que", "quel", "qui", "quoi"] },
    { super: "Grammar & Structure", category: "Conjunctions", color: "", textColor: "#1e293b", bg: "#94a3b8", pool: ["car", "cependant", "comme", "donc", "et", "mais", "ou", "parce que", "pourtant", "puisque", "que", "si", "quand"] },
    { super: "Grammar & Structure", category: "Prepositions", color: "", textColor: "#1e293b", bg: "#cbd5e1", pool: ["à", "après", "avant", "avec", "chez", "contre", "dans", "de", "derrière", "devant", "entre", "malgré", "par", "pendant", "pour", "près", "sans", "selon", "sous", "sur", "vers"] },

    // ── IDENTITY & DESCRIPTIONS ──────────────────────────────────────────
    { super: "Identity & Descriptions", category: "Character Adjectives", textColor: "#ffffff", bg: "#be185d", pool: ["bavard", "calme", "fier", "fort", "gentil", "intelligent", "méchant", "paresseux", "sérieux", "seul", "strict", "timide", "travailleur"] },
    { super: "Identity & Descriptions", category: "Appearance Adjectives", textColor: "#ffffff", bg: "#db2777", pool: ["beau", "belle", "blond", "brun", "court", "grand", "jeune", "joli", "petit", "vieux", "vieille"] },
    { super: "Identity & Descriptions", category: "Colours", textColor: "#ffffff", bg: "#ec4899", pool: ["blanc", "blanche", "bleu", "gris", "jaune", "marron", "noir", "orange", "rose", "rouge", "vert", "violet"] },
    { super: "Identity & Descriptions", category: "Nationality Adjectives", textColor: "#1e293b", bg: "#f472b6", pool: ["allemand", "américain", "anglais", "belge", "britannique", "canadien", "chinois", "espagnol", "français", "irlandais", "marocain", "suisse"] },
    { super: "Identity & Descriptions", category: "Feeling Adjectives", textColor: "#1e293b", bg: "#f9a8d4", pool: ["content", "désolé", "fatigué", "heureux", "inquiet", "malheureux", "surpris", "triste", "stressé"] },
    { super: "Identity & Descriptions", category: "Opinion Adjectives", textColor: "#1e293b", bg: "#fbcfe8", pool: ["affreux", "agréable", "amusant", "drôle", "embêtant", "ennuyeux", "extraordinaire", "fantastique", "formidable", "génial", "intéressant", "passionnant", "sympa", "terrible"] },
    { super: "Identity & Descriptions", category: "Family Members", textColor: "#ffffff", bg: "#be185d", pool: ["beau-père", "belle-mère", "cousin", "cousine", "frère", "sœur", "oncle", "tante", "mari", "femme", "père", "mère", "fils", "fille", "grands-parents"] },
    { super: "Identity & Descriptions", category: "Relationships & People", textColor: "#ffffff", bg: "#db2777", pool: ["ami", "amour", "copain", "copine", "couple", "enfant", "garçon", "homme", "mariage", "partenaire", "sentiment"] },
    { super: "Identity & Descriptions", category: "Clothes", textColor: "#ffffff", bg: "#ec4899", pool: ["chapeau", "chaussette", "cravate", "jean", "jupe", "manteau", "pantalon", "veste", "vêtement"] },

    // ── LIFESTYLE & HEALTH ───────────────────────────────────────────────
    { super: "Lifestyle & Health", category: "Food", textColor: "#ffffff", bg: "#c2410c", pool: ["fromage", "fruit", "gâteau", "légume", "nourriture", "pain", "poisson", "poulet", "salade", "viande"] },
    { super: "Lifestyle & Health", category: "Drinks", textColor: "#ffffff", bg: "#ea580c", pool: ["alcool", "boisson", "café", "eau", "jus", "lait", "thé", "vin"] },
    { super: "Lifestyle & Health", category: "Meals & Eating Out", textColor: "#ffffff", bg: "#f97316", pool: ["addition", "café", "déjeuner", "dîner", "fast-food", "petit-déjeuner", "recette", "repas", "restaurant", "serveur"] },
    { super: "Lifestyle & Health", category: "Health & Body", textColor: "#1e293b", bg: "#fb923c", pool: ["bras", "bouche", "corps", "dos", "jambe", "main", "nez", "oreille", "pied", "tête", "cœur"] },
    { super: "Lifestyle & Health", category: "Healthy Lifestyle", textColor: "#ffffff", bg: "#f97316", pool: ["énergie", "exercice", "forme", "habitude", "régime", "soin", "sport"] },
    { super: "Lifestyle & Health", category: "Health & Illness", textColor: "#1e293b", bg: "#fdba74", pool: ["accident", "cigarette", "danger", "drogue", "maladie", "médicament", "santé", "tabac", "urgence"] },

    // ── MEDIA, LEISURE & SPORT ───────────────────────────────────────────
    { super: "Media, Leisure & Sport", category: "Technology & Devices", textColor: "#ffffff", bg: "#7e22ce", pool: ["appareil", "écran", "ordinateur", "portable", "téléphone", "blog", "internet", "réseau", "selfie", "site", "SMS", "streaming"] },
    { super: "Media, Leisure & Sport", category: "Media Nouns", textColor: "#ffffff", bg: "#9333ea", pool: ["dessin animé", "documentaire", "émission", "film", "journal", "magazine", "publicité", "radio", "série", "télévision"] },
    { super: "Media, Leisure & Sport", category: "Celebrity & Culture", textColor: "#ffffff", bg: "#a855f7", pool: ["acteur", "artiste", "auteur", "célébrité", "concert", "groupe", "influenceur", "star", "succès", "talent"] },
    { super: "Media, Leisure & Sport", category: "Sports", textColor: "#ffffff", bg: "#a855f7", pool: ["athlétisme", "basket", "football", "gymnastique", "rugby", "ski", "tennis", "natation", "vélo"] },
    { super: "Media, Leisure & Sport", category: "Music & Performance", textColor: "#ffffff", bg: "#9333ea", pool: ["chanson", "musique", "paroles", "spectacle", "théâtre", "voix"] },
    { super: "Media, Leisure & Sport", category: "Hobbies & Free Time", textColor: "#ffffff", bg: "#7e22ce", pool: ["activité", "après-midi", "défi", "festival", "jeu", "lecture", "loisir", "match", "passe-temps", "promenade", "soirée", "week-end"] },

    // ── SCHOOL, JOBS & FUTURE ────────────────────────────────────────────
    { super: "School, Jobs & Future", category: "School Subjects", textColor: "#ffffff", bg: "#4338ca", pool: ["anglais", "français", "espagnol", "allemand", "histoire", "géographie", "informatique", "maths", "musique", "sciences", "technologie"] },
    { super: "School, Jobs & Future", category: "School Places & Objects", textColor: "#ffffff", bg: "#4f46e5", pool: ["bibliothèque", "bureau", "cahier", "classe", "cour", "dictionnaire", "école", "lycée", "sac", "stylo", "tableau", "uniforme"] },
    { super: "School, Jobs & Future", category: "Jobs & Professions", textColor: "#ffffff", bg: "#6366f1", pool: ["avocat", "chanteur", "coiffeur", "cuisinier", "dentiste", "infirmier", "ingénieur", "journaliste", "médecin", "policier", "vétérinaire"] },
    { super: "School, Jobs & Future", category: "Work & Future Plans", textColor: "#1e293b", bg: "#818cf8", pool: ["apprentissage", "carrière", "emploi", "entretien", "métier", "salaire", "travail", "université"] },

    // ── TRAVEL, TOWN & ENVIRONMENT ───────────────────────────────────────
    { super: "Travel, Town & Environment", category: "Places in Town", textColor: "#ffffff", bg: "#15803d", pool: ["banque", "bibliothèque", "boulangerie", "cinéma", "gare", "hôpital", "hôtel", "marché", "musée", "parc", "pharmacie", "piscine", "restaurant", "stade", "supermarché", "théâtre"] },
    { super: "Travel, Town & Environment", category: "Parts of the House", textColor: "#1e293b", bg: "#4ade80", pool: ["appartement", "chambre", "cuisine", "fenêtre", "jardin", "maison", "mur", "pièce", "porte", "salon", "salle de bain", "escalier"] },
    { super: "Travel, Town & Environment", category: "Transport", textColor: "#ffffff", bg: "#16a34a", pool: ["avion", "bateau", "bus", "métro", "taxi", "train", "vélo", "voiture"] },
    { super: "Travel, Town & Environment", category: "Travel & Tourism", textColor: "#ffffff", bg: "#16a34a", pool: ["aéroport", "bagage", "billet", "frontière", "logement", "passeport", "séjour", "vacances", "valise", "vol", "voyage"] },
    { super: "Travel, Town & Environment", category: "Francophone Countries", textColor: "#ffffff", bg: "#15803d", pool: ["Belgique", "Canada", "Côte d'Ivoire", "France", "Maroc", "Québec", "Réunion", "Sénégal", "Suisse", "Tunisie"] },
    { super: "Travel, Town & Environment", category: "Environment", textColor: "#1e293b", bg: "#22c55e", pool: ["arbre", "climat", "déchets", "environnement", "planète", "plastique", "pollution", "recyclage", "réchauffement", "terre"] },
    { super: "Travel, Town & Environment", category: "Global Issues", textColor: "#ffffff", bg: "#15803d", pool: ["chômage", "crime", "faim", "guerre", "immigration", "pauvreté", "racisme", "violence"] },
    { super: "Travel, Town & Environment", category: "Geography & Landscape", textColor: "#ffffff", bg: "#16a34a", pool: ["campagne", "côte", "forêt", "île", "lac", "mer", "montagne", "océan", "paysage", "rivière"] },
    { super: "Travel, Town & Environment", category: "Government & Society", textColor: "#ffffff", bg: "#15803d", pool: ["démocratie", "élection", "gouvernement", "impôt", "loi", "parlement", "politique", "président", "république", "vote"] },

    // ── TIME, WEATHER & NUMBERS ──────────────────────────────────────────
    { super: "Time, Weather & Numbers", category: "Seasons", textColor: "#1e293b", bg: "#fde047", pool: ["automne", "été", "hiver", "printemps", "saison"] },
    { super: "Time, Weather & Numbers", category: "Adverbs of Time", textColor: "#ffffff", bg: "#ca8a04", pool: ["aujourd'hui", "bientôt", "déjà", "encore", "enfin", "maintenant", "parfois", "rarement", "souvent", "tard", "tôt", "toujours"] },
    { super: "Time, Weather & Numbers", category: "Months", textColor: "#1e293b", bg: "#facc15", pool: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"] },
    { super: "Time, Weather & Numbers", category: "Days of the Week", textColor: "#1e293b", bg: "#fde047", pool: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"] },
    { super: "Time, Weather & Numbers", category: "Weather", textColor: "#1e293b", bg: "#eab308", pool: ["brouillard", "chaud", "froid", "neige", "pluie", "soleil", "vent"] },
    { super: "Time, Weather & Numbers", category: "Numbers (1–20)", textColor: "#1e293b", bg: "#fef08a", pool: ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt"] },

    // ── CUSTOMS, CELEBRATIONS & FAITH ───────────────────────────────────
    { super: "Customs, Celebrations & Faith", category: "Celebrations & Festivals", textColor: "#ffffff", bg: "#86198f", pool: ["Aïd", "anniversaire", "carnaval", "défilé", "fête", "feu d'artifice", "Noël", "PACS", "Pâques", "Saint Valentin"] },
    { super: "Customs, Celebrations & Faith", category: "Faith & Religion", textColor: "#ffffff", bg: "#9333ea", pool: ["bouddhiste", "catholique", "chrétien", "église", "foi", "juif", "mosquée", "musulman", "religion", "synagogue", "temple"] },
];
