import React from 'react';
import InputTypeComponent from './inputTypeComponent';
import { mount, shallow } from 'enzyme';
import {
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    FormHelperText,
    IconButton
  } from "@material-ui/core";

    describe('InputTypeComponent component', () => {
      it('should render snapshot', () => {
          let props = {
            fieldFullWidth: '100%',
            inputError: '',
            style: {},
            inputDisabled: false,
            inputId: 'id',
            inputType: 'text',
            inputValue: '',
            inputPlaceholder: 'Please enter',
            endAdornment: true,
            endAdornmentIcon: '',
            startAdornment: true,
            startAdornmentText: '',
            inputHelperText: 'check it',
            handleEndAdornmentButtonClick: jest.fn()
          }
           let wrapper = shallow(<InputTypeComponent {...props}/>)
            expect(wrapper.find(Input)).toBeTruthy();
        })

        it('should render snapshot', () => {
            let props = {
              fieldFullWidth: '100%',
              inputError: '',
              style: {},
              inputDisabled: false,
              inputId: 'id',
              inputType: 'text',
              inputValue: '',
              inputPlaceholder: 'Please enter',
              endAdornment: false,
              endAdornmentIcon: '',
              startAdornment: false,
              startAdornmentText: '',
              inputHelperText: 'check it',
              handleEndAdornmentButtonClick: jest.fn(),
              handleInputChange: jest.fn()
            }
             let wrapper = shallow(<InputTypeComponent {...props}/>)
             wrapper.find(Input).simulate('change');
             expect(wrapper.find(Input).props().inputId).toBe();
          })
    });