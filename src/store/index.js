import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MovieReducer from './reducers/MovieReducer'
import MovieDetailsReducer from './reducers/MovieDetailsReducer'

const store = createStore(
    combineReducers({
        movieState: MovieReducer,
        movieDetailState: MovieDetailsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))     
)

export default store
