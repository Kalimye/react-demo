import React, {Component} from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';
import './ControlPanel.css';

class ControlPanel extends Component {
  render() {
	  return (
		  <div className="ControlPanel">
			  <Counter caption="First"/>
			  <Counter caption="Second"/>
			  <Counter caption="Third"/>
			  <hr />
			  <Summary />
			</div>
		);
	}
}

export default ControlPanel;
