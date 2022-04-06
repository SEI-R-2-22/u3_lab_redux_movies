import Client from './'

export const GetMovies = async () => {
    try {
        const res = await Client.get(`/discover/movie?api_key=5dbd489c7388479f5f7a92edc0559a27`)
        console.log(res.data.results)
        return res.data.results
    } catch (error) {
        throw error
    }
}

export const GetMovieDetails = async (id) => {
    try {
        const res = await Client.get(`/movie/${id}?api_key=5dbd489c7388479f5f7a92edc0559a27`);
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}