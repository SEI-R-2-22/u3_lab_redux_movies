import TMDB from './'

export const GetMoviesList = async () => {
  try {
    const res = await TMDB.get(
      `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    )
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetMovieDetail = async (id) => {
  try {
    const res = await TMDB.get(
      `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    )

    return res.data
  } catch (error) {
    throw error
  }
}

export const GetSearchResult = async (query) => {
  try {
    const res = await TMDB.get(
      `/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}}`
    )
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
