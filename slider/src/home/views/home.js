import React from 'react';
import PropTypes from 'prop-types';
import {actions} from '../../slider/';

import './style.css';

class Home extends React.Component {
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
		  <div className="home">
			  <p>Home Component</p>
			</div>
		);
	}
}

Home.contextTypes = {
  store: PropTypes.object
};

export default Home;
