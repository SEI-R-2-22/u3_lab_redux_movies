import Client from './'

export const GetMovies = async () => {
    try {
        const res = await Client.get(`/discover/movie?api_key=84a8859f9bca30ae44beed59030f63b2`)
        console.log(res.data.results)
        return res.data.results
    } catch (error) {
        throw error
    }
}

export const GetMovieDetails = async (id) => {
    try {
        const res = await Client.get(`/movie/${id}?api_key=84a8859f9bca30ae44beed59030f63b2`);
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}