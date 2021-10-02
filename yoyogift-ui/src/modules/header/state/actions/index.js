import { LOGIN, LOGOUT, CREATE_USER } from "./types";
import axiosWrapper from "../../../../apis/axiosCreate";
import axios from "axios";
import { apiURL } from '../../../../config/constants';

export const login = object => {
  return {
    type: LOGIN,
    payload: object
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null
  };
};

export const createUser = userDetails => async dispatch => {
  let userObject = { 
      "id": userDetails.googleId,
      "email": userDetails.email,
      "first_name": userDetails.givenName,
      "last_name": userDetails.familyName,
      "picture":userDetails.imageUrl
    }
  const userExistResponse = await axios.get(`${apiURL}/users?id=${userObject.id}`);
  if(userExistResponse.data.length === 0) {
    const newUserObject = {
      ...userObject, balance_points: 5000
    }
    const response = await axios.post(`${apiURL}/users`, newUserObject);
    dispatch ({
      type: CREATE_USER,
      payload: response.data
    });
  } else {
    //const userExistResponse = await axiosWrapper.delete(`/users/${userObject.id}`);
    login(userExistResponse.data[0]);
    dispatch ({
      type: LOGIN,
      payload: userExistResponse.data[0]
    });
  }

};
