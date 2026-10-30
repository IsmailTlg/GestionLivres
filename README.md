# GestionLivres 📚

A lightweight **Single Page Application (SPA)** for managing a personal book collection, built entirely client-side with modern JavaScript (ES6+). No backend: everything is stored in the browser with `localStorage`.

**Author:** Ismail El Harouachi

## 🔗 Links

- **Live demo (GitHub Pages):** https://ismailtlg.github.io/GestionLivres/
- **Kanban board (Jira):** [GestionLivres board](https://smailtlg69.atlassian.net/jira/software/projects/KAN/boards/1?filter=&groupBy=none&atlOrigin=eyJpIjoiYzBhNDk5NzhhNzQ0NGNkM2JkYzAxYWQyZjY5OTY5MDEiLCJwIjoiaiJ9)

## ✨ Features

- **Add a book** through a modal form (`<dialog>`) with client-side validation (title and author are required).
- **List all books** as cards, loaded automatically from `localStorage` on page load.
- **Search** books by title or author in real time while typing.
- **Delete a book** directly from its card.
- **Persistence**: the collection is saved in `localStorage` and restored when the app starts.

Each book contains:

| Field         | Type   | Required | Notes                              |
|---------------|--------|----------|------------------------------------|
| `title`       | string | ✅       |                                    |
| `author`      | string | ✅       |                                    |
| `year`        | number | ❌       | Publication year                   |
| `genre`       | string | ❌       |                                    |
| `description` | string | ❌       |                                    |
| `status`      | string | ✅       | `to-read`, `reading` or `read`     |

## 🛠️ Tech Stack

- **HTML5**: semantic structure, native `<dialog>` element
- **JavaScript ES6+**: arrow functions, template literals, array methods (`filter`), ES modules
- **Tailwind CSS v4**: utility-first styling with a custom theme (`daret-*` color palette)
- **localStorage**: data persistence with `JSON.stringify` / `JSON.parse`
- **Git & GitHub**: feature branches and Pull Requests
- **Jira**: Kanban board for task tracking
- **GitHub Pages**: deployment

## 🧱 Architecture

The code is split into ES modules, each with a single responsibility:

```
GestionLivres/
├── index.html          # Page structure, search bar, add-book dialog
├── input.css           # Tailwind source file + custom theme
├── output.css          # Compiled Tailwind CSS (loaded by index.html)
├── script.js           # Entry point: book card creation (UI) + add-book form logic
├── AfficherLivres.js   # Application state (books array) + rendering of the list
├── loadLivres.js       # Reads saved books from localStorage at startup
├── filtrerLivres.js    # Real-time search/filter logic
└── delete.js           # Delete logic using event delegation
```

| Module              | Responsibility                                                                 |
|---------------------|--------------------------------------------------------------------------------|
| `script.js`         | Builds each book card in the DOM, handles the dialog and form submission/validation, saves new books |
| `AfficherLivres.js` | Holds the books array and exposes `showLivres(list)` to render any list of cards |
| `loadLivres.js`     | Deserializes stored books from `localStorage` and rebuilds the cards           |
| `filtrerLivres.js`  | Filters cards by title or author on every keystroke in the search input        |
| `delete.js`         | Listens on the books container (event delegation) and removes the clicked book |

### Key concepts used

- **Event delegation**: a single click listener on `#livresArea` handles every card's delete button, including cards created dynamically.
- **Dynamic DOM creation**: cards are built with `createElement`, `appendChild` and `textContent`.
- **Persistence**: each book is stored as a JSON array under a `livre{n}` key, and a `total` key tracks the number of saved books.

## 🚀 Getting Started

### Run the app locally

ES modules require the files to be served over HTTP (opening `index.html` directly with `file://` will be blocked by the browser).

1. Clone the repository:
   ```bash
   git clone https://github.com/ismailtlg/GestionLivres.git
   cd GestionLivres
   ```
2. Start a local server, for example:
   - With the **Live Server** extension in VS Code (right-click `index.html` → *Open with Live Server*), or
   - With Python:
     ```bash
     python -m http.server 5500
     ```
3. Open `http://localhost:5500` in your browser.

### Rebuild the CSS (only if you edit the styles)

```bash
npm install tailwindcss @tailwindcss/cli
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

## 🤝 Workflow

- Feature branches (`feature/*`) merged through Pull Requests
- Task tracking on a Jira Kanban board (see link above)
- Deployed with GitHub Pages

## 📄 License

This project was developed as an individual learning project.
