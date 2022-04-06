import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'

const App = () => {
  
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <div>
        <Movies />
      </div>
    </div>
  )
}

export default App
