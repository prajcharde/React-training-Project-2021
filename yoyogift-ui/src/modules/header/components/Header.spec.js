import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from "./Header";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../state/actions'
import {Provider} from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Header Section Test", () => {

    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Provider store={mockStore}><Header /></Provider>);   
    });
    afterEach(() => {
        fetchMock.restore();
      })

      const user = {
        "id": "106899629700260704678",
        "email": "prajcharde@gmail.com",
        "first_name": "Prajakta",
        "last_name": "Charde",
        "picture": "https://lh3.googleusercontent.com/a-/AOh14GjtYgJumsRsIoorjBCTY43WWA10CzkLWOq7hwidzA=s96-c",
        "balance_points": 5000
      };

      const expectedActions = [
        actions.login(user)
      ]
      
      const state = {
        login:{
            loginStatus:true,
            userDetails: user
        }
      }

      const store1 = mockStore(state);

    it("should load Header Component", () => {
        wrapper = shallow(<Provider store={store1}><Header /></Provider>);
        expect(wrapper).not.toBe(null);
    });

    it("if main header element present ", () => {     
        wrapper = shallow(<Provider store={store1}>
            <Header />
            </Provider>);
        expect(wrapper.find(AppBar)).toBeDefined();
        expect(wrapper.find(Toolbar)).toBeDefined();
        expect(wrapper.find(Typography)).toBeDefined();
    });

    it('should present home button', () =>{
        wrapper = mount(<Provider store={store1}>
            <Header />
            </Provider>);
        expect(wrapper.find(Button).at(0).text()).toBe('YOYOGift')
    });

    it('should present gift received button', () =>{
        wrapper = mount(<Provider store={store1}>
            <Header />
            </Provider>);
        expect(wrapper.find(Button).at(1).text()).toBe('GIFTS RECEIVED');
    });

    it('should present gift send button', () =>{
      wrapper = mount(<Provider store={store1}>
          <Header />
          </Provider>);
      expect(wrapper.find(Button).at(2).text()).toBe('GIFTS SENT');
  });

  it('should present gift received button', () =>{
    wrapper = mount(<Provider store={store1}>
        <Header />
        </Provider>);
    expect(wrapper.find(Button).at(3).text()).toBe('MY PROFILE');
  });


});