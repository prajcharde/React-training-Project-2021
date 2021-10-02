import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import GiftsSendContainer from './GiftsSendContainer';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
jest.mock("react-dom", () => ({ render: jest.fn() }));
describe("GiftsSendContainer Section Test", () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Provider store={mockStore}><GiftsSendContainer /></Provider>);   
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
    it("should load GiftsSendContainer Component", () => {
        wrapper = shallow(<Provider store={store1}><GiftsSendContainer /></Provider>);
        expect(wrapper).not.toBe(null);
    });

  //   it("should load ComponentDidmount", () => {
  //     const spy = jest.spyOn(GiftsListContainer.WrappedComponent.prototype, 'componentDidMount');
  //     let props = {
  //       fetchCards: jest.fn()
  //     }
  //     let wrap = shallow(<Provider store={store1}>
  //       <GiftsListContainer store={store1} {...props}/>
  //       </Provider>);
  //     expect(spy).toHaveBeenCalled();
  //     wrap.unmount();
  // });
});
