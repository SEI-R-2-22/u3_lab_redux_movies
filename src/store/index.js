import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import MovieReducer from './reducers/MovieReducer'
import MovieDetailReducer from './reducers/MovieDetailReducer'
import SearchReducer from './reducers/SearchReducer'

const store = createStore(
  combineReducers({
    movieState: MovieReducer,
    detailState: MovieDetailReducer,
    searchState: SearchReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
