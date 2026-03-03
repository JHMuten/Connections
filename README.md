# Language Connections Game

A web-based connections game for learning French, Spanish, and German vocabulary.

## Project Structure

```
/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All game styles
├── js/
│   ├── data/
│   │   ├── french.js       # French vocabulary database
│   │   ├── spanish.js      # Spanish vocabulary database
│   │   └── german.js       # German vocabulary database
│   ├── storage.js          # LocalStorage utilities
│   ├── ui.js               # UI management and DOM manipulation
│   └── game.js             # Core game logic and event handlers
└── connections.html        # Original single-file version (backup)
```

## Features

- Three language modes: French, Spanish, and German
- Customizable category selection
- Hint system
- Progress tracking
- Responsive design

## How to Play

1. Open `index.html` in a web browser
2. Select a language (French, Spanish, or German)
3. Find 4 groups of 4 related words
4. Click words to select them, then click Submit
5. Use hints if you get stuck

## Development

The game is built with vanilla JavaScript - no build tools required. Simply edit the files and refresh your browser.

### File Responsibilities

- **index.html**: Minimal HTML structure and script loading
- **css/styles.css**: All visual styling
- **js/data/*.js**: Vocabulary databases for each language
- **js/storage.js**: Browser storage management
- **js/ui.js**: DOM manipulation and UI updates
- **js/game.js**: Game state, logic, and event handling

### Adding New Vocabulary

Edit the appropriate database file in `js/data/` and add new category objects following this structure:

```javascript
{
    super: "Category Group",
    category: "Specific Category",
    textColor: "#ffffff",
    bg: "#2563eb",
    pool: ["word1", "word2", "word3", ...]
}
```

## Credits

Created by Bethlingual
