import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMyMovies, fetchMySeries } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyMovies());
    dispatch(fetchMySeries());
  }, [dispatch]);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
