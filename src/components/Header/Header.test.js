import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './index';
import { findByTestAtrr } from '../../utils';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

const setUpMount = (props={}) => {
    const mounted = mount(<Header {...props} />);
    return mounted;
};

describe('Header Component', () => {
    let component, mounted;
    beforeEach(() => {
        let props = {
          match: {
            url: '/'
          }
        }
        component = setUp();
        mounted = setUpMount(props);
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should available Desktop version', () => {

        const wrapper = findByTestAtrr(mounted, 'desktopComponent');
        // normally react ui semantic will convert the design to html. so we should expect length 2
        expect(wrapper.length).toBe(2);
    });

    it('Should available Mobile version', () => {

        const wrapper = findByTestAtrr(mounted, 'mobileComponent');
        // normally react ui semantic will convert the design to html. so we should expect length 2
        expect(wrapper.length).toBe(2);
    });

    it('Should available contact us link', () => {

        const wrapper = findByTestAtrr(mounted, 'contact');
        // normally react ui semantic will convert the design to html. so we should expect length 2
        expect(wrapper.length).toBe(2);
    });


});
