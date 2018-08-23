import React from 'react';
import PropTypes from 'prop-types';
import {increment, decrement} from '../actions.js';

class CounterItem extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  return {
		  counters: this.context.store.getState().counters
		};
	};

	onChange() {
	  this.setState(this.getOwnState());
	}

	onIncrement() {
		this.context.store.dispatch(increment(this.props.caption));
	}

	onDecrement() {
		this.context.store.dispatch(decrement(this.props.caption));
	}

	shouldComponentUpdate(nextState, nextProps) {
		const caption = this.props.caption;
		return this.state.counters[caption] !== nextProps.counters[caption];
	}

	componentDidMount() {
	  this.setState({
		  unsubscribe: this.context.store.subscribe(this.onChange)
		});
	}

	componentWillUnmount() {
	  this.state.unsubscribe();
	}

  render() {
		const caption = this.props.caption;
	  return (
			<div className="counter-item">
			  <span className="button icon-add" onClick={this.onIncrement}></span>
			  <span className="button icon-reduce" onClick={this.onDecrement}></span>
			  <span>{this.state.counters[caption]}</span>
			</div>
		);
	}
}

CounterItem.contextTypes = {
  store: PropTypes.object
};

export default CounterItem;
