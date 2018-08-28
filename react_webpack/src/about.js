import React from 'react';
import ReactDOM from 'react-dom';
import About from './pages/about.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<About />, document.getElementById('root'));
registerServiceWorker();
