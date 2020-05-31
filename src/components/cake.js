import React, { Fragment } from "react";
import { connect } from "react-redux";
import { buyCake } from '../redux/actions/actionsCreater.js';

const Cake = props => {
    console.log('cake props => ',props);
    return (
      <Fragment>
        <div>
          <h3>number of cakes is {props.numOfCakesPropsName}</h3>
          <button onClick={() => props.dispatchBuyCakePropsName(1)}>buy ONE cake</button>
          <button onClick={() => props.dispatchBuyCakePropsName(2)}>buy TWO cakes</button>
          <button onClick={() => props.dispatchBuyCakePropsName(3)}>buy THREE cakes</button>
        </div>
      </Fragment>
    );
};

// function to help turn the state into props and use it in the component
// taks in tow parameters (state, ownProps)
function mapStateToProps(state) {
  return {
    numOfCakesPropsName: state.cake.numOfCakes
  };
}

// function to help turn the dispatch method into props and use it in the component
// taks in tow parameters (state, ownProps)
function mapDispatchToProps(dispatch) {
  return {
    dispatchBuyCakePropsName: (numberOfCakes) => dispatch(buyCake(numberOfCakes))
  };
}

// function to help group all the connected methods to the component
// taks in tow parameters (propsFromState, propsFromDispatch, ownProps)
function mergeProps(propsFromState, propsFromDispatch, ownProps) {
  console.log(`propsFromState => `, propsFromState);
  console.log(`propsFromDispatch => `, propsFromDispatch);
  console.log(`ownProps => `, ownProps);
  return {};
}

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Cake);

const defaultApp = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Cake);

export default defaultApp;