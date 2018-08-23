import React from 'react';
import CounterItem from './counterItem.js';

import './style.css';

const CounterContainer = () => (
	<div className="counters">
	  <CounterItem caption="First" />
	  <CounterItem caption="Second" />
	  <CounterItem caption="Third" />
	</div>
);

export default CounterContainer;
