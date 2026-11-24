export default function SearchBar({ search, onSearch }) { // Defines a reusable search component that receives its current value and setter as props.
  return ( // Starts the component's JSX output.
    <form className="search-form" role="search" onSubmit={(event) => event.preventDefault()}> {/* Uses a semantic search form and prevents page reload on Enter. */}
      <label className="search-label" htmlFor="game-search">Search games</label> {/* Labels the input for accessibility. */}
      <div className="search-input-wrap"> {/* Wraps the icon and text input for styling. */}
        <span className="search-icon" aria-hidden="true">⌕</span> {/* Decorative search symbol hidden from screen readers. */}
        <input id="game-search" type="search" placeholder="Type a game title..." value={search} onChange={(event) => onSearch(event.target.value)} /> {/* Controlled input whose value is React state and whose change event updates that state. */}
      </div> {/* Ends the input wrapper. */}
    </form> 
  );
}
