import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from './index';
import { findByTestAtrr } from '../../utils';

const setUp = (props={}) => {
    const component = mount(<Footer {...props} />);
    return component;
};

describe('Footer Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'footerComponent');
        expect(wrapper.length).toBe(1);
    });

});
