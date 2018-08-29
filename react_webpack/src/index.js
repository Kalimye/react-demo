import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
