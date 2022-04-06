import User from '.'

export const GetMovies = async () => {
    try {
        const res = await User.get(`/movie/top_rated?api_key=dd02fd8ba53eb7c806960cee13790cdd`)
        console.log(res.data.results)
        return res.data.results
    } catch (error) {
        throw error
    }

}