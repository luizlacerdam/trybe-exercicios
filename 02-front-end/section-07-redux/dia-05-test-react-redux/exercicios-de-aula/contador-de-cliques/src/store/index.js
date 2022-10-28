// src/store/index.js
import { legacy_createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';

const rootReducer = combineReducers({ clickReducer });

const store = legacy_createStore(rootReducer);

export default store;