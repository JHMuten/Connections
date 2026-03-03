// French vocabulary database
const frenchDatabase = [
    // ── CONJUGATED VERBS ─────────────────────────────────────────────────
    { super: "Conjugated Verbs", category: "Parts of 'avoir'", color: "bg-blue-600", textColor: "#ffffff", bg: "#2563eb", pool: ["j'ai", "tu as", "il a", "elle a", "on a", "nous avons", "vous avez", "ils ont", "elles ont"] },
    { super: "Conjugated Verbs", category: "Parts of 'être'", color: "", textColor: "#1a1a1a", bg: "#fde68a", pool: ["je suis", "tu es", "il est", "elle est", "on est", "nous sommes", "vous êtes", "ils sont", "elles sont"] },
    { super: "Conjugated Verbs", category: "Parts of 'aller'", color: "", textColor: "#ffffff", bg: "#a78bfa", pool: ["je vais", "tu vas", "il va", "elle va", "on va", "nous allons", "vous allez", "ils vont", "elles vont"] },
    { super: "Conjugated Verbs", category: "Parts of 'faire'", color: "", textColor: "#ffffff", bg: "#f97316", pool: ["je fais", "tu fais", "il fait", "elle fait", "on fait", "nous faisons", "vous faites", "ils font", "elles font"] },
    { super: "Conjugated Verbs", category: "Parts of 'pouvoir'", color: "", textColor: "#ffffff", bg: "#0d9488", pool: ["je peux", "tu peux", "il peut", "elle peut", "on peut", "nous pouvons", "vous pouvez", "ils peuvent", "elles peuvent"] },
    { super: "Conjugated Verbs", category: "Parts of 'vouloir'", color: "", textColor: "#ffffff", bg: "#d97706", pool: ["je veux", "tu veux", "il veut", "elle veut", "on veut", "nous voulons", "vous voulez", "ils veulent", "je voudrais"] },
    { super: "Conjugated Verbs", category: "Future (aller + infinitive)", color: "", textColor: "#ffffff", bg: "#1d4ed8", pool: ["je vais aller", "je vais faire", "je vais manger", "je vais partir", "je vais voir", "on va visiter", "nous allons voyager", "il va changer", "elle va finir"] },
    { super: "Conjugated Verbs", category: "Modal Expressions", color: "", textColor: "#1a1a1a", bg: "#bbf7d0", pool: ["on doit", "on devrait", "il faut", "on ne doit pas", "on ne peut pas", "il ne faut pas", "je dois"] },

    // ── TYPES OF VERBS ───────────────────────────────────────────────────
    { super: "Types of Verbs", category: "Infinitives (-er)", color: "", textColor: "#ffffff", bg: "#3b82f6", pool: ["aider", "aimer", "chanter", "danser", "écouter", "jouer", "manger", "parler", "regarder", "travailler", "voyager", "améliorer", "changer", "chercher", "commencer", "décider", "demander", "donner", "essayer", "expliquer", "gagner", "habiter", "inviter", "organiser", "partager", "protéger", "recycler", "rester", "utiliser", "visiter", "voter"] },
    { super: "Types of Verbs", category: "Infinitives (-ir / -re)", color: "", textColor: "#ffffff", bg: "#ef4444", pool: ["choisir", "finir", "grandir", "partir", "réussir", "sortir", "attendre", "comprendre", "entendre", "perdre", "prendre", "répondre", "vendre"] },
    { super: "Types of Verbs", category: "Reflexive Verbs", color: "", textColor: "#ffffff", bg: "#6366f1", pool: ["s'appeler", "se brosser", "se coucher", "se doucher", "se laver", "se lever", "se maquiller", "se préparer", "se relaxer", "se reposer", "s'habiller"] },
    { super: "Types of Verbs", category: "Past Participles (-é)", color: "", textColor: "#1a1a1a", bg: "#fbbf24", pool: ["acheté", "aidé", "aimé", "arrivé", "chanté", "demandé", "donné", "écouté", "joué", "mangé", "parlé", "préparé", "regardé", "resté", "travaillé", "trouvé", "visité", "voyagé"] },
    { super: "Types of Verbs", category: "Irregular Past Participles", color: "", textColor: "#ffffff", bg: "#f59e0b", pool: ["bu", "compris", "connu", "dit", "écrit", "été", "eu", "fait", "lu", "mis", "mort", "né", "ouvert", "pris", "pu", "reçu", "su", "vu", "voulu"] },

    // ── GRAMMAR & STRUCTURE ──────────────────────────────────────────────
    { super: "Grammar & Structure", category: "Negative Words", color: "", textColor: "#1a1a1a", bg: "#d1d5db", pool: ["jamais", "pas", "personne", "plus", "que", "rien", "ni", "aucun"] },
    { super: "Grammar & Structure", category: "Interrogatives", color: "", textColor: "#ffffff", bg: "#0891b2", pool: ["combien", "comment", "où", "pourquoi", "quand", "que", "quel", "qui", "quoi"] },
    { super: "Grammar & Structure", category: "Conjunctions", color: "", textColor: "#1a1a1a", bg: "#86efac", pool: ["car", "cependant", "comme", "donc", "et", "mais", "ou", "parce que", "pourtant", "puisque", "que", "si", "quand"] },
    { super: "Grammar & Structure", category: "Prepositions", color: "", textColor: "#ffffff", bg: "#6b7280", pool: ["à", "après", "avant", "avec", "chez", "contre", "dans", "de", "derrière", "devant", "entre", "malgré", "par", "pendant", "pour", "près", "sans", "selon", "sous", "sur", "vers"] },

    // ── IDENTITY & DESCRIPTIONS ──────────────────────────────────────────
    { super: "Identity & Descriptions", category: "Character Adjectives", color: "", textColor: "#ffffff", bg: "#7c3aed", pool: ["bavard", "calme", "fier", "fort", "gentil", "intelligent", "méchant", "paresseux", "sérieux", "seul", "strict", "timide", "travailleur"] },
    { super: "Identity & Descriptions", category: "Appearance Adjectives", color: "", textColor: "#1a1a1a", bg: "#5eead4", pool: ["beau", "belle", "blond", "brun", "court", "grand", "jeune", "joli", "petit", "vieux", "vieille"] },
    { super: "Identity & Descriptions", category: "Colours", color: "", textColor: "#1a1a1a", bg: "#fef9c3", pool: ["blanc", "blanche", "bleu", "gris", "jaune", "marron", "noir", "orange", "rose", "rouge", "vert", "violet"] },
    { super: "Identity & Descriptions", category: "Nationality Adjectives", color: "", textColor: "#1a1a1a", bg: "#d4d4d8", pool: ["allemand", "américain", "anglais", "belge", "britannique", "canadien", "chinois", "espagnol", "français", "irlandais", "marocain", "suisse"] },
    { super: "Identity & Descriptions", category: "Feeling Adjectives", color: "", textColor: "#ffffff", bg: "#fb7185", pool: ["content", "désolé", "fatigué", "heureux", "inquiet", "malheureux", "surpris", "triste", "stressé"] },
    { super: "Identity & Descriptions", category: "Opinion Adjectives", color: "", textColor: "#ffffff", bg: "#c026d3", pool: ["affreux", "agréable", "amusant", "drôle", "embêtant", "ennuyeux", "extraordinaire", "fantastique", "formidable", "génial", "intéressant", "passionnant", "sympa", "terrible"] },
    { super: "Identity & Descriptions", category: "Family Members", color: "", textColor: "#1a1a1a", bg: "#6ee7b7", pool: ["beau-père", "belle-mère", "cousin", "cousine", "frère", "sœur", "oncle", "tante", "mari", "femme", "père", "mère", "fils", "fille", "grands-parents"] },
    { super: "Identity & Descriptions", category: "Relationships & People", color: "", textColor: "#ffffff", bg: "#14b8a6", pool: ["ami", "amour", "copain", "copine", "couple", "enfant", "garçon", "homme", "mariage", "partenaire", "sentiment"] },
    { super: "Identity & Descriptions", category: "Clothes", color: "", textColor: "#ffffff", bg: "#f97316", pool: ["chapeau", "chaussette", "cravate", "jean", "jupe", "manteau", "pantalon", "veste", "vêtement"] },

    // ── LIFESTYLE & HEALTH ───────────────────────────────────────────────
    { super: "Lifestyle & Health", category: "Food", color: "", textColor: "#ffffff", bg: "#dc2626", pool: ["fromage", "fruit", "gâteau", "légume", "nourriture", "pain", "poisson", "poulet", "salade", "viande"] },
    { super: "Lifestyle & Health", category: "Drinks", color: "", textColor: "#ffffff", bg: "#b91c1c", pool: ["alcool", "boisson", "café", "eau", "jus", "lait", "thé", "vin"] },
    { super: "Lifestyle & Health", category: "Meals & Eating Out", color: "", textColor: "#1a1a1a", bg: "#fb923c", pool: ["addition", "café", "déjeuner", "dîner", "fast-food", "petit-déjeuner", "recette", "repas", "restaurant", "serveur"] },
    { super: "Lifestyle & Health", category: "Health & Body", color: "", textColor: "#1a1a1a", bg: "#fecdd3", pool: ["bras", "bouche", "corps", "dos", "jambe", "main", "nez", "oreille", "pied", "tête", "cœur"] },
    { super: "Lifestyle & Health", category: "Healthy Lifestyle", color: "", textColor: "#1a1a1a", bg: "#bef264", pool: ["énergie", "exercice", "forme", "habitude", "régime", "soin", "sport"] },
    { super: "Lifestyle & Health", category: "Health & Illness", color: "", textColor: "#1a1a1a", bg: "#fbcfe8", pool: ["accident", "cigarette", "danger", "drogue", "maladie", "médicament", "santé", "tabac", "urgence"] },

    // ── MEDIA, LEISURE & SPORT ───────────────────────────────────────────
    { super: "Media, Leisure & Sport", category: "Technology & Devices", color: "", textColor: "#ffffff", bg: "#06b6d4", pool: ["appareil", "écran", "ordinateur", "portable", "téléphone", "blog", "internet", "réseau", "selfie", "site", "SMS", "streaming"] },
    { super: "Media, Leisure & Sport", category: "Media Nouns", color: "", textColor: "#ffffff", bg: "#ec4899", pool: ["dessin animé", "documentaire", "émission", "film", "journal", "magazine", "publicité", "radio", "série", "télévision"] },
    { super: "Media, Leisure & Sport", category: "Celebrity & Culture", color: "", textColor: "#1a1a1a", bg: "#fde047", pool: ["acteur", "artiste", "auteur", "célébrité", "concert", "groupe", "influenceur", "star", "succès", "talent"] },
    { super: "Media, Leisure & Sport", category: "Sports", color: "", textColor: "#1a1a1a", bg: "#86efac", pool: ["athlétisme", "basket", "football", "gymnastique", "rugby", "ski", "tennis", "natation", "vélo"] },
    { super: "Media, Leisure & Sport", category: "Music & Performance", color: "", textColor: "#ffffff", bg: "#d946ef", pool: ["chanson", "musique", "paroles", "spectacle", "théâtre", "voix"] },
    { super: "Media, Leisure & Sport", category: "Hobbies & Free Time", color: "", textColor: "#ffffff", bg: "#0284c7", pool: ["activité", "après-midi", "défi", "festival", "jeu", "lecture", "loisir", "match", "passe-temps", "promenade", "soirée", "week-end"] },

    // ── SCHOOL, JOBS & FUTURE ────────────────────────────────────────────
    { super: "School, Jobs & Future", category: "School Subjects", color: "", textColor: "#ffffff", bg: "#7c3aed", pool: ["anglais", "français", "espagnol", "allemand", "histoire", "géographie", "informatique", "maths", "musique", "sciences", "technologie"] },
    { super: "School, Jobs & Future", category: "School Places & Objects", color: "", textColor: "#ffffff", bg: "#8b5cf6", pool: ["bibliothèque", "bureau", "cahier", "classe", "cour", "dictionnaire", "école", "lycée", "sac", "stylo", "tableau", "uniforme"] },
    { super: "School, Jobs & Future", category: "Jobs & Professions", color: "", textColor: "#ffffff", bg: "#38bdf8", pool: ["avocat", "chanteur", "coiffeur", "cuisinier", "dentiste", "infirmier", "ingénieur", "journaliste", "médecin", "policier", "vétérinaire"] },
    { super: "School, Jobs & Future", category: "Work & Future Plans", color: "", textColor: "#ffffff", bg: "#0284c7", pool: ["apprentissage", "carrière", "emploi", "entretien", "métier", "salaire", "travail", "université"] },

    // ── TRAVEL, TOWN & ENVIRONMENT ───────────────────────────────────────
    { super: "Travel, Town & Environment", category: "Places in Town", color: "", textColor: "#ffffff", bg: "#b45309", pool: ["banque", "bibliothèque", "boulangerie", "cinéma", "gare", "hôpital", "hôtel", "marché", "musée", "parc", "pharmacie", "piscine", "restaurant", "stade", "supermarché", "théâtre"] },
    { super: "Travel, Town & Environment", category: "Parts of the House", color: "", textColor: "#1a1a1a", bg: "#fbbf24", pool: ["appartement", "chambre", "cuisine", "fenêtre", "jardin", "maison", "mur", "pièce", "porte", "salon", "salle de bain", "escalier"] },
    { super: "Travel, Town & Environment", category: "Transport", color: "", textColor: "#ffffff", bg: "#475569", pool: ["avion", "bateau", "bus", "métro", "taxi", "train", "vélo", "voiture"] },
    { super: "Travel, Town & Environment", category: "Travel & Tourism", color: "", textColor: "#ffffff", bg: "#0ea5e9", pool: ["aéroport", "bagage", "billet", "frontière", "logement", "passeport", "séjour", "vacances", "valise", "vol", "voyage"] },
    { super: "Travel, Town & Environment", category: "Francophone Countries", color: "", textColor: "#ffffff", bg: "#0369a1", pool: ["Belgique", "Canada", "Côte d'Ivoire", "France", "Maroc", "Québec", "Réunion", "Sénégal", "Suisse", "Tunisie"] },
    { super: "Travel, Town & Environment", category: "Environment", color: "", textColor: "#ffffff", bg: "#65a30d", pool: ["arbre", "climat", "déchets", "environnement", "planète", "plastique", "pollution", "recyclage", "réchauffement", "terre"] },
    { super: "Travel, Town & Environment", category: "Global Issues", color: "", textColor: "#ffffff", bg: "#dc2626", pool: ["chômage", "crime", "faim", "guerre", "immigration", "pauvreté", "racisme", "violence"] },
    { super: "Travel, Town & Environment", category: "Geography & Landscape", color: "", textColor: "#ffffff", bg: "#16a34a", pool: ["campagne", "côte", "forêt", "île", "lac", "mer", "montagne", "océan", "paysage", "rivière"] },
    { super: "Travel, Town & Environment", category: "Government & Society", color: "", textColor: "#ffffff", bg: "#7f1d1d", pool: ["démocratie", "élection", "gouvernement", "impôt", "loi", "parlement", "politique", "président", "république", "vote"] },

    // ── TIME, WEATHER & NUMBERS ──────────────────────────────────────────
    { super: "Time, Weather & Numbers", category: "Seasons", color: "", textColor: "#1a1a1a", bg: "#fde68a", pool: ["automne", "été", "hiver", "printemps", "saison"] },
    { super: "Time, Weather & Numbers", category: "Adverbs of Time", color: "", textColor: "#1a1a1a", bg: "#fed7aa", pool: ["aujourd'hui", "bientôt", "déjà", "encore", "enfin", "maintenant", "parfois", "rarement", "souvent", "tard", "tôt", "toujours"] },
    { super: "Time, Weather & Numbers", category: "Months", color: "", textColor: "#1a1a1a", bg: "#c7d2fe", pool: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"] },
    { super: "Time, Weather & Numbers", category: "Days of the Week", color: "", textColor: "#1a1a1a", bg: "#d9f99d", pool: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"] },
    { super: "Time, Weather & Numbers", category: "Weather", color: "", textColor: "#1a1a1a", bg: "#bae6fd", pool: ["brouillard", "chaud", "froid", "neige", "pluie", "soleil", "vent"] },
    { super: "Time, Weather & Numbers", category: "Numbers (1–20)", color: "", textColor: "#1a1a1a", bg: "#ede9fe", pool: ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt"] },

    // ── CUSTOMS, CELEBRATIONS & FAITH ───────────────────────────────────
    { super: "Customs, Celebrations & Faith", category: "Celebrations & Festivals", color: "", textColor: "#ffffff", bg: "#f43f5e", pool: ["Aïd", "anniversaire", "carnaval", "défilé", "fête", "feu d'artifice", "Noël", "PACS", "Pâques", "Saint Valentin"] },
    { super: "Customs, Celebrations & Faith", category: "Faith & Religion", color: "", textColor: "#ffffff", bg: "#9333ea", pool: ["bouddhiste", "catholique", "chrétien", "église", "foi", "juif", "mosquée", "musulman", "religion", "synagogue", "temple"] },
];
