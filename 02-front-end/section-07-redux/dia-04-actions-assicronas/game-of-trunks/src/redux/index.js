import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore } from "redux";
import reducer from "./reducers";

const store = legacy_createStore(reducer, composeWithDevTools())

export default store;