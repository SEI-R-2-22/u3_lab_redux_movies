import Axios from 'axios'

const Client = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default Client

//https://api.themoviedb.org/3/search/movie?query=[your search query]&api_key=[yourkey]
//https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
