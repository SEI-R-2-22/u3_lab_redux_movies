import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
