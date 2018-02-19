import { createStore, combineReducers, applyMiddleware } from 'redux';
import auth from './actions/auth.js';
import thunk from 'redux-thunk';

const rootReducer = (combineReducers({ auth }));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

export default store;