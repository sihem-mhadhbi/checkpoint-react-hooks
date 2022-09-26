import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ movies }) => {
  return (
    <div
      className="movies-list"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movies.map((movies, i) => (
        <MovieCard key={i} movie={movies} />
      ))}
    </div>
  );
};

export default MovieList;
