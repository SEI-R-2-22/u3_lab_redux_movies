import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MovieReducer from './reducers/MovieReducer'
import MovieDetailReducers from './reducers/MovieDetailReducers'

const store = createStore(
  combineReducers({
    moviesState: MovieReducer,
    movieDetailsState: MovieDetailReducers
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store