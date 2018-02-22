import { createStore, combineReducers, applyMiddleware } from 'redux';
import auth from './actions/auth.js';
import flash from './actions/flash.js';
import cuisine from './actions/cuisine.js';
import thunk from 'redux-thunk';

const rootReducer = (combineReducers({ auth, flash, cuisine }));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

export default store;