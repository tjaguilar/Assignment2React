
import React, { useEffect, useState } from 'react'; // Imports state and side-effect hooks from React.
import SearchBar from './components/SearchBar.jsx'; // Imports the controlled search field.
import GameList from './components/GameList.jsx'; // Imports the component that renders game cards.
import About from './components/About.jsx'; // Imports the problem statement section.


export default function App() { // Defines and exports the parent component for the whole app.
  const [games, setGames] = useState([]); // Holds the game records returned by the API.
  const [search, setSearch] = useState(''); // Holds the text typed into the search box.
  const [loading, setLoading] = useState(true); // Tracks whether the API request is still running.
  const [error, setError] = useState(''); // Holds a visible error message if the request fails.


  useEffect(() => { // Starts a side effect when App first mounts.
    const controller = new AbortController(); // Lets React cancel the request if App unmounts.

    async function getGames() { // Defines an asynchronous function that fetches game records.
      try { // Begins the block for the request that may succeed or fail.
        setLoading(true); // Shows the loading state before the request starts.
        setError(''); // Clears an earlier error before trying to load data again.
        const response = await fetch('https://www.freetogame.com/api/games', { signal: controller.signal }); // Requests real PC game records and allows cancellation.
        if (!response.ok) { // Checks whether the server returned an HTTP error status.
          throw new Error(`API request failed with status ${response.status}`); // Converts a failed HTTP response into an error for catch.
        } // Ends the HTTP status check.
        const gameData = await response.json(); // Parses the API response body as JSON.
        setGames(Array.isArray(gameData) ? gameData : []); // Saves valid game records, or an empty list if the API response is not an array.
      } catch (requestError) { // Handles network, API, and parsing errors.
        if (requestError.name !== 'AbortError') { // Avoids showing an error for a request cancelled during cleanup.
          setError('We could not load games right now. Please refresh the page to try again.'); // Gives the user a readable error.
        } // Ends the cancellation check.
      } finally { // Runs after success or failure so the loading state always ends.
        setLoading(false); // Hides the loading message when the request finishes.
      } // Ends the finally block.
    } // Ends the getGames function.


    getGames(); // Starts fetching game data when the component mounts.
    return () => controller.abort(); // Cancels the fetch if the component is removed.
  }, []); // The empty dependency array makes this effect run on mount, not each render.


  const filteredGames = games.filter((game) => { // Builds a new array of games matching the search text.
    const gameTitle = game.title ?? ''; // Uses the title or an empty string if the API record lacks one.
    return gameTitle.toLowerCase().includes(search.trim().toLowerCase()); // Checks the title without case sensitivity or extra spaces.
  }); // Ends the filter callback and filtering operation.


  return ( // Begins the JSX that describes the page UI.
    <div className="app-shell"> {/* Wraps the page so CSS can control its overall layout. */}
      <header className="site-header"> {/* Creates the semantic site header. */}
        <a className="brand" href="#top" aria-label="Game Explorer home"> {/* Brand link returns the user to the page top. */}
          <span className="brand-mark" aria-hidden="true">G</span> {/* Decorative logo mark that screen readers can ignore. */}
          <span>Game Explorer</span> {/* Displays the application name. */}
        </a> {/* Ends the brand link. */}
        <span className="header-tagline">Find something new to play</span> {/* Shows a short site tagline. */}
      </header> {/* Ends the header. */}


      <main id="top" className="main-content"> {/* Defines the main content and top anchor. */}
        <section className="intro-section" aria-labelledby="main-title"> {/* Groups the introductory content under its heading. */}
          <p className="eyebrow">FREE-TO-PLAY PC GAMES</p> {/* Displays a small category label. */}
          <h1 id="main-title">Discover your next game.</h1> {/* Provides the single main page heading. */}
          <p className="intro-copy">Browse a catalog of free games and search for something that matches your interests.</p> {/* Explains the purpose of the app. */}
        </section> {/* Ends the introduction. */}


        <section className="catalog-section" aria-labelledby="catalog-title"> {/* Groups the search and game results. */}
          <div className="catalog-heading"> {/* Creates a flexible row for catalog title and result count. */}
            <h2 id="catalog-title">Game catalog</h2> {/* Labels the game collection. */}
            {!loading && !error && <span className="result-count">{filteredGames.length} games</span>} {/* Shows the number of matching games when data is ready. */}
          </div> {/* Ends the catalog heading row. */}
          <SearchBar search={search} onSearch={setSearch} /> {/* Sends search text and its state setter to the child component. */}
          {loading && <p className="status-message" role="status">Loading games...</p>} {/* Shows feedback while the API request is running. */}
          {error && <p className="status-message error-message" role="alert">{error}</p>} {/* Shows an error only if the request failed. */}
          {!loading && !error && <GameList games={filteredGames} />} {/* Shows game cards after a successful load. */}
        </section> {/* Ends the catalog section. */}
        <About /> {/* Displays the assignment's written problem statement in the app. */}
      </main> {/* Ends the main content. */}


      <footer className="site-footer"> {/* Creates the semantic footer. */}
        <p>Game data provided by <a href="https://www.freetogame.com/" target="_blank" rel="noreferrer">FreeToGame</a>.</p> {/* Credits the API data source. */}
      </footer> {/* Ends the footer. */}
    </div> 
  );
}
