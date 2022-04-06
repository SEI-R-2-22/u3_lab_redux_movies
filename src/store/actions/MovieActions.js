import { GetMovies, GetMovieDetail } from '../../services/MovieService'
import { GET_MOVIES, GET_MOVIE_DETAIL } from '../types'

//GetMovieDetails GET_MOVIE_DETAILS

export const LoadMovies = () => {
  console.log('after LoadMovies')
  return async (dispatch) => {
    try {
      const movies = await GetMovies()

      dispatch({
        type: GET_MOVIES,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMovieDetail = (id) => {
  console.log('whatever i want')
  return async (dispatch) => {
    try {
      console.log('after the try')
      const movieDetail = await GetMovieDetail(id)

      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: movieDetail
      })
    } catch (error) {
      throw error
    }
  }
}
