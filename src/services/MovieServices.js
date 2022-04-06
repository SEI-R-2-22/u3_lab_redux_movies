import Client from './'

export const GetMovies = async () => {
    try {
        const res = await Client.get('/movie')
        return res.data.results  
    } catch (error) {
        throw error 
    }
}

export const GetMovieDetails = async (id) => {
    try {
        const res = await Client.get(`/movie/${id}`)
        return res.data.movies
    } catch (error) {
        throw error
    }
}