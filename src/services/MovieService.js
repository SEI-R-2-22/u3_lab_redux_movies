import Client from "./"
import { BASE_URL } from "../globals"

export const GetMovies = async () => {
    try {
      const res = await Client.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API}`) // get movie end point
        console.log (res.data.results)
      return res.data.results
    } catch (error) {
      throw error
    }
  }