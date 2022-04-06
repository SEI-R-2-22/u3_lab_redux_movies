import { GetMovies, GetDetails } from '../../services/APIService'
import { GET_MOVIES, GET_DETAILS } from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()

      dispatch({
        type: GET_MOVIES,
        payload: movies
      })
    } catch (e) {
      throw e
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
    } catch (e) {
      throw e
    }
  }
}
