import React from 'react';
import { shallow, mount } from 'enzyme';
import GiftsList from './GiftsList';
import { jssPreset } from '@material-ui/core';

describe("GiftsList Section Test", () => {
    it('should load component', () =>{
        let props = {
            giftCards:[],
            totalCount: 0,
            fetchMorecards: jest.fn(),
            userDetails:{
                email: ''
            },
            classes:{ 
                root:{}
            }
        }
        let wrapper = shallow(<GiftsList  {...props}/>);
        expect(wrapper).toBeTruthy();

    })

    // it('should call componentDidMount', () =>{
    //     let props = {
    //         giftCards:[],
    //         totalCount: 0,
    //         fetchMorecards: jest.fn(),
    //         userDetails:{
    //             email: ''
    //         },
    //         classes:{ 
    //             root:{}
    //         }
    //     }
    //     let wrapper = shallow(<GiftsList  {...props}/>);
    //     const c = wrapper.instance();
    //     const check = jest.spyOn(c,'componentDidMount');
    //     expect(check).toHaveBeenCalled();

    // })

});