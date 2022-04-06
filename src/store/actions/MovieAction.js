import { GetMovies } from '../../services/MovieService'
import { GET_MOVIES } from '../types'



export const LoadMovies = () => {
  return async (dispatch) => {
    try{
      const movies = await GetMovies()
      console.log(movies)
      dispatch({
        type: GET_MOVIES,
        payload: movies.results
      })
      console.log(movies)
    } catch (error) {
      throw error
    }
  }
}