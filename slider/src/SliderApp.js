import React from 'react';
import PropTypes from 'prop-types';
import {view as Header} from './header/';
import {view as Slider} from './slider/';
import {actions} from './slider/';

import './SliderApp.css';

class SliderApp extends React.Component {
	constructor() {
	  super(...arguments);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClickApp = this.onClickApp.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  return {
			slider: this.context.store.getState().slider
		}
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	onClickApp() {
		if (!this.state.slider.open) {
			return;
		}

		this.context.store.dispatch(actions.closeSlider());
	}

	shouldComponentUpdate(nextState, nextProps) {
	  return this.state.slider.open !== nextProps.slider.open;
	}

	componentDidMount() {
	  this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  this.context.store.unsubscribe(this.onChange);
	}

  render() {
	  return (
		  <div className="sliderApp" onClick={this.onClickApp}>
			  <Header />
			  <Slider />
			</div>
		);
	}
}

SliderApp.contextTypes = {
  store: PropTypes.object
};

export default SliderApp;
