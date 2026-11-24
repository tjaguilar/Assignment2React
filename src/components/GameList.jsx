import GameCard from './GameCard.jsx'; // Imports the card component so each game can use the same layout.


export default function GameList({ games }) { // Defines the list component and receives filtered game records through props.
  if (games.length === 0) { // Checks whether the parent supplied any matching games.
    return <p className="status-message empty-message">No games match your search. Try a different title.</p>; // Shows the required empty-results message instead of an empty grid.
  } // Ends the empty-results check.

  return ( // Begins the populated list JSX.
    <div className="game-grid"> {/* Uses a CSS grid container to lay cards out responsively. */}
      {games.map((game) => ( // Loops over the matching games to create one card for each record.
        <GameCard key={game.id} game={game} /> // Creates a card component for each game, passing the game record as a prop.
      ))} 
    </div> 
  );
}
