import BASE_URL from './index'
const API_KEY = process.env.REACT_APP_TMDB_KEY
// const API_KEY = 'a8e5d4bfc2cdd4d86c90bbb583e63c3f'

export const GetMovies = async () => {
  try {
    const response = await BASE_URL.get(`/discover/movie/?api_key=${API_KEY}`)
    return response.data.results
  } catch (error) {
    throw error
  }
}

export const GetDetails = async (movieID) => {
  try {
    const response = await BASE_URL.get(`movie/${movieID}?api_key=${API_KEY}&language=en-US`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export const GetReviews = async (movieID) => {
  try {
    const response = await BASE_URL.get(`movie/${movieID}/reviews?api_key=${API_KEY}&language=en-US`
    )
    return response.data.results
  } catch (error) {
    throw error
  }
}