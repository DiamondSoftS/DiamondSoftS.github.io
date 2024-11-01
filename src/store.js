import {createStore, combineReducers} from 'redux'
import storeReducer from "./reducer"
import searchReducer from './searchReducer'

const reducer = combineReducers({
    tienda: storeReducer,
    searchTerm: searchReducer,
});

const store = createStore(reducer);
export default store;
