import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import API from "../../common/apis/movieApi";
import { apiKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const MovieSearch = "Harry";
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await API.get(
      `?apiKey=${apiKey}&s=${MovieSearch}&type=movie`
    ).catch((err) => console.log(err));
    dispatch(addMovies(response.data));
  };

  useEffect(() => {
    fetchMovies();
  });

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
