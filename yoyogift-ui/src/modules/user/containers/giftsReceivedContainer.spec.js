import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import GiftsReceivedContainer from './giftsReceivedContainer';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
jest.mock("react-dom", () => ({ render: jest.fn() }));
describe("GiftsReceivedContainer Section Test", () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Provider store={mockStore}><GiftsReceivedContainer /></Provider>);   
    });
    afterEach(() => {
        fetchMock.restore();
      })
      const state = {
        receivedCards:{
            users:{
                cards: [],
                totalCount: 0,
            }                    
        },        
        login:{
          loginStatus:true
        },
        user: {
            detailsObject: {
                "id": "106899629700260704678",
                "email": "prajcharde@gmail.com",
              }
        }
      }
      const store1 = mockStore(state);
    it("should load GiftsReceivedContainer Component", () => {
        wrapper = shallow(<Provider store={store1}><GiftsReceivedContainer /></Provider>);
        expect(wrapper).not.toBe(null);
    });
});
