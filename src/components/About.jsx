export default function About() { // Defines a small component that explains the application's real-world problem.
  return ( // Starts the About component JSX.
    <section className="about-section" aria-labelledby="about-title"> {/* Uses a semantic section with an accessible heading reference. */}
      <p className="eyebrow">WHY GAME EXPLORER?</p> {/* Adds a small section label. */}
      <h2 id="about-title">Finding a game shouldn't take forever.</h2> {/* Gives the problem statement a clear heading. */}
      <p>Gamers can have a hard time discovering new games that fit their interests without searching several websites. Game Explorer brings free-to-play PC games into one searchable catalog, helping players find something new to try more quickly.</p> {/* States who the app helps, the problem, and why it matters. */}
    </section> // Ends the About component JSX.
  );
}
