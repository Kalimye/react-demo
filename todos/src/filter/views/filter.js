import React from 'react';
import Link from './link.js';
import {FilterTypes} from '../../constants.js';

import './css/filter.css';

class Filter extends React.Component {
  render() {
	  return (
			<div className="filter">
				<Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
				<Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
				<Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
				<Link filter={FilterTypes.DELETED}>{FilterTypes.DELETED}</Link>
			</div>
		);
	}
}

export default Filter;
