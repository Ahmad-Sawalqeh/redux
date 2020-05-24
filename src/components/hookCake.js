import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/actions/actionsCreater.js';

/*

- useSelector:
* replacing mapStateToProps function
* return the requiared state from the redux store
* const stateVariableName = useSelector(state => globalState)

- useDispatch:
* replacing mapDispatchToProps function
* return referreance to the dispatch function from the redux store
* const dispatchName = useDispatch()

Note: no need for { connect } method to connect the mappStateToProps/mapDispatchToProps functions to the component

*/

function HookCake() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
          <h1>redux with hooks</h1>
          <h3>number of cakes is {numOfCakes}</h3>
          <button onClick={() => dispatch(buyCake())}>buy cakes</button>
        </div>
    )
}

export default HookCake;
