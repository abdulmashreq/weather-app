import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ContactUs from './index';
import { findByTestAtrr } from '../../utils';
import store from '../../redux';
import { Provider } from 'react-redux';

const setUp = (props={}) => {
    const component = mount(<Provider store={store} ><ContactUs {...props} /></Provider>);
    return component;
};

describe('ContactUs Component', () => {
    let component, mounted;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component, 'contactComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render phoneNumber field', () => {
      const wrapper = findByTestAtrr(component, 'phoneNumber');
      expect(wrapper.length).toBe(9);
    });

});
