import { GetPopMovies, GetMovieById } from '../../services/LocationService'

import { GET_POP_MOVIES, GET_MOVIE_DETAILS } from '../types'

export const LoadPopMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetPopMovies();
      // console.log('movieactions.js, loadpopmovies()', movies)
      dispatch({
        type: GET_POP_MOVIES,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}

export const GetMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const details = await GetMovieById(id);
      console.log('movieactions getdetails', details);
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: details
      })
    } catch (error) {
      throw error
    }
  }
}