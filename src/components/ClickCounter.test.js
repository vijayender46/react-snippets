/*jslint es6 */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ClickCounter } from './ClickCounter';


Enzyme.configure({ adapter: new EnzymeAdapter() });
// DRY code process
/**
 * Factory function to create shallow wrapper to component we going to test.
 */
const setup = () => shallow(<ClickCounter />);
/**
 * Factory function to create shallow wrapper to component we going to test.
 */
const findTestAttr = (wrapper, val) => wrapper.find(`[data-test-id='${val}']`);

test('component renders without errors', () => {
    const wrapper = setup();
    const counterComponent = findTestAttr(wrapper, 'counter-wrapper');
    expect(counterComponent.length).toBe(1);
})

// renders count display text
test('renders count initial', () => {
    const wrapper = setup();
    const counterDisplay = findTestAttr(wrapper, 'count-display');
    expect(counterDisplay.length).toBe(1);
});

// display count button
test('renders count button', () => {
    const wrapper = setup();
    const countButton = findTestAttr(wrapper, 'count-button');
    expect(countButton.length).toBe(1);
});

// renders count value 0 as initial
test('renders count initial', () => {
    const wrapper = setup();
    const countValue = findTestAttr(wrapper, 'count').text();
    expect(countValue).toBe('0');
});

// click funtion works
test('click function increament count', () => {
    const wrapper = setup();
    // find the button
    const countButton = findTestAttr(wrapper, 'count-button');
    // click happened - to get click we use .simulate from enzyme doc
    countButton.simulate('click');

    // find display and find if count happen on click
    const countValue = findTestAttr(wrapper, 'count').text();
    expect(countValue).toBe('1');
});