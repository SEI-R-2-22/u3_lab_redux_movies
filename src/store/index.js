import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MovieReducer from './reducers/MovieReducer'
import DetailsReducer from './reducers/DetailsReducer'
import ReviewsReducer from './reducers/ReviewsReducer'

const store = createStore(
  combineReducers({
    movieState: MovieReducer,
    detailsState: DetailsReducer,
    reviewState: ReviewsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store