import React, { Fragment } from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";


// Redux is a state container (state-management) library for javascript applications, can be used with React, Angular, Vue or even vanilla Javascript

// React-redux is the redux UI library that provides bindings to use React and Redux togather in an application

/*
component => dispatch an action => reducer-function => redux-store (state) => subscribe to component

- action : describes the changes in the state of the application to interact with the store, object has type property
{ type: `String-constant` }

- reducer : function takes in (currentState, action) as arguments which controls how state transition happened and returns newState

- store : 
* holds state and the reducer function of the application 
* allows access to state via getState() method, return current state by default
* allows state to be updated via dispatch(action) method
* regesters listeners via subscribe(listener), listener is a function excute each time state change
* handles UNregestering via function returned by subscribe() method

steps to make store:
* using createStore(reducerFunction) method to create store, takes in reducer function as parameter
* using sunscribe(function) method to let application subscribe to any changes in the store
* using dispatch(function-return-action) method to update the state
* calling unsubscribe() method which returned from subscribe(listener) method to handle unregister of listener

- Redux principles:
1- The application state is stored in an object within a single store
2- The only way to change the state is to dispatch an action, an object describing what happened
3- To specify how the state is transformed by actions, you write pure reducers

- react-redux:
* provider:
* connect: built-in function in react-redux package takes in (mapStateToProps, mapDispatchToProps) helps to connect the mapping state to props function to the component you specify 

*/

const initialState = {
  numOfCakes: 10
};

// action type variable
const BUY_CAKE = `BUY_CAKE`;

// action creater function, return action object
function buyCake() {
  return {
    type: BUY_CAKE
  };
}

// reducer function
const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case BUY_CAKE:
      console.log(state);
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

// store
const myStore = createStore(reducer);
// console.log("initial state => ", myStore.getState());

// // before dispatch an action use the returned value from store.subscribe() method to see updated state
// const unsubscribe = myStore.subscribe(() => {
//   console.log("updated state => ", myStore.getState());
// });
// myStore.dispatch(buyCake());
// unsubscribe();

// function to help turn the state into props and use it in the component
function mapStateToProps(state) {
  return {
    statePropsName: state.numOfCakes
  };
}

// function to help turn the dispatch method into props and use it in the component
function mapDispatchToProps(dispatch) {
  return {
    dispatchPropsName: () => dispatch(buyCake())
  };
}

// function component
const App = props => {
  console.log(props);
  return (
    <Fragment>
      <div>
        <h3>number of cakes is {props.statePropsName}</h3>
        <button onClick={props.dispatchPropsName}>Decrease</button>
      </div>
    </Fragment>
  );
};

connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Main = () => {
  return (
    <Provider store={myStore}>
      <App />
    </Provider>
  );
};

render(<Main />, document.getElementById("root"));
