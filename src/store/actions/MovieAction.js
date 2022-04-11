import { SHOW_LIST, SHOW_DETAILS } from "../types.js";
import { GetMoviesList, GetMovieDetails } from "../../services/MovieService";

export const LoadMovieList = () => {
  return async (dispatch) => {
    try {
      const list = await GetMoviesList();
      dispatch({
        type: SHOW_LIST,
        payload: list,
      });
    } catch (error) {
      throw error;
    }
  };
};
export const LoadMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const getmovieDetails = await GetMovieDetails(id);
      console.log(getmovieDetails);
      dispatch({
        type: SHOW_DETAILS,
        payload: getmovieDetails,
      });
    } catch (error) {
      throw error;
    }
  };
};
// https://api.themoviedb.org/3/movie/550?api_key=a1a2a9631f04a7ac4fa07dedda3a5024
