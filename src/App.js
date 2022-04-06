import './styles/App.css'
import TMDB from './services'
import Movies from './components/Movies'
import ViewDetail from './pages/ViewDetail'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viewdetail/:id" element={<ViewDetail />} />
      </Routes>
    </div>
  )
}

export default App
