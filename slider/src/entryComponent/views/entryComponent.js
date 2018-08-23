import React from 'react';

class EntryComponent extends React.Component {
	constructor() {
	  super();
		this.state = {num: 3, hidden: ''};
		this.timer();
	}

	timer() {
		let num = this.state.num;

		num--;

		if (num === -1) {
		  this.setState({hidden: 'opacity'});
		}

		if (num < -1) return;

	  setTimeout(() => {
			if (num === -1) return;
			this.setState({num: num});
			this.timer();
		}, 1000);
	}

  render() {
	  return (
			<div className="app-entry">
				<span className={'image ' + this.state.hidden}></span>
				<span className={'text ' + this.state.hidden}>Loading ({this.state.num})</span>
			</div>
		);
	}
}

export default EntryComponent;
