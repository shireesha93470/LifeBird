// actions/authActions.js
import axios from 'axios';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from './action';

const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signupSuccess = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signup = (userData) => {
  return (dispatch) => {
    dispatch(signupRequest());

    
    axios.post('http://localhost:8080/api/v1/doctors', userData)
      .then((response) => {
        dispatch(signupSuccess(response.data));
      })
      .catch((error) => {
        dispatch(signupFailure(error.message));
      });
  };
};
