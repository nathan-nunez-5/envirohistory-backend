import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, LOGOUT } from './types';

// Login User
export const login = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:8000/auth/google');

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log('error: ', err);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
