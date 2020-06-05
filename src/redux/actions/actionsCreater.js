import axios from 'axios';
import { BUY_CAKE, BUY_ICECREAM, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actionsTypes.js';

// action creater function, return action object
export const buyCake = (numberOfCakes = 1) => {
   return {
     type: BUY_CAKE,
     payload: numberOfCakes
   };
}

// action creater function, return action object
export const buyIceCream = () => {
    return {
      type: BUY_ICECREAM
    };
}

// action creater function, return action object
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

// action creater function, return action object
export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

// action creater function, return action object
export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

// action creater function, return function to make async task
export const fetchUsers = () => {
  return function (dispatch) {
    // 3'rd party API calls
    // also dispatch any fetch result response with data or error
    dispatch(fetchUsersRequest()) // loading ...
    // for example we use as 3'rd party API : jsonplaceholder.typicode.com 
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // console.log('response => ',response)
        const users = response.data.map(user => user.name)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}
