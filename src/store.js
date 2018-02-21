import { createStore, combineReducers, applyMiddleware } from 'redux'
import styles from './reducers/style'
import ActiveCuisine from './reducers/active-cuisine'
import thunk from 'redux-thunk'
const reducer = combineReducers({
 styles,
 ActiveCuisine
})
const store = createStore(
 reducer,
 applyMiddleware(thunk)
)
export default store;