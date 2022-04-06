import tmdb from '../services/index'

export const getMovies = async () => {
  try {
    const res = await tmdb
      .get(`discover/movie/?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((allResult) => allResult.data.results)
    return res
  } catch (error) {
    throw error
  }
}

export const getMovieDetails = async (movieId) => {
  try {
    const res = await tmdb
    .get( `movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
    return res.data
  } catch (error) {
    throw error
  }
}