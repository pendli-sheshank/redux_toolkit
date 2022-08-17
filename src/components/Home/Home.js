import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import API from "../../common/apis/movieApi";
import { apiKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  const MovieSearch = "Harry";
  const fetchMovies = async () => {
    const response = await API.get(
      `?apiKey=${apiKey}&s=${MovieSearch}&type=movie`
    ).catch((err) => console.log(err));
    console.log(response);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
