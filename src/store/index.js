import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import moviesReducer from './reducers/moviesReducer'
import movieDetailsReducer from './reducers/movieDetailsReducer'

const store = createStore(
  combineReducers({
    moviesState: moviesReducer,
    movieDetailsState: movieDetailsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
