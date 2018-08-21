import React from 'react';
import PropTypes from 'prop-types';
import {actions} from '../../slider/';

class About extends React.Component {
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
			<div>About Component</div>
		);
	}
}

About.contextTypes = {
  store: PropTypes.object
};

export default About;
