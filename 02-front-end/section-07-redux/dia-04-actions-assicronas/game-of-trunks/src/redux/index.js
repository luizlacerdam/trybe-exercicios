import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore } from "redux";
import gotReducer from "./reducers";

const store = legacy_createStore(gotReducer, composeWithDevTools())

export default store;