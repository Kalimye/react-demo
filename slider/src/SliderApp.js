import React from 'react';
import {view as Header} from './header/';
import {view as Slider} from './slider/';
import {view as Overlay} from './overlay/';
import {view as Main} from './main/';

import './SliderApp.css';


const SliderApp = () => (
	<div className="sliderApp">
		<Overlay />
		<Header />
		<Slider />
		<Main />
	</div>
);

export default SliderApp;
