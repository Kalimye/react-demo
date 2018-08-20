import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import SliderApp from './SliderApp.js';

import store from './Store.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<SliderApp />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
