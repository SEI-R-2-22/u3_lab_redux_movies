import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import MovieReducer from './reducers/MovieReducer'
import MovieDetailsReducer from './reducers/MovieDetailReducers'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    movieState: MovieReducer,
    MovieDetailsState: MovieDetailsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;