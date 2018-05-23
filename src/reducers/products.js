import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
} from '../actions/actionTypes';
import { defaultState } from '../constants';

const initialState = { ...defaultState, payload: [] };

export default (state = initialState, action) => {
  const { payload } = action;
  const newState = { ...state };
  switch (action.type) {
    case FETCH_PRODUCTS:
      newState.fetching = true;
      break;
    case FETCH_PRODUCTS_FULFILLED:
      newState.fetching = false;
      newState.fetched = true;
      newState.payload = payload;
      break;
    case FETCH_PRODUCTS_REJECTED:
      newState.fetching = false;
      newState.error = payload;
      break;
    default: break;
  }
  return newState;
};
