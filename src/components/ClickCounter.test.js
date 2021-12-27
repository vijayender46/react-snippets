/*jslint es6 */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ClickCounter } from './ClickCounter';


Enzyme.configure({ adapter: new EnzymeAdapter() });
test('component renders without errors', () => {
    const wrapper = shallow(<ClickCounter />);
    const counterComponent = wrapper.find("[data-test-id='counter-wrapper']");
    expect(counterComponent.length).toBe(1);
})