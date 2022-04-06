import { GetMovies, GetDetails, GetReviews } from '../../services/APICalls'
import { GET_MOVIES, GET_DETAILS, GET_REVIEWS } from '../types'

export const LoadMovies = () => {
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

export const LoadDetails = (ID) => {
  return async (dispatch) => {
    try {
      const details = await GetDetails(ID)
      dispatch({
        type: GET_DETAILS,
        payload: details
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadReviews = (ID) => {
  return async (dispatch) => {
    try {
      const reviews = await GetReviews(ID)

      dispatch({
        type: GET_REVIEWS,
        payload: reviews
      })
    } catch (error) {
      throw error
    }
  }
}