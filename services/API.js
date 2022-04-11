import { BASE_URL } from "../src/globals";
const API_KEY = process.env.REACT_APP_TMBD_KEY

export const GetMovie = async () => {
    try {
        const res = await BASE_URL.get(`/discover/movie/?api_key=${API_KEY}`)
        return res.data.results
    } catch (error) {
        throw error
    }
}

export const GetMovieDetails = async (movieId) => {
    try {
        const res = await BASE_URL.get(`movie/${movieId}?api_key=${API_KEY}`)
        return res.data
    } catch (error) {
        throw error
    }
}
