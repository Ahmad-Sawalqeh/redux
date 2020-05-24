import React, { Fragment } from "react";
// import myStore from './redux/store/store.js';
import Cake from './components/cake.js';
import IceCream from './components/icecream.js';
import HookCake from './components/hookCake.js';

// Redux is a state container (state-management) library for javascript applications, can be used with React, Angular, Vue or even vanilla Javascript

// React-redux is the redux UI library that provides bindings to use React and Redux togather in an application

/*
component => dispatch an action => reducer-function => redux-store (state) => subscribe to component (change props)

- action : describes the changes in the state of the application to interact with the store, object has type property
{ type: `String-constant` }

- reducer : function takes in (currentState, action) as arguments which controls how state transition happened and returns newState

- store : 
* holds state of the application 
* allows access to state via getState() method, return current state by default
* allows state to be updated via dispatch(action) method
* regesters listeners via subscribe(listener), listener is a function excute each time state change
* handles UNregestering via function returned by subscribe() method
* allows to combine multiple reducers functions using combineReducers(Object) method,
 object = {
     keyName1: nameOfReducerFunction1,
     keyName2: nameOfReducerFunction2
 }

steps to make store:
* using createStore(reducerFunction) method to create store, takes in reducer function as parameter
* using sunscribe(function) method to let application subscribe to any changes/updates in the store
* using dispatch(function-return-action) method to update the state
* calling unsubscribe() method which returned from subscribe(listener) method for unregistering the listener (Stop listening to state updates)

- Redux principles:
1- The application state is stored in an object within a single store
2- The only way to change the state is to dispatch an action, action is an object describing what happened
3- To specify how the state is transformed by actions, you write pure reducers

- react-redux:
* provider: component helps to provide store to our application
* connect: 
--> higher order built-in function in react-redux package takes in (mapStateToProps, mapDispatchToProps)
--> helps to connect the mappStateToProps/mapDispatchToProps functions to the component you specify to access the redux store 
--> return function then call the component function

*/

// // before dispatch an action use the returned value from store.subscribe() method to see updated state
// const unsubscribe = myStore.subscribe(() => {
//   console.log("updated state => ", myStore.getState());
// });
// myStore.dispatch(buyCake());
// myStore.dispatch(buyCake());
// myStore.dispatch(buyIceCream());
// myStore.dispatch(buyIceCream());\
// // Stop listening to state updates
// unsubscribe();

const App = props => {
    console.log('app props => ',props);
    return (
      <Fragment>
        <Cake />
        <hr />
        <IceCream />
        <hr />
        <HookCake />
      </Fragment>
    );
};

export default App;