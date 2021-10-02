import React from 'react';
import Footer from './Footer';
import { mount, shallow } from 'enzyme';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
    
    describe('Footer component', () => {
      it('should render snapshot', () => {
        Footer.propTypes = {
            classes: PropTypes.object.isRequired
          };
          let cla = {root:{margin:'10px'}}
           let wrapper = shallow(<Footer classes={ cla }/>);
            expect(wrapper.find(AppBar)).toBeTruthy();
            expect(wrapper.find(Toolbar)).toBeTruthy();
        
        })
    });