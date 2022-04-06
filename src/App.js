import './styles/App.css'
import {Routes,Route} from 'react-router-dom'
import Movies from './components/Movies'
import Details from './components/Details'

const App = () => {
  
  return (
    <div>
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <Movies />
    </div>
    <div>
      <Routes>
            <Route path="/movie/:id" element={<Details/>} />
      </Routes>
    </div>
    </div>
  )
}

export default App
