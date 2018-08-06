import React, {Component} from 'react';
import store from '../Store.js';

class Summary extends Component {
	constructor(props) {
	  super(props);

		this.onChange = this.onChange.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
		const state = store.getState();
		let sum = 0;

		for (const key in state) {
		  if (state.hasOwnProperty(key)) {
				sum += state[key];
			}
		}

		return {sum};
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	shouldComponentUpdate(nextState, nextProps) {
		return this.state !== nextProps;
	}

	componentDidMount() {
	  store.subscribe(this.onChange);
	}

	componentWillUnmount() {
	  store.unsubscribe(this.onChange);
	}

  render() {
		const {sum} = this.state;

	  return (
		  <div>
			  <span>Summary: {sum}</span>
			</div>
		);
	}
}

export default Summary;
