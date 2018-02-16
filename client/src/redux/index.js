import { createStore, combineReducers, applyMiddleware } from 'redux';
import login from './auth';
import thunk from 'redux-thunk';

const rootReducer = (combineReducers({ login }));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

export default store;