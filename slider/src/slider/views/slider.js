import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class SliderContainer extends React.Component {
	constructor() {
	  super(...arguments);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  return this.context.store.getState()
	}
	
	onChange() {
	  this.setState(this.getOwnState());
	}

	componentDidMount() {
	  this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  this.context.store.unsubscribe(this.onChange);
	}

  render() {
		if (this.state.slider.open) {
			return (
			  <div className="slider" style={{left: '0'}}></div>
			);
		} else {
			return (
			  <div className="slider" style={{left: '-80%'}}></div>
			);
		}
	}
}

SliderContainer.contextTypes = {
  store: PropTypes.object
};

export default SliderContainer;
