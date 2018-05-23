import * as api from './api/products';
import {
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
} from '../actions/actionTypes';

export const fetch = (params = {}) => (dispatch) => {
  api.get(params)
    .then(response => (
      dispatch({
        type: FETCH_PRODUCTS_FULFILLED,
        payload: response.data,
      })
    ))
    .catch(error => (
      dispatch({
        type: FETCH_PRODUCTS_REJECTED,
        payload: error,
      })
    ));
};

export const post = (params = {}) => (dispatch) => {
  api.post(params)
    .then(response => (
      dispatch({
        type: FETCH_PRODUCTS_FULFILLED,
        payload: response.data,
      })
    ))
    .catch(error => (
      dispatch({
        type: FETCH_PRODUCTS_REJECTED,
        payload: error,
      })
    ));
};
