import React from 'react';
import PropTypes from 'prop-types';
import {actions} from '../../slider/';

class Topic extends React.Component {
	constructor() {
	  super(...arguments);

		this.closeSlider = this.closeSlider.bind(this);
		this.closeSlider();
	}

	closeSlider() {
	  this.context.store.dispatch(actions.closeSlider());
	}

	render() {
	  return (
		  <div>Topic Component</div>
		);
	}
}

Topic.contextTypes = {
  store: PropTypes.object
};

export default Topic;
