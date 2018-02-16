import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const rootReducer = (combineReducers({ user: userReducer }));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

export default store;

