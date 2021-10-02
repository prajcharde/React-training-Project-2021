import React from 'react';
import { shallow, mount } from 'enzyme';
import GiftsSend from './giftsSend';

describe('GiftsSend component', () => {
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
                    cardExpiryDate: ''
                }
            ],
            totalCount:1
        }
        let wrapper = shallow(<GiftsSend {...props}/>);
        expect(wrapper).not.toBe(null);
    });
});