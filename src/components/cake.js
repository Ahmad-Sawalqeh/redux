import React, { Fragment } from "react";
import { connect } from "react-redux";
import { buyCake } from '../redux/actions/actionsCreater.js';

const Cake = props => {
    console.log('cake props => ',props);
    return (
      <Fragment>
        <div>
          <h3>number of cakes is {props.state}</h3>
          <button onClick={() => props.dispatch(1)}>buy ONE cake</button>
          <button onClick={() => props.dispatch(2)}>buy TWO cakes</button>
          <button onClick={() => props.dispatch(3)}>buy THREE cakes</button>
        </div>
      </Fragment>
    );
};

// mapStateToProps: function to help turn the state into props and use it in the component
// taks in tow parameters (state, ownProps)
function mapStateToProps(state) {
  return {
    numOfCakesPropsName: state.cake.numOfCakes
  };
}

// mapDispatchToProps: function to help turn the dispatch method into props and use it in the component
// taks in tow parameters (state, ownProps)
function mapDispatchToProps(dispatch) {
  return {
    dispatchBuyCakePropsName: (numberOfCakes) => dispatch(buyCake(numberOfCakes))
  };
}

// mergeProps: function to help group all the connected methods to the component
// taks in tow parameters (propsFromState, propsFromDispatch, ownProps)
/*
Note:
- propsFromState = returned object from mapStateToProps function
- propsFromDispatch = returned object from mapDispatchActionToProps function
- ownProps = already passed in props to the component
*/
function mergeProps(propsFromState, propsFromDispatch, ownProps) {
  console.log(`propsFromState => `, propsFromState);
  console.log(`propsFromDispatch => `, propsFromDispatch);
  console.log(`ownProps => `, ownProps);
  return {
    state: propsFromState.numOfCakesPropsName,
    dispatch: propsFromDispatch.dispatchBuyCakePropsName
  };
}

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//     mergeProps
// )(Cake);

const defaultApp = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Cake);

export default defaultApp;