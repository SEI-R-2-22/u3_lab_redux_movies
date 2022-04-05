import tmdb from './'
import axios from 'axios'

export const getMovies = async () => {
  try {
    const res = await tmdb
      .get(`discover/movie/?api_key=57a0da22fafe8ebb9fcb956d6d704d5d`)
      .then((allResult) => allResult.data.results)
    return res
  } catch (error) {
    throw error
  }
}

export const getMovieDetails = async (movieId) => {
  try {
    const res = await tmdb.get(
      `/movie/${movieId}?api_key=57a0da22fafe8ebb9fcb956d6d704d5d`
    )
    return res.data
  } catch (error) {
    throw error
  }
}
