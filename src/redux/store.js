import { createStore, combineReducers } from "redux";

import {todoReducer, filterReducer} from './reducer';

const todoApp = combineReducers({todoReducer, filterReducer});

const store = createStore(todoApp);

export default store;