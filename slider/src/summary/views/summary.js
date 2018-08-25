import React from 'react';
import PropTypes from 'prop-types';

class Summary extends React.Component {
  constructor(props, context) {
	  super(props, context);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  const store = this.context.store.getState().summary;
		let sum = 0;

		for (const key in store) {
		  if (store.hasOwnProperty(key)) {
			  sum += store[key];
			}
		}

		return {sum};
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	shouldComponentUpdate(nextState, nextProps) {
		return this.state.sum !== nextProps.sum;
	}

	componentDidMount() {
	  this.setState({
		  unsubscribe: this.context.store.subscribe(this.onChange)
		});
	}

	componentWillUnmount() {
	  this.state.unsubscribe(this.onChange);
	}

	render() {
	  return (
		  <span>Summary: {this.state.sum}</span>
		);
	}
}

Summary.contextTypes = {
  store: PropTypes.object
};

export default Summary;
