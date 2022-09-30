import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ListReducer from "./reducers/ListReducer";
import DetailsReducer from "./reducers/DetailsReducer";

const store = createStore(
  combineReducers({
    movieState: ListReducer,
    movieDetailsState: DetailsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
