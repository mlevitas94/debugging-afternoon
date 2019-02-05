import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux'

const store =  createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
export default store