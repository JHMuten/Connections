// UI management and interactions
const ui = {
    // DOM element references
    grid: document.getElementById('game-grid'),
    solvedArea: document.getElementById('solved-area'),
    messageBox: document.getElementById('message-box'),
    btnSubmit: document.getElementById('btn-submit'),
    btnHint: document.getElementById('btn-hint'),
    btnAnswers: document.getElementById('btn-answers'),
    btnNew: document.getElementById('btn-new'),
    btnSettings: document.getElementById('btn-settings'),
    modalSettings: document.getElementById('modal-settings'),
    settingsGroupedList: document.getElementById('settings-grouped-list'),
    
    messageTimer: null,

    showMessage(text, color) {
        if (this.messageTimer) clearTimeout(this.messageTimer);
        this.messageBox.innerText = text;
        this.messageBox.style.color = color;
        this.messageBox.classList.remove('hide');
        this.messageTimer = setTimeout(() => {
            this.messageBox.classList.add('hide');
            setTimeout(() => { 
                if (this.messageBox.classList.contains('hide')) this.messageBox.innerText = ''; 
            }, 400);
        }, 9000);
    },

    updateSubmitButton(enabled) {
        this.btnSubmit.disabled = !enabled;
    },

    clearGrid() {
        this.grid.innerHTML = '';
    },

    clearSolvedArea() {
        this.solvedArea.innerHTML = '';
    },

    clearMessage() {
        this.messageBox.innerText = '';
    },

    createWordCard(word, onToggle) {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.innerText = word;
        card.onclick = () => onToggle(card, word);
        return card;
    },

    addWordCard(card) {
        this.grid.appendChild(card);
    },

    removeWordCards(words) {
        document.querySelectorAll('.word-card').forEach(c => {
            if (words.includes(c.innerText)) c.remove();
        });
    },

    deselectAllCards() {
        document.querySelectorAll('.word-card').forEach(c => {
            c.classList.remove('selected');
            c.style.background = '';
            c.style.color = '';
        });
    },

    addSolvedRow(category, words, bg, textColor) {
        const row = document.createElement('div');
        row.className = 'solved-row';
        row.style.background = bg;
        row.style.color = textColor;
        row.innerHTML = `<div class="cat-label">${category}</div><div class="cat-words">${words.join(' · ')}</div>`;
        this.solvedArea.appendChild(row);
    },

    renderSettings(database, enabledCategories) {
        this.settingsGroupedList.innerHTML = '';
        const groups = [...new Set(database.map(v => v.super))];

        groups.forEach(groupName => {
            const items = database.filter(v => v.super === groupName);
            if (!items.length) return;

            const allChecked = items.every(i => enabledCategories.includes(i.category));
            const someChecked = items.some(i => enabledCategories.includes(i.category));

            const block = document.createElement('div');
            block.className = 'group-block';

            const header = document.createElement('div');
            header.className = 'group-header';
            header.innerHTML = `
                <div class="group-header-left">
                    <input type="checkbox" class="group-master-check" ${allChecked ? 'checked' : ''}>
                    <span class="group-name">${groupName}</span>
                    <span class="group-count">${items.length} cats</span>
                </div>
                <span class="group-toggle-icon">▾</span>
            `;

            const master = header.querySelector('.group-master-check');
            if (someChecked && !allChecked) master.indeterminate = true;

            const itemsDiv = document.createElement('div');
            itemsDiv.className = 'group-items';
            items.forEach(item => {
                const label = document.createElement('label');
                label.className = 'item-label';
                label.innerHTML = `<input type="checkbox" value="${item.category}" ${enabledCategories.includes(item.category) ? 'checked' : ''}> ${item.category}`;
                itemsDiv.appendChild(label);
            });

            header.onclick = (e) => {
                if (e.target === master || e.target.closest('.group-master-check') === master) return;
                header.classList.toggle('open');
                itemsDiv.classList.toggle('open');
            };

            master.onchange = (e) => {
                itemsDiv.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = e.target.checked);
            };

            block.appendChild(header);
            block.appendChild(itemsDiv);
            this.settingsGroupedList.appendChild(block);
        });
    },

    getCheckedCategories() {
        return [...this.settingsGroupedList.querySelectorAll('.item-label input[type="checkbox"]:checked')]
            .map(cb => cb.value);
    },

    showSettingsError() {
        const errEl = document.getElementById('settings-error');
        errEl.style.display = 'block';
        setTimeout(() => { errEl.style.display = 'none'; }, 4000);
    },

    hideSettingsError() {
        document.getElementById('settings-error').style.display = 'none';
    },

    openSettings() {
        this.modalSettings.classList.remove('hidden');
    },

    closeSettings() {
        this.modalSettings.classList.add('hidden');
    },

    selectAllCategories() {
        this.settingsGroupedList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true);
    },

    deselectAllCategories() {
        this.settingsGroupedList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    },

    updateLanguageUI(lang) {
        document.body.className = `lang-${lang}`;
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.lang === lang);
        });
        const titles = { 
            fr: 'French Connections', 
            es: 'Spanish Connections', 
            de: 'German Connections' 
        };
        document.getElementById('game-title').textContent = titles[lang];
        document.getElementById('game-subtitle').textContent = 'Create 4 groups of 4 related words.';
        document.getElementById('modal-title-text').textContent = 'Puzzle Settings';
    }
};
