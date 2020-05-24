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
function mapDispatchToProps(dispatch) {
  return {
    dispatchBuyCakePropsName: (numberOfCakes) => dispatch(buyCake(numberOfCakes))
  };
}

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Cake);

const defaultApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cake);

export default defaultApp;