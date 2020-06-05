import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/actionsTypes.js';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// reducer function
const thunkReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: payload,
          error: ''
        }
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: payload
        }
      default:
        return state;
    }
}

export default thunkReducer;