import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function Summary({sum}) {
  return <span>Summary count: {sum}</span>;
}

Summary.propTypes = {
  sum: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
	let sum = 0;

	for (const key in state) {
	  if (state.hasOwnProperty(key)) {
		  sum += state[key];
		}
	}

  return {sum};
}

export default connect(mapStateToProps)(Summary);
