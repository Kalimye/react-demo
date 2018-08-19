import React from 'react';
import PropTypes from 'prop-types';
import {setFilter} from '../actions.js';

class Link extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.toggleFilter = this.toggleFilter.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
		return this.context.store.getState();
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	toggleFilter() {
		this.context.store.dispatch(setFilter(this.props.filter));
	}

	componentDidMount() {
	  this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
		this.context.store.unsubscribe(this.onChange);
	}

  render() {
	  return (
			<span onClick={this.toggleFilter}>{this.props.children}</span>
		);
	}
}

Link.contextTypes = {
  store: PropTypes.object
};

export default Link;
