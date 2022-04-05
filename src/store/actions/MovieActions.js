import { GetMovies } from '../../services/MovieServices'
import { GET_MOVIES } from '../types'

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