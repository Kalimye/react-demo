import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {closeSlider} from '../actions.js';

import './style.css';


const links = [
  {
		exact: true,
	  text: 'Home',
		path: '/'
	},
	{
	  text: 'About',
		path: '/about'
	},
	{
	  text: 'Topic',
		path: '/topic'
	},
	{
	  text: 'Counter',
		path: '/counter'
	},
	{
	  text: 'Counters',
		path: '/counters'
	},
	{
	  text: 'Summary',
		path: '/summary'
	}
];

const SliderContent = ({sliderStyle, onClickCloseBtn}) => (
	<div className="slider" style={sliderStyle}>
	  {
		  links.map((link, index) => {
				return (
				  <p key={index} className="slider-menu">
					  <span onClick={onClickCloseBtn}>
					    <NavLink
					      exact={link.exact}
					      to={link.path}
					      activeClassName="active-selected"
					      replace
					    >{link.text}</NavLink>
					  </span>
					</p>
				);
			})
		}
	</div>
);

SliderContent.propTypes = {
  sliderStyle: PropTypes.object.isRequired,
	onClickCloseBtn: PropTypes.func
};


const Slider = ({sliderState, onClickCloseBtn}) => {
	if (sliderState.open) {
		// 渲染展开状态下的 slider
		return (
			<SliderContent
				sliderStyle={{left: 0}} 
				onClickCloseBtn={onClickCloseBtn}
			/>
		);
	} else {
		// 渲染收起状态下的 slider
		return (
			<SliderContent sliderStyle={{left: '-80%'}} />
		);
	}
};

Slider.propTypes = {
  sliderState: PropTypes.object.isRequired,
	onClickCloseBtn: PropTypes.func.isRequired
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
	  return {
			slider: this.context.store.getState().slider
		};
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
		  onClickCloseBtn={this.onClickCloseBtn}
		/>;
	}
}

SliderContainer.contextTypes = {
  store: PropTypes.object
};

export default SliderContainer;
