import React from 'react';

export default class Bundle extends React.Component {
  constructor(props) {
	  super(props);

		this.state = {mod: null};
	}

	componentWillMount() {
	  this.load(this.props);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
		  this.load(nextProps);
		}
	}

	load(props) {
	  this.setState({mod: null});

		// import() 返回一个 Promise 对象
		props.load().then(mod => {
		  this.setState({
			  mod: mod.view ? mod.view : null
			});
		});
	}

	render() {
	  return this.state.mod ? this.props.children(this.state.mod) : null
	}
}
