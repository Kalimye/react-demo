import React from 'react';
import PropTypes from 'prop-types';
import {openSlider} from '../actions.js';

import './style.css';

const Header = ({onClick}) => (
	<div className="header">
		<i onClick={onClick}></i>
	</div>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired
};


class HeaderContainer extends React.Component {
	constructor() {
	  super(...arguments);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClickMenu = this.onClickMenu.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  return this.context.store.getState();
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	onClickMenu() {
		this.context.store.dispatch(openSlider());
	}

	componentDidMount() {
	  this.context.store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  this.context.store.unsubscribe(this.onChange);
	}

  render() {
	  return <Header 
		  onClick={this.onClickMenu}
		/>;
	}
}

HeaderContainer.contextTypes = {
  store: PropTypes.object
};

export default HeaderContainer;
