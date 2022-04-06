import Client from './'
import { API_KEY } from '../globals'


export const GetMovies = async () => {
    try {
        const res = await Client.get(`/discover/movie?api_key=${API_KEY}`)
        return res.data.results
    } catch (error) {
        throw error
    }
}

export const GetMovieDetails = async (movieId) => {
    try {
        const res = await Client.get(`/movie/${movieId}?api_key=${API_KEY}`)
        return res.data
    } catch (error) {
        throw error
    }
}