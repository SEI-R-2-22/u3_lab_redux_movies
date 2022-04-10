import Client from './index'
import { BASE_URL } from '../src/global'
const API_KEY = process.env.REACT_APP_TMDB_KEY


export const GetMovies = async () => {
  try {
    const response = await Client.get(`${BASE_URL}/discover/movie/?api_key=${process.env.API_KEY}`)
    console.log(response)
    return response.data.results
  } catch (e) {
    throw e
  }
}

export const GetDetails = async (movieID) => {
  try {
    const response = await Client.get(
      `movie/${movieID}?api_key=${API_KEY}&language=en-US`
    )
    console.log(response.data)
    return response.data
  } catch (e) {
    throw e
  }
}