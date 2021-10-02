import React from 'react';
import { shallow, mount } from 'enzyme';
import GiftShow from './GiftShow';

describe("GiftShow Section Test", () => {
    it('should load component', () =>{
        let props = {
            data:{
                cardImage:'',
                cardName: '',
                cardPoints: '',
                cardCount: '',
                cardExpiryDate: '',
                cardComments:[
                    {
                        first_name: '',
                        last_name: '',
                        commented_on: '',
                        comment: '',
                        rating:''
                    }
                ],
                cardVendor: '',
                cardLongDesc: ''
            }
        }
        let wrapper = shallow(<GiftShow  {...props}/>);
        expect(wrapper).toBeTruthy();

    })
});