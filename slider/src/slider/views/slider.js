import React from 'react';
import PropTypes from 'prop-types';

import {closeSlider} from '../actions.js';

import './style.css';

class Slider extends React.Component {
	render() {
		if (this.props.sliderState.open) {
			// 渲染展开状态下的 slider
			return (
				<div className="slider" style={{left: 0}}>
					<div className="slider-menu">
						<i onClick={this.props.onClick}></i>
					</div>
				</div>
			);
		} else {
			// 渲染收起状态下的 slider
			return (
				<div className="slider" style={{left: '-80%'}}>
				</div>
			);
		}
	}
};

Slider.propTypes = {
  sliderState: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};

class SliderContainer extends React.Component {
	constructor() {
	  super(...arguments);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClickCloseBtn = this.onClickCloseBtn.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  return this.context.store.getState()
	}
	
	onChange() {
	  this.setState(this.getOwnState());
	}

	onClickCloseBtn() {
		this.context.store.dispatch(closeSlider());
	}

	componentDidMount() {
	  this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  this.context.store.unsubscribe(this.onChange);
	}

  render() {
		return <Slider 
			sliderState={this.state.slider}
		  onClick={this.onClickCloseBtn}
		/>;
	}
}

SliderContainer.contextTypes = {
  store: PropTypes.object
};

export default SliderContainer;
