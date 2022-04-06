import { getMovies, getMovieDetails } from '../../services/MovieServices'
import { GET_MOVIES, GET_MOVIE_DETAILS } from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await getMovies()

      dispatch({
        type: GET_MOVIES,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const movieDetails = await getMovieDetails(id)

      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: movieDetails
      })
    } catch (error) {
      throw error
    }
  }
}