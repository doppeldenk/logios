import * as api from './api/products';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FULFILLED,
  FETCH_PRODUCTS_REJECTED,
} from '../actions/actionTypes';

export const fetchProducts = (params = {}) => (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS });
  return api.get(params)
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

export const postProduct = (params = {}) => dispatch => (
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
    ))
);
