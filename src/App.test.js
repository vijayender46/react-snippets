import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });
test('rendering without non-empty component and without crashing', () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug()); // .debug is to check what const hold within
  expect(wrapper.exists()).toBe(true); // .exists check if we have non-empty nodes(components)
});
