import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
} from '../actions/actionTypes';
import { defaultState } from '../constants';

const initialState = { ...defaultState, payload: [] };

export default (currentState, action) => {
  const { payload } = action;
  let state = { ...initialState, ...currentState };
  switch (action.type) {
    case FETCH_PRODUCTS:
      state.fetching = true;
      break;
    case FETCH_PRODUCTS_FULFILLED:
      state.fetching = false;
      state.fetched = true;
      state.payload = payload;
      break;
    case FETCH_PRODUCTS_REJECTED:
      state.fetching = false;
      state.error = payload;
      break;
    default:
      state = currentState;
      break;
  }
  return state;
};
