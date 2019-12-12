import axios from 'axios';
import { SEARCH_SUCCESS, SEARCH_FAIL, GET_TODAY } from './types';

export const submitSearch = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    console.log('Data:', formData);
    const res = await axios.post('/api/search', formData, config);

    dispatch({
      type: SEARCH_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getTodaysInfo = (formData) => async (dispatch) => {
  try {
    const res = await axios.get('/api/search/today');
    console.log('res: ', res);

    dispatch({
      type: GET_TODAY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
