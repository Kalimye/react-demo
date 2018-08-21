import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import SliderApp from './SliderApp.js';

import store from './Store.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
	  <BrowserRouter>
			<SliderApp />
	  </BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
