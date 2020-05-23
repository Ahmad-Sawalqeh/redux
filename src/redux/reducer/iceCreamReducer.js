import { BUY_ICECREAM } from '../actions/actionsTypes.js';

const initialIceCreamState = {
    numOfIceCreams: 20
};

// reducer function
const iceCreamReducer = (state = initialIceCreamState, action) => {
    const { type } = action;
    switch (type) {
      case BUY_ICECREAM:
        // console.log(state);
        return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
      default:
        return state;
    }
}

export default iceCreamReducer;