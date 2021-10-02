import React from 'react';
import { shallow, mount } from 'enzyme';
import GiftsReceived from './giftsReceived';

describe('GiftsReceived component', () => {
    it('should render component', () =>{
        let props = {
            classes:{
                root:{
                    margin:'0px'
                }
            },
            fetchSentCards: jest.fn(),
            data:[
                {
                    cardName:'',
                    cardPoints:'',
                    senderEmail:'',
                    cardIssueDate:'',
                    cardExpiryDate: '',
                    cardShortDesc: '',
                    isRedeemed: true
                }
            ],
            totalCount:1
        }
        let wrapper = shallow(<GiftsReceived {...props}/>);
        expect(wrapper).not.toBe(null);
    });
});