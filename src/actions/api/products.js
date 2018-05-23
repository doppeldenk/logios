import axios from 'axios';
import { apiURL } from '../../constants';

export const get = params => axios.get(`${apiURL}/products`, params);
export const post = params => axios.post(`${apiURL}/products`, params);
export const patch = (id, params) => axios.patch(`${apiURL}/products/${id}`, params);
export const del = id => axios.delete(`${apiURL}/products/${id}`);
