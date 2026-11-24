# Game Explorer

A simple React app that fetches free-to-play PC games from the FreeToGame public API and lets users search by title.


## Requirements
- Node.js 18+ recommended
- npm

## Run locally
1. Open this folder in VS Code.
2. Open a terminal in this folder.
3. Install packages:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL Vite prints in the terminal.

## Build for deployment
```bash
npm run build
```

Vite creates the production build in the `dist` folder.

## API
The app requests PC game data from `https://www.freetogame.com/api/games?platform=pc`.
The app shows a loading state while the request is pending, an error message if it fails, and an empty-results message when the search has no matches.

- `App.jsx`: fetches data, owns React state, searches the list, and chooses loading/error/results UI.
- `SearchBar.jsx`: controlled search input; receives its value and change callback through props.
- `GameList.jsx`: displays the empty-result state or maps games into cards.
- `GameCard.jsx`: reusable game card component receiving one game record through props.
- `About.jsx`: displays the application problem statement.



## React Concepts Used

- `useState`: stores game data, search text, loading status, and error status.
- `useEffect`: fetches game data when `App` mounts. The empty dependency array means it is not rerun for each render.
- Props: data and callbacks are passed from parent components to children.
- Controlled input: the search field's `value` comes from state and `onChange` updates it.
- Conditional rendering: the app shows loading, error, game results, or an empty-search message.
# Assignment2React
