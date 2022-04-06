import Axios from 'axios'

const TMDB = Axios.create({ baseURL: 'http://api.themoviedb.org/3' })

export default TMDB
