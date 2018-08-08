import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import store from './Store.js';
import {Provider} from 'react-redux';

import ControlPanel from './views/ControlPanel.js';

ReactDOM.render(
	<Provider store={store}>
		<ControlPanel />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
