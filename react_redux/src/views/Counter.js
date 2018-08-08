import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as Actions from '../Actions.js';

import './Counter.css';

function Counter({onIncrement, onDecrement, caption, value}) {
  return (
		<div className="Counter">
		  <button onClick={onIncrement}>+</button>
		  <button onClick={onDecrement}>-</button>
		  <span>{caption} count: {value}</span>
		</div>
	);
}

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
	caption: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
	  value: state[ownProps.caption]
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
	  onIncrement: () => {
		  dispatch(Actions.increment(ownProps.caption));
		},
		onDecrement: () => {
		  dispatch(Actions.decrement(ownProps.caption));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
