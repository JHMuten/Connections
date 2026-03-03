// Main game logic
const game = {
    currentLang: 'fr',
    currentDB: frenchDatabase,
    enabledCategoriesFr: frenchDatabase.map(v => v.category),
    enabledCategoriesEs: spanishDatabase.map(v => v.category),
    enabledCategoriesDe: germanDatabase.map(v => v.category),
    currentCategories: [],
    selectedWords: [],
    solvedCategories: [],
    hintIndex: 0,

    getRandom(arr, n) {
        return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
    },

    getEnabledCategories() {
        if (this.currentLang === 'fr') return this.enabledCategoriesFr;
        if (this.currentLang === 'es') return this.enabledCategoriesEs;
        return this.enabledCategoriesDe;
    },

    setEnabledCategories(arr) {
        if (this.currentLang === 'fr') this.enabledCategoriesFr = arr;
        else if (this.currentLang === 'es') this.enabledCategoriesEs = arr;
        else this.enabledCategoriesDe = arr;
    },

    initGame() {
        const pool = this.currentDB.filter(v => this.getEnabledCategories().includes(v.category));
        if (pool.length < 4) {
            ui.showMessage("Please select at least 4 categories in settings.", "#dc2626");
            return;
        }

        ui.clearSolvedArea();
        ui.clearGrid();
        ui.clearMessage();
        this.selectedWords = [];
        this.solvedCategories = [];
        this.hintIndex = 0;

        // Build super-group map for diversity selection
        const bySuper = {};
        pool.forEach(v => { 
            if (!bySuper[v.super]) bySuper[v.super] = []; 
            bySuper[v.super].push(v); 
        });
        const superKeys = Object.keys(bySuper);

        // Pick 4 categories with diversity and no word overlap
        let roots = null;
        for (let attempt = 0; attempt < 200; attempt++) {
            let candidates;
            if (superKeys.length >= 4) {
                const shuffledSupers = [...superKeys].sort(() => 0.5 - Math.random()).slice(0, 4);
                candidates = shuffledSupers.map(s => this.getRandom(bySuper[s], 1)[0]);
            } else {
                candidates = this.getRandom(pool, 4);
            }
            const allPoolWords = candidates.flatMap(c => c.pool);
            const uniqueWords = new Set(allPoolWords);
            if (uniqueWords.size === allPoolWords.length) { 
                roots = candidates; 
                break; 
            }
        }

        // Fallback: pick any 4 non-overlapping categories
        if (!roots) {
            const shuffled = [...pool].sort(() => 0.5 - Math.random());
            roots = [];
            for (const cat of shuffled) {
                const soFar = roots.flatMap(c => c.pool);
                if (!cat.pool.some(w => soFar.includes(w))) roots.push(cat);
                if (roots.length === 4) break;
            }
        }

        this.currentCategories = roots.map(r => ({
            category: r.category,
            textColor: r.textColor,
            bg: r.bg,
            words: this.getRandom(r.pool, 4)
        }));

        const allWords = this.currentCategories.flatMap(c => c.words).sort(() => 0.5 - Math.random());
        allWords.forEach(word => {
            const card = ui.createWordCard(word, (card, word) => this.toggleCard(card, word));
            ui.addWordCard(card);
        });
        this.updateSubmit();
    },

    toggleCard(card, word) {
        if (card.classList.contains('selected')) {
            card.classList.remove('selected');
            card.style.background = '';
            card.style.color = '';
            this.selectedWords = this.selectedWords.filter(w => w !== word);
        } else if (this.selectedWords.length < 4) {
            card.classList.add('selected');
            this.selectedWords.push(word);
        }
        this.updateSubmit();
    },

    updateSubmit() {
        ui.updateSubmitButton(this.selectedWords.length === 4);
    },

    checkSelection() {
        if (this.selectedWords.length !== 4) return;
        
        const match = this.currentCategories.find(cat =>
            cat.words.every(w => this.selectedWords.includes(w)) && !this.solvedCategories.includes(cat)
        );
        
        if (match) {
            this.solveCategory(match);
            ui.showMessage("Excellent! Correct.", "#16a34a");
        } else {
            const oneAway = this.currentCategories.some(cat =>
                !this.solvedCategories.includes(cat) &&
                cat.words.filter(w => this.selectedWords.includes(w)).length === 3
            );
            const msg = oneAway ? "One away…!" : "Not quite. Try again!";
            ui.showMessage(msg, "#dc2626");
            ui.deselectAllCards();
            this.selectedWords = [];
            this.updateSubmit();
        }
    },

    solveCategory(cat) {
        this.solvedCategories.push(cat);
        this.hintIndex = 0;
        ui.removeWordCards(cat.words);
        ui.addSolvedRow(cat.category, cat.words, cat.bg, cat.textColor);
        this.selectedWords = [];
        this.updateSubmit();
        
        if (this.solvedCategories.length === 4) {
            const winColor = this.currentLang === 'fr' ? "#4361ee" : 
                            this.currentLang === 'es' ? "#f77f00" : "#dd0000";
            ui.showMessage("🎉 Well done! You found all the categories!", winColor);
        }
    },

    showHint() {
        const unsolved = this.currentCategories.filter(c => !this.solvedCategories.includes(c));
        if (unsolved.length) {
            const idx = this.hintIndex % unsolved.length;
            const hint = unsolved[idx].category;
            const hintNum = unsolved.length > 1 ? ` (${idx + 1} of ${unsolved.length})` : '';
            ui.showMessage(`💡 Hint${hintNum}: look for words in "${hint}"`, "#d97706");
            this.hintIndex++;
        }
    },

    showAllAnswers() {
        this.currentCategories.filter(c => !this.solvedCategories.includes(c))
            .forEach(cat => this.solveCategory(cat));
    },

    switchLanguage(lang) {
        this.currentLang = lang;
        this.currentDB = lang === 'fr' ? frenchDatabase : 
                        lang === 'es' ? spanishDatabase : germanDatabase;
        ui.updateLanguageUI(lang);
        this.initGame();
    },

    openSettings() {
        ui.renderSettings(this.currentDB, this.getEnabledCategories());
        ui.openSettings();
    },

    saveSettings() {
        const checked = ui.getCheckedCategories();
        if (checked.length < 4) {
            ui.showSettingsError();
            return;
        }
        ui.hideSettingsError();
        this.setEnabledCategories(checked);
        ui.closeSettings();
        this.initGame();
    }
};

// Event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.onclick = () => game.switchLanguage(btn.dataset.lang);
});

ui.btnSettings.onclick = () => game.openSettings();
document.getElementById('btn-close-settings').onclick = () => ui.closeSettings();
ui.modalSettings.onclick = (e) => { 
    if (e.target === ui.modalSettings) ui.closeSettings(); 
};

document.getElementById('btn-select-all').onclick = () => ui.selectAllCategories();
document.getElementById('btn-deselect-all').onclick = () => ui.deselectAllCategories();
document.getElementById('btn-save-settings').onclick = () => game.saveSettings();

ui.btnSubmit.onclick = () => game.checkSelection();
ui.btnHint.onclick = () => game.showHint();
ui.btnAnswers.onclick = () => game.showAllAnswers();
ui.btnNew.onclick = () => game.initGame();

// Initialize game on load
game.initGame();
