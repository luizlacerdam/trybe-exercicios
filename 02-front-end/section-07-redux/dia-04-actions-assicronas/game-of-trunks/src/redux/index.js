import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import gotReducer from "./reducers";

const store = legacy_createStore(gotReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;