import React, {Component} from 'react';
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


class CounterContainer extends Component {
  constructor() {
	  super(...arguments);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  return {
		  value: this.context.store.getState()[this.props.caption]
		};
	}

	onChange() {
		this.setState(this.getOwnState());
	}

	onIncrement() {
		this.context.store.dispatch(Actions.increment(this.props.caption));
	}

	onDecrement() {
		this.context.store.dispatch(Actions.decrement(this.props.caption));
	}

	shouldComponentUpdate(nextState, nextProps) {
		return this.state.value !== nextProps.value;
	}

	componentDidMount() {
		this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
		this.context.store.unsubscribe(this.onChange);
	}

	render() {
		const {caption} = this.props;
		const {value} = this.state;

		return (
		  <Counter 
			  onIncrement={this.onIncrement}
			  onDecrement={this.onDecrement}
			  caption={caption}
			  value={value}
			/>
		);
	}
}

CounterContainer.contextTypes = {
  store: PropTypes.object
};

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
};

export default CounterContainer;
