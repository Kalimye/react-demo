import React from 'react';
import Counter from './counter.js';
import Summary from './summary.js';

import './style.css';

const CounterContainer = () => (
  <div className="summary">
    <Counter caption="First"/>
    <Counter caption="Second"/>
    <Counter caption="Third"/>
		<hr />
		<Summary />
	</div>
);

export default CounterContainer;
