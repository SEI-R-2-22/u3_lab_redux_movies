import './styles/App.css'
import {Routes, Route} from 'react-router-dom'
import PopMovies from './components/PopMovies' // DEMO for component
import MovieDetails from './components/MovieDetails' // DEMO for component


const App = () => {
  
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <div className="flex-row">

        <div className="left">
          {/* PUT MAIN COMPONENT(s) HERE */}
          <PopMovies />
        </div>

        <div className="right">
          <Routes>
            <Route path='/movie/:id' element={<MovieDetails />} />
          </Routes>
        </div>
        
      </div>
    </div>
  )
}

export default App
