import { GetMovies, GetMovieDetails } from '../../services/MovieServices'
import { GET_MOVIES, GET_DETAILS } from '../types'

export const LoadMovies = () => {
    return async (dispatch) => {
        try{
            const movies = await GetMovies()
            dispatch({
                type: GET_MOVIES,
                payload: movies
            })
        }catch (err){
            throw err
        }
    }
}

export const LoadMovieDetails = (id) => {
  
    return async (dispatch) => {
      try {
        const details = await GetMovieDetails(id)
         //console.log(details)
        dispatch({
          type: GET_DETAILS,
          payload: details
        })
      } catch (error) {
        throw error
      }
    }
  }
  