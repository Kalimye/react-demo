import React from 'react';
import {Route} from 'react-router-dom';
import {view as Home} from '../../home/';
import {view as About} from '../../about/';
import {view as Topic} from '../../topic/';

import './style.css';

class Main extends React.Component {
	render() {
	  return (
		  <div className="main">
			  <Route exact path="/" component={Home}/>
			  <Route path="/about" component={About}/>
			  <Route path="/topic" component={Topic}/>
			</div>
		);
	}
}

export default Main;
