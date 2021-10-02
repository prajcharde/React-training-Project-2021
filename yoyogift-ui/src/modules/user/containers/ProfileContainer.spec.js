import React from 'react';
import { shallow, mount } from 'enzyme';
import ProfileContainer  from './profileContainers';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../state/actions'
import {Provider} from 'react-redux';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('ProfileContainer component', () => {
    let wrapper;
    afterEach(() => {
        fetchMock.restore();
      })
      const state = {
        user:{
            UserDetails:{}
        },
        login:{
          loginStatus:true,
          userDetails: {
            "id": "106899629700260704678",
            "email": "prajcharde@gmail.com",
          }
        }
      }
      const store1 = mockStore(state);
    it('should load profile container', () =>{
        wrapper = shallow(<Provider store={store1}><ProfileContainer /></Provider>);
        expect(wrapper).not.toBe(null);
    })

    it('should load profile container', () =>{
        let props ={
            detailsObject:{
                "id": "106899629700260704678",
                "email": "prajcharde@gmail.com",
            },
            isLoggedIn: true
        }
        wrapper = shallow(<Provider store={store1}><ProfileContainer {...props} /></Provider>);
        expect(wrapper).not.toBe(null);
    })
});