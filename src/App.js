import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <h3>Lawrence's Movie Redux App</h3>
      <div className="flex-row">
        <div className="right">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
