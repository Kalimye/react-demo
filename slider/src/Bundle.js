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

		import('./loadAnimation/').then(response => {
			this.setState({
				mod: response.view ? response.view : null
			});
		}).catch(error => {
		  throw new Error('加载等待动画失败！');
		}).then(() => {
			props.load().then(mod => {
			  this.setState({
				  mod: mod.view ? mod.view : null
				});
			}).catch(error => {
			  throw new Error('加载组件失败！');
			});
		});
	}

	render() {
	  return this.state.mod ? this.props.children(this.state.mod) : null;
	}
}
