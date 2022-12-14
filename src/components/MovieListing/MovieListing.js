import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { useLocation } from "react-router-dom";

const MovieListing = () => {
  const location = useLocation();
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log("Location", location);
  console.log("Movies-->", movies.Search);
  console.log("Shows--->", shows.Search);
  let renderMovies = "";
  let renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      {location.pathname === "/movies" && (
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
      )}

      {location.pathname === "/shows" && (
        <div className="movie-list">
          <h2>Shows</h2>
          <div className="movie-container">{renderShows}</div>
        </div>
      )}
      {location.pathname === "/" && (
        <>
          <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">{renderMovies}</div>
          </div>
          <div className="movie-list">
            <h2>Shows</h2>
            <div className="movie-container">{renderShows}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieListing;
