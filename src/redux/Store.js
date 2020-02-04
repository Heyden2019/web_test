import {combineReducers, createStore} from "redux";
import SearchInfoReducer from "./searchInfo-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    SearchInfoPage: SearchInfoReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;

export default store;