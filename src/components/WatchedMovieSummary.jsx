import React from "react";
import WatchedMovieItem from "./WatchedMovieItem";

export default function WatchedMoviesSummary({
  watched,
  isOpen,
  setIsOpen,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <>
          <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>{avgImdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{avgUserRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{avgRuntime} min</span>
              </p>
            </div>
          </div>

          <ul className="list">
            {watched.map((movie) => (
              <WatchedMovieItem key={movie.imdbID} movie={movie} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
