import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import MovieDetailsReducer from './reducers/MovieDetailsReducer'
import MovieReducer from './reducers/MovieReducer'
import thunk from 'redux-thunk'

const store = createStore(
    combineReducers({
        movieState: MovieReducer,
        movieDetailsState: MovieDetailsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store