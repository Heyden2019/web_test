import {applyMiddleware, combineReducers, createStore} from "redux";
import SearchInfoReducer from "./searchInfo-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    SearchInfoPage: SearchInfoReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;