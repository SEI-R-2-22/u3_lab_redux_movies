import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import MovieReducer from './reducers/MovieReducer'
import DetailReducer from './reducers/DetailReducer'
import thunk from 'redux-thunk'

const store = createStore(
    combineReducers({
        movieState: MovieReducer,
        detailState: DetailReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store