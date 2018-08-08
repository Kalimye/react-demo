import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Summary({sum}) {
  return <span>Summary count: {sum}</span>;
}

Summary.propTypes = {
  sum: PropTypes.number.isRequired
};


class SummaryContainer extends Component {
  constructor() {
	  super(...arguments);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  const state = this.context.store.getState();
		let sum = 0;

		for (const key in state) {
		  if (state.hasOwnProperty(key)) {
			  sum += state[key];
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
		this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
		this.context.store.unsubscribe(this.onChange);
	}

	render() {
		return <Summary sum={this.state.sum}></Summary>;
	}
}

SummaryContainer.contextTypes = {
  store: PropTypes.object
};

export default SummaryContainer;
