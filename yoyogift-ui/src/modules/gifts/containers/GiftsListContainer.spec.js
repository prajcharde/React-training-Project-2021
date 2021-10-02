import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import GiftsListContainer from './GiftsListContainer';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("GiftsListContainer Section Test", () => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallow(<Provider store={mockStore}><GiftsListContainer /></Provider>);   
  });
  afterEach(() => {
      fetchMock.restore();
    })
    const state = {
      giftCards:{ 
        gifts:{
          giftCards: []
        }
      },
      totalCount:{
        gifts:{
          totalCount:0
        }
      },
      giftCardsFiltered: {
        gifts:{
          giftCardsFiltered:[]
        }
      },
      userDetails: {
        login: {
            detailsObject: {}
        }
      }
    }
    const store1 = mockStore(state);
    it("should load GiftsListContainer Component", () => {
        let wrapper = shallow(<Provider store={store1}><GiftsListContainer /></Provider>);
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
