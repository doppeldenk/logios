import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { promise } from 'redux-promise-middleware';

import reducers from './reducers';

const middleware = applyMiddleware(thunk, promise());

export default createStore(reducers, middleware);
