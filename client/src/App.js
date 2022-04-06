import './styles/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import Movies from './components/Movies'

const App = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null) // this should be a movie once you select one


useEffect(() => {
  async function getMovies() {
    const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
    console.log(res.data.results)
    setMovies(res.data.results)
  }
getMovies()
},[])


  return <div>
    <Movies movies={movies}/>
  </div>
}

export default App
