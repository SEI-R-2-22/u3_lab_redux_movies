import { createStore,combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import MovieReducer from './reducers/MovieReducer'
import ApiReducer from './reducers/ApiReducer'
import thunk from 'redux-thunk'

const store = createStore(
    combineReducers({movieState: MovieReducer, apiState : ApiReducer}),composeWithDevTools(applyMiddleware(thunk)))

export default store