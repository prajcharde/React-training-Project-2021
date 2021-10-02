import React from 'react';
import { shallow, mount } from 'enzyme';
import Profile from './profile';

describe('Profile component', () => {
    it('should render snapshot', () => {
        let props = {
            detailsObject:{
                email: '',
                first_name: '',
                last_name: '',
                socialProfileLink: '',
                picture: '',
                balance_points: 100
            }
        }
        let wrapper = shallow(<Profile  {...props}/>);
        expect(wrapper).toBeTruthy();
      })

      it('should not have socialProfileLink', () => {
        let props = {
            detailsObject:{
                email: '',
                first_name: '',
                last_name: '',
                picture: '',
                balance_points: 100
            }
        }
        let wrapper = shallow(<Profile  {...props}/>);
        expect(wrapper.find('label').at(2).text()).toBe('Balance Points');
      })
  });