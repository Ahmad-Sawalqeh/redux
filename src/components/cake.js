import React, { Fragment } from "react";
import { connect } from "react-redux";
import { buyCake } from '../redux/actions/actionsCreater.js';

// function to help turn the state into props and use it in the component
function mapStateToProps(state) {
    return {
      numOfCakesPropsName: state.cake.numOfCakes
    };
  }
  
// function to help turn the dispatch method into props and use it in the component
function mapDispatchToProps(dispatch) {
    return {
      dispatchBuyCakePropsName: () => dispatch(buyCake())
    };
}

const Cake = props => {
    console.log('cake props => ',props);
    return (
      <Fragment>
        <div>
          <h3>number of cakes is {props.numOfCakesPropsName}</h3>
          <button onClick={props.dispatchBuyCakePropsName}>buy cake</button>
        </div>
      </Fragment>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cake);