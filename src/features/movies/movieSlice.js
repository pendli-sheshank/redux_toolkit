import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../common/apis/movieApi";
import { apiKey } from "../../common/apis/MovieApiKey";

export const fetchMyMovies = createAsyncThunk(
  "movies/fetchMyMovies",
  async () => {
    const MovieSearch = "Harry";

    const response = await API.get(
      `?apiKey=${apiKey}&s=${MovieSearch}&type=movie`
    );
    return response.data;
  }
);
export const fetchMovieShowDetails = createAsyncThunk(
  "movies/fetchMovieShowDetails",
  async (id) => {
    const MovieSearch = "Harry";

    const response = await API.get(`?apiKey=${apiKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

export const fetchMySeries = createAsyncThunk(
  "shows/fetchMySeries",
  async () => {
    const seriesSearch = "friends";

    const response = await API.get(
      `?apiKey=${apiKey}&s=${seriesSearch}&type=series`
    );
    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  movieShowDetails: {},
};

const createMovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchMyMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchMyMovies.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, movies: payload };
    },
    [fetchMySeries.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, shows: payload };
    },
    [fetchMovieShowDetails.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, movieShowDetails: payload };
    },
    [fetchMyMovies.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const { addMovies } = createMovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMovieShowsDetails = (state) => state.movies.movieShowDetails;
export default createMovieSlice.reducer;
