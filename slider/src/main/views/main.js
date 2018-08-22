import React from 'react';
import {Route} from 'react-router-dom';
// import {view as Home} from '../../home/';
// import {view as About} from '../../about/';
// import {view as Topic} from '../../topic/';
import Bundle from '../../Bundle.js';

import './style.css';

const Home = props => {
	return (
		<Bundle load={() => import('../../home/')}>
			{(Home) => <Home {...props} />}
		</Bundle>
	);
};

const About = props => {
  return (
	  <Bundle load={() => import('../../about/')}>
		  {(About) => {
				return <About {...props} />;
			}}
		</Bundle>
	);
};

const Topic = props => {
  return (
	  <Bundle load={() => import('../../topic/')}>
		  {(Topic) => <Topic {...props} />}
		</Bundle>
	);
};

const Counter = props => (
  <Bundle load={() => import('../../counter/')}>
	  {Counter => <Counter {...props} />}
	</Bundle>
);

class Main extends React.Component {
	render() {
	  return (
		  <div className="main">
			  <Route exact path="/" component={Home}/>
			  <Route path="/about/" component={About}/>
			  <Route path="/topic" component={Topic}/>
			  <Route path="/counter" component={Counter}/>
			</div>
		);
	}
}

export default Main;
