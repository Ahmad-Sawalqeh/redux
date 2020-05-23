import { BUY_CAKE, BUY_ICECREAM } from './actionsTypes.js';

// action creater function, return action object
export const buyCake = () => {
   return {
     type: BUY_CAKE
   };
}

// action creater function, return action object
export const buyIceCream = () => {
    return {
      type: BUY_ICECREAM
    };
 }