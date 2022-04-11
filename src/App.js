import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Movie from './components/Movie'
import MovieDetails from './components/MovieDetails'

  const App = () => {
    
    return (
   
      <div className="App">
      <h3>Redux Thunk Practice</h3>
      <Routes>
      <Route path='/' elemnt={<Movie />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App;
