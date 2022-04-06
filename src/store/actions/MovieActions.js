import { getMovies, getMovieDetails } from '../../services/MovieServices'
import { GET_MOVIES, GET_MOVIEDETAILS } from '../types'

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
                type: GET_MOVIEDETAILS,
                payload: movieDetails
            })
        } catch (error) {
            throw error
        }
    }
}