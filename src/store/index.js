import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ListReducer from "./reducers/ListReducer";

const store = createStore(
  combineReducers({
    movieState: ListReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
