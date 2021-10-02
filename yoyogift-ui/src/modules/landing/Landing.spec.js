import React from 'react';
import { shallow } from 'enzyme';
import Landing from "./Landing";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

describe("Landing Page Test", () => {

    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Landing />);   
    });

    it("should load Landing Component", () => {
        // const wrapper = shallow(<Landing />)
        // expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper).not.toBe(null);
    });

    it("should have a promo section", () => {
        expect(wrapper.find('#promo-ribbon').html()).toContain('Use code TRAVEL15 to get 15% off');
    });

    it("should have heading section on landing page" ,() =>{
        expect(wrapper.find('h1')).toBeDefined();
    });

    it("should have button as Explore Cards", () =>{
        expect(wrapper.find(Button)).toBeDefined();
    });

    // it("should explored cards with button", () =>{
    // const mockCallBack = jest.fn();
    // wrapper.find(Link).simulate('click');
    // expect(mockCallBack.mock.calls.length).toEqual(1);
    // });


})