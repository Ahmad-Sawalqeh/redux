import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cakeReducer from '../reducer/cakeReducer.js';
import iceCreamReducer from '../reducer/iceCreamReducer.js';
import thunkReducer from '../reducer/thunkReducer.js';

/*

- redux-logger package:
* middleware package helps to log all information related to the store when we use it with 'redux-devtools-extension' package inside browser devtool

- redux-thunk package:
* define async action creators (must come first argument for applyMiddleware method)
* middleware package helps to work with calls for APIs using 'axios', 'ajax', 'superagent' or fetch which need async action when we use it with 'redux-devtools-extension' package
* helps to create action creator function which return a function to make async task

*/

// reducers functions object
const reducers = {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    thunkAPI: thunkReducer
}

const rootReducer = combineReducers(reducers)

/*
- applyMiddleware:
* its way to extend Redux with custom functionality
* provides a third-party extension point between dispatching an action and the moment it reacges the reducer function
* use middleware for logger, crash reporting, performing asynchronous tasks .. etc

*/

// store
// const myStore = createStore(rootReducer)
// const myStore = createStore(rootReducer, applyMiddleware(logger));
const myStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));


export default myStore;