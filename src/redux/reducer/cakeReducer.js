import { BUY_CAKE } from '../actions/actionsTypes.js';

const initialCakeState = {
    numOfCakes: 10
};

// reducer function
const cakeReducer = (state = initialCakeState, action) => {
    const { type } = action;
    switch (type) {
      case BUY_CAKE:
        return { ...state, numOfCakes: state.numOfCakes - 1 };
      default:
        return state;
    }
}

export default cakeReducer;
