import React from 'react';
import { shallow, mount, render, unmount } from 'enzyme';
import WeatherCard from './index';
import { findByTestAtrr } from '../../utils';
import store from '../../redux';

const setUp = (props={}) => {
    const component = mount(<WeatherCard store={store} {...props}/>)
    return component;
};

describe('WeatherCard Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    
    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'weathercardComponent');
        expect(wrapper.length).toBe(2);
    });

    it('Should render temperatureTag', () => {
        const wrapper = findByTestAtrr(component, 'temperatureTag');
        expect(wrapper.length).toBe(2);
    });

    it('Should render iconTag', () => {
        const wrapper = findByTestAtrr(component, 'iconTag');
        expect(wrapper.length).toBe(2);
    });


});
