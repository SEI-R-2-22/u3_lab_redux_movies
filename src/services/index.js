import axios from 'axios'

const Client = axios.create({ baseURL: 'https://api.themoviedb.org/3/movie/550?api_key=c815ba18bee408914d541bb696862579'})

export default Client 