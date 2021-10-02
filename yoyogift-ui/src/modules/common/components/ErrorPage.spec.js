import React from 'react';
import ErrorPage from './ErrorPage';
import { mount, shallow } from 'enzyme';
    
    describe('ErrorPage component', () => {
      it('should render snapshot', () => {
           let wrapper = shallow(<ErrorPage />)
            expect(wrapper.find('img')).toBeTruthy();
        })
    });