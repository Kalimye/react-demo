import React from 'react';
import {view as Header} from './header/';
import {view as Slider} from './slider/';
import {view as Overlay} from './overlay/';

import './SliderApp.css';

class SliderApp extends React.Component {
  render() {
	  return (
		  <div className="sliderApp">
			  <Overlay />
			  <Header />
			  <Slider />
			</div>
		);
	}
}

export default SliderApp;
