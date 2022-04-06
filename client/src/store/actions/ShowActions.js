import { GetShows } from '../../services/ShowService'
import { GET_SHOWS } from '../types'



export const LoadShows = () => {
  return async (dispatch) => {
    try{
      const shows = await GetShows()
      dispatch({
        type: GET_SHOWS,
        payload: shows
      })
      console.log(shows)
    } catch (error) {
      throw error
    }
  }
}