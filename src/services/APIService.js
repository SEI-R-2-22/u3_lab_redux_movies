import Client from './index'
const aPI = process.env.REACT_APP_TMDB_KEY

export const GetMovies = async () => {
  try {
    const response = await Client.get(`/discover/movie/?api_key=${aPI}`)
    console.log(response)
    return response.data.results
  } catch (e) {
    throw e
  }
}

export const GetDetails = async (movieID) => {
  try {
    const response = await Client.get(`movie/${movieID}?api_key=${aPI}`)
    console.log(response.data)
    return response.data
  } catch (e) {
    throw e
  }
}
