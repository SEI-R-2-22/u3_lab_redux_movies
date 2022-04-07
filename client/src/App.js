import './styles/App.css'
import Movies from './components/Movies'
import {Routes, Route} from 'react-router-dom'
import Details from './components/Details'

const App = () => {
  return (
    <Routes >
      <Route path='/' element={<Movies />}/>
      <Route path="/:movieId/details" element={<Details/>}/>
    </Routes>
  )
}

export default App
