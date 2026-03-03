// Storage utilities for managing enabled categories
const storage = {
    getEnabledCategories(lang) {
        const key = `enabledCategories_${lang}`;
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : null;
    },

    setEnabledCategories(lang, categories) {
        const key = `enabledCategories_${lang}`;
        localStorage.setItem(key, JSON.stringify(categories));
    }
};
