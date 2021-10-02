import React from 'react';
import DatePickers  from './datePicker';
import PropTypes from 'prop-types';
import { mount, shallow } from 'enzyme';
import TextField from '@material-ui/core/TextField';
    
    describe('DatePickers component', () => {
      it('should render snapshot', () => {
        DatePickers.propTypes = {
            classes: PropTypes.object.isRequired
          };
          let classesss = {container:{}, label:{}, defaultValue:{}, textField:{}}
           let wrapper = shallow(<DatePickers classes={classesss} />)
            expect(wrapper.find(TextField)).toBeTruthy();
        })
    });