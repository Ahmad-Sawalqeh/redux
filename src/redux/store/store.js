import { createStore, combineReducers } from "redux";
import cakeReducer from '../reducer/cakeReducer.js';
import iceCreamReducer from '../reducer/iceCreamReducer.js';

// reducers functions
const reducers = {
    cake: cakeReducer,
    iceCream: iceCreamReducer
}

const rootReducer = combineReducers(reducers)

// store
const myStore = createStore(rootReducer);

export default myStore;