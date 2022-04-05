import './styles/App.css'
import MovieList from './components/MovieList'
import { Route, Routes, Link } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <div className="App">
      <Link to='/'><h3>Movie Library</h3></Link>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
