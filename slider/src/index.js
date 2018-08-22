import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from './Store.js';
import './SliderAppEntry.css';

import registerServiceWorker from './registerServiceWorker';

class EntryComponent extends React.Component {
	constructor() {
	  super();
		this.state = {num: 3};
		this.timer();
	}

	timer() {
		let num = this.state.num;

		num--;

		if (num < 0) return;

	  setTimeout(() => {
			this.setState({num: num});
			this.timer();
		}, 1000);
	}

  render() {
	  return (
			<div className="app-entry">
				<span className="image"></span>
				<span className="text">Loading ({this.state.num})</span>
			</div>
		);
	}
}

class Bundle extends React.Component {
	constructor(props) {
	  super(props);
		this.state = {mod: null};
	}

	load(props) {
		this.setState({mod: null});

		props.load().then(resolve => {
			setTimeout(() => {
				this.setState({
					mod: resolve.default ? resolve.default : null
				});
			}, 3000);
		}).catch(error => {
		  throw new Error('应用程序加载出错，请重试！');
		});
	}

	componentWillMount() {
		this.load(this.props);
	}

	render() {
	  return this.state.mod ? this.props.children(this.state.mod) : <EntryComponent />;
	}
}

ReactDOM.render(
	<Provider store={store}>
	  <BrowserRouter>
	    <Bundle load={() => import('./SliderApp.js')}>
	      {
					(SliderApp) => (<SliderApp />)
				}
	    </Bundle>
	  </BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
