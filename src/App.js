import { Route, Routes } from 'react-router-dom'
import Movies from './components/Movies'  
import Details from './components/Details'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:ID" element={<Details />} />
        </Routes>
      </div>
    </div>
  )
}

export default App