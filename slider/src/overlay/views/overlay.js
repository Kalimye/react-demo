import React from 'react';
import PropTypes from 'prop-types';
import {actions} from '../../slider/';

import './style.css';

const Overlay = ({className, onClick}) => (
	<div
		className={className}
		onClick={onClick}
		>
	</div>
);

Overlay.propTypes = {
  className: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};


class OverlayContainer extends React.Component {
	constructor() {
	  super(...arguments);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClickOverlay = this.onClickOverlay.bind(this);

		this.state = this.getOwnState()
	}

	getOwnState() {
	  return {
			slider: this.context.store.getState().slider
		};
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	onClickOverlay() {
		this.context.store.dispatch(actions.closeSlider());
	}

	componentDidMount() {
	  this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  this.context.store.unsubscribe(this.onChange);
	}

  render() {
		const slider = this.state.slider;
		return (
			<Overlay 
			  className={slider.open ? 'overlay active' : 'overlay normal'}
			  onClick={this.onClickOverlay}
			/>
		);
	}
}

OverlayContainer.contextTypes = {
  store: PropTypes.object
};

export default OverlayContainer;
