import Axios from 'axios'

const BASE_URL = Axios.create({ baseURL: 'https://api.themoviedb.org/3/' })

export default BASE_URL