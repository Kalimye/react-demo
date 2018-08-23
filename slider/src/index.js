import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import store from './Store.js';
import {view as LoadAnimation} from './loadAnimation/';
// import {view as EntryComponent} from './entryComponent/';

import './SliderAppEntry.css';

import registerServiceWorker from './registerServiceWorker';


// 异步请求 SliderApp 组件
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
	  return this.state.mod ? this.props.children(this.state.mod) : <LoadAnimation />;
	}
}

ReactDOM.render(
	<Provider store={store}>
	  <HashRouter>
	    <Bundle load={() => import('./SliderApp.js')}>
	      {SliderApp => <SliderApp />}
	    </Bundle>
	  </HashRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
