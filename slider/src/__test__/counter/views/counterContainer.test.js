import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from '../../configure/enzyme.configure.js';
import CounterContainer from '../../../counter/views/counterContainer.js';
import Counter from '../../../counter/views/counter.js';

describe('counter/counterContainer', () => {
  it('渲染 <CounterContainer /> 组件', () => {
	  const subject = (
		  <CounterContainer>
			  <Counter caption="First" />
		  </CounterContainer>
		);

	  const wrapper = shallow(subject);

		expect(wrapper.contains(<Counter caption="First" />)).toBe(true);
	});
});
