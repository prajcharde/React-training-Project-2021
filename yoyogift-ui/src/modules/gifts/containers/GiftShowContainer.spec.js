import React from 'react';
import { shallow, mount } from 'enzyme';
import GiftShowContainer from './GiftShowContainer';
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk'
import * as actions from '../state/actions'
import {Provider} from 'react-redux';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("GiftShowContainer Section Test", () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Provider store={mockStore}><GiftShowContainer /></Provider>);   
    });
    afterEach(() => {
        fetchMock.restore();
      })
      const state = {
        gifts:{
            giftCard: {}
        },
        user: {
            UserDetails: {}
        },
        login: {
            detailsObject: {},
            loginStatus: {}
        }
      }
      const store1 = mockStore(state);
    it("should load GiftShowContainer Component", () => {
        wrapper = shallow(<Provider store={store1}><GiftShowContainer /></Provider>);
        expect(wrapper).not.toBe(null);
    });

    // it("should call componentDidMount", () =>{
    //     wrapper =  mount(<Provider store={store1}><GiftShowContainer /></Provider>);
    //     expect(wrapper..componentDidMount()).toHaveBeenCalled();
    // })
});