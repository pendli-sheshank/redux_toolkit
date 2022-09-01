import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovieShowDetails,
  getAllMovieShowsDetails,
  removeDetails,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";
const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllMovieShowsDetails);
  useEffect(() => {
    console.log("Detaisl", data);
    dispatch(fetchMovieShowDetails(imdbID));
    return () => {
      dispatch(removeDetails());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={data.Poster} alt={data.Title} />
        <div className="card-topp">
          <h1>{data.Title}</h1>
          <p>{data.Released}</p>
          <p>{data.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
