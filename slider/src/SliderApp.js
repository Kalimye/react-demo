import React from 'react';
import {view as Header} from './header/';
import {view as Slider} from './slider/';

import './SliderApp.css';

class SliderApp extends React.Component {
  render() {
	  return (
		  <div>
			  <Header />
			  <Slider />
			</div>
		);
	}
}

export default SliderApp;
