import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import MovieReducer from './reducers/MovieReducer'
import ShowReducer from './reducers/ShowReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    movieState: MovieReducer,
    showState: ShowReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store