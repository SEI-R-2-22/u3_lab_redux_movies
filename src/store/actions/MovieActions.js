import { GetMoviesDetails, GetMovies } from "../../services/ArtServices";
import { Get_MOVIE_DETAILS, GET_MOVIES } from '../types'

export const LoadMovies = () => {
    return async (dispatch) => {
        try {
            const movieList = await GetMovies()
            dispatch({
                type: GET_MOVIES,
                payload: movieList
            })
        } catch (error) {
            throw error
        } 
    }
}

export const LoadMovieDetails = (id) => {
    return async (dispatch) => {
        try {
            const details = await GetMoviesDetails(id)
            dispatch({
                type: Get_MOVIE_DETAILS,
                payload: details
            })
        } catch (error) {
            throw error
        }
    }
}