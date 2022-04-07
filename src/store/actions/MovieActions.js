import { GetAllMovies, GetDetails } from '../../services/MovieService'
import { GET_ALL_MOVIES, GET_DETAILS } from '../types'

export const LoadAllMovies = () => {
    return async (dispatch) => {
        try {
            const AllMovies = await GetAllMovies()
            dispatch({
                type: GET_ALL_MOVIES,
                payload: AllMovies
            })
        } catch (error) {
            throw error
        }
    }
}

export const LoadDetails = (id) => {
    return async (dispatch) => {
        try {
            const Details = await GetDetails(id)
            dispatch({
                type: GET_DETAILS,
                payload: Details
            })
        } catch (error) {
            throw error
        }
    }
}