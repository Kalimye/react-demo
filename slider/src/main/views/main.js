import React from 'react';
import {Route} from 'react-router-dom';
import Bundle from '../../Bundle.js';

import './style.css';

const Home = props => (
	<Bundle load={() => import('../../home/')}>
		{(Home) => <Home {...props} />}
	</Bundle>
);

const About = props => (
	<Bundle load={() => import('../../about/')}>
		{About => <About {...props} />}
	</Bundle>
);

const Topic = props => (
	<Bundle load={() => import('../../topic/')}>
		{Topic => <Topic {...props} />}
	</Bundle>
);

const Counter = props => (
	<Bundle load={() => import('../../counter/')}>
		{Counter => <Counter {...props} />}
	</Bundle>
);

const Counters = props => (
	<Bundle load={() => import('../../counters/')}>
	  {Counters => <Counters {...props} />}
	</Bundle>
);

const Summary = props => (
	<Bundle load={() => import('../../summary/')}>
	  {Summary => <Summary {...props} />}
	</Bundle>
);

const SwiperDemo = props => (
	<Bundle load={() => import('../../swiperDemo/')}>
	  {SwiperDemo => <SwiperDemo {...props} />}
	</Bundle>
);

const Main = () => (
	<div className="main">
		<Route exact path="/" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/topic" component={Topic}/>
		<Route path="/counter" component={Counter}/>
		<Route path="/counters" component={Counters}/>
		<Route path="/summary" component={Summary}/>
		<Route path="/swiper-demo" component={SwiperDemo}/>
	</div>
);

export default Main;
