import { BUY_CAKE, BUY_ICECREAM } from './actionsTypes.js';

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

 export const fetch = () => {
   return (dispatch) => {
    // 3'rd party calls
    // also dispatch any fetch result response with data or error
   }
 }