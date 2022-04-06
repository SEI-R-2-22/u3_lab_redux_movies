import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MovieReducer from './reducers/MovieReducer'
import DetailsReducer from './reducers/DetailsReducer'

const store = createStore(
  combineReducers({
    movieState: MovieReducer,
    detailsState: DetailsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
