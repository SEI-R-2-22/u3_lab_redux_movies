import './styles/App.css'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import { Route, Routes } from 'react-router-dom'

console.log(process.env.REACT_APP_TMDB_KEY)

const App = () => {
  
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
