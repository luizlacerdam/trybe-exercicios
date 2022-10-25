import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";
const INIT_STATE = { count: 0 };

const reducer = (state = INIT_STATE, action) => state;
const store = createStore(reducer, composeWithDevTools());

export default store;