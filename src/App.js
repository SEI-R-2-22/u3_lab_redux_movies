import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import './styles/App.css'

const App = () => {

  return (
    <div className="App">
      <h3>Let's Go Out To The Lobby</h3>
      <Movies />
    </div>
  )
}

export default App
