import Client from './'

export const GetMovies = async () => {
    try {
        const res = await Client.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
        return res.data
    } catch (error) {
        throw error
    }
}