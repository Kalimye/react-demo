import React from 'react';
import PropTypes from 'prop-types';
import {actions} from '../../slider/';

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
		this.context.store.dispatch(actions.openSlider());
	}

	componentDidMount() {
		this.setState({
		  unsubscribe: this.context.store.subscribe(this.onChange)
		});
	}

	componentWillUnmount() {
		this.state.unsubscribe();
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
