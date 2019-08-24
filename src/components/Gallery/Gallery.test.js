import React from 'react';
import { shallow, mount, render, unmount } from 'enzyme';
import Gallery from './index';
import { findByTestAtrr } from '../../utils';
import store from '../../redux';

const setUp = (props={}) => {
    const component = mount(<Gallery store={store} {...props}/>)
    return component;
};

describe('Gallery Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render galleryComponent', () => {
        const wrapper = findByTestAtrr(component, 'galleryComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render Thumbnail', () => {
        const wrapper = findByTestAtrr(component, 'thumbnail');
        expect(wrapper.length).toBe(1);
    });

    it('Should render Lightbox', () => {
        const wrapper = findByTestAtrr(component, 'lightbox');
        expect(wrapper.length).toBe(1);
    });



});
