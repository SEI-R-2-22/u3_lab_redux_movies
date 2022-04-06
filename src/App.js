import './styles/App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MovieList from './components/MovieList'
import Movie from './components/Movie'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
 


  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MovieList/>} />
            <Route path='/:movieId' element={<Movie/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
