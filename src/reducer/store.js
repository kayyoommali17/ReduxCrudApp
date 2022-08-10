import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '.';

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;