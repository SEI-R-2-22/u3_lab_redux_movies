import Client from './index'
const API_KEY = process.env.REACT_APP_API_KEY

export const GetAllMovies = async () => {
    try {
        const res = await Client.get(`/discover/movie?api_key=5bacc9d14793afbd45b2be1e42070b67`)
        return res.data.results
    } catch (error) {
        throw error
    }
}

export const GetDetails = async (id) => {
    try {
        const res = await Client.get(`/movie/${id}?api_key=5bacc9d14793afbd45b2be1e42070b67`)
        return res.data
    } catch (error) {
        throw error
    }
}