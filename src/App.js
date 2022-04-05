import './styles/App.css'
import {Routes,Route} from 'react-router-dom'
import Movies from './components/Movies'

const App = (props) => {
  
  return (
    <div>
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <Movies />
    </div>
    <div>
      <Routes>
            <Route path='/' element={<Movies/>}/>
            <Route path="/movies/:id"id={props.id} component={<Movies/>} />
      </Routes>
    </div>
    </div>
  )
}

export default App
