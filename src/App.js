import './styles/App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MovieList from './components/MovieList'
import Movie from './components/Movie'

const App = () => {
 


  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieList/>} />
          <Route path='/:movie' element={<Movie/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
