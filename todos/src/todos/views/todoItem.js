import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const checkBox = {
  display: 'inline-block',
	width: '10px',
	height: '10px',
	border: '1px solid #919191',
	borderRadius: '50%',
	marginRight: '5px'
};

const todoItem = {
  paddingRight: '5px'
};

function TodoItem({text, onToggleTodo, onRemoveTodo}) {
  return (
		<div>
		  <span style={checkBox} onClick={onRemoveTodo}></span>
			<span style={todoItem}>{text}</span>
		  <span onClick={onRemoveTodo}>x</span>
		</div>
	);
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default connect(null, null)(TodoItem);
