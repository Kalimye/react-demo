import React from 'react';
import ReactDOM from 'react-dom';
import Mentors from './pages/mentors.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mentors />, document.getElementById('root'));
registerServiceWorker();
