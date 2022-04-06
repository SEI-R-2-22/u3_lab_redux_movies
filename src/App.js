import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

const App = () => {

  return (
    <div className="App">
      <div className="App-header">
        <h2>Redux Movie List</h2>
      </div>
      <Routes>
        <Route path="/" element={<MovieList /> }/>
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes> 
    </div>
  )
}
export default App