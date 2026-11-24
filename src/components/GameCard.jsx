export default function GameCard({ game }) { // Defines a reusable card component and receives one game record through props.
  return ( // Begins the card JSX.
    <article className="game-card"> {/* Uses article because each card is a self-contained game listing. */}
      <a className="game-image-link" href={game.game_url} target="_blank" rel="noreferrer" aria-label={`Visit ${game.title} page`}> {/* Makes the game thumbnail link to the game's page in a new tab. */}
        <img className="game-image" src={game.thumbnail} alt={`${game.title} game artwork`} loading="lazy" /> {/* Displays the API image and lazy-loads it as it approaches the viewport. */}
      </a> {/* Ends the image link. */}
      <div className="game-card-content"> {/* Groups the game details. */}
        <h3>{game.title}</h3> {/* Displays the game title. */}
        <div className="game-meta"> {/* Creates a row of small metadata labels. */}
          <span>{game.genre || 'Genre unavailable'}</span> {/* Displays the genre or a safe fallback. */}
          <span>{game.platform || 'Platform unavailable'}</span> {/* Displays the platform or a safe fallback. */}
        </div> {/* Ends the metadata row. */}
        <p className="game-description">{game.short_description || 'No description is available for this game.'}</p> {/* Displays the API description or a fallback message. */}
        <a className="game-link" href={game.game_url} target="_blank" rel="noreferrer">View game <span aria-hidden="true">↗</span></a> {/* Provides a clear link to the game's website. */}
      </div> {/* Ends the card content. */}
    </article>
  )
}
