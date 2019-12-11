import { GET_TODAY, SEARCH_SUCCESS } from '../actions/types';

const initialState = {
  results: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TODAY:
      return {
        ...state,
        results: payload,
        loading: false
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: payload,
        loading: false
      };
    default:
      return state;
  }
}
