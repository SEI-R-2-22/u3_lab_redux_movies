import { GetMovie, GetMovieDetails } from '../../services/MovieServices'
import { GET_MOVIE, GET_MOVIE_DETAILS } from '../types'

export const LoadMovie = () => {
  return async (dispatch) => {
    try {
      const movie = await GetMovie()

      dispatch({
        type: GET_MOVIE,
        payload: movie
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const movieDetails = await GetMovieDetails(id)

      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: movieDetails
      })
    } catch (error) {
      throw error
    }
  }
}