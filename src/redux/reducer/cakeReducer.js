import { BUY_CAKE } from '../actions/actionsTypes.js';

const initialCakeState = {
    numOfCakes: 10
};

// reducer function
const cakeReducer = (state = initialCakeState, action) => {
    const { type, payload } = action;
    switch (type) {
      case BUY_CAKE:
        return { ...state, numOfCakes: state.numOfCakes - payload };
      default:
        return state;
    }
}

export default cakeReducer;
