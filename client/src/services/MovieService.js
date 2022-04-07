import Client from './'

export const GetMovies = async () => {
  try {
    const res = await Client.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
    return res.data
  } catch (error) {
    throw error
  }
}




//   export const GetMovieProducts = async (id) => {
//     try {
//       const res = await Client.get(`/movies/${id}`)
//       return res.data.Products
//     } catch (error) {
//       throw error
//     }
//   }