import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CityCard from './index';
import { findByTestAtrr } from '../../utils';
import store from '../../redux';

const setUp = (props={}) => {
    const component = mount(<CityCard store={store} {...props} />);
    return component;
};

describe('CityCard Component', () => {
    let component, mounted;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component, 'citycardComponent');
      expect(wrapper.length).toBe(1);
    });

});
