import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Movies from './components/Movies'
import Details from './components/Details'

const App = () => {
  
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <Routes>
        <Route path='/' element={<Movies />}/>
        <Route path='/movie/:id' element={<Details />}/>
      </Routes>
    </div>
  )
}

export default App
