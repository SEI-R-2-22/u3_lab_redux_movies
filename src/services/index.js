import Axios from 'axios'

const User = Axios.create({ baseURL: `https://api.themoviedb.org/3` })

export default User

