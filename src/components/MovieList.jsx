import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList({ movies, isOpen, setIsOpen }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <ul className="list">
          {movies?.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
}
