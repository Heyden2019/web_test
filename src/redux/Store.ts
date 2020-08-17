import {applyMiddleware, combineReducers, createStore} from "redux";
import SearchInfoReducer from "./searchInfo-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    SearchInfoPage: SearchInfoReducer,
    form: formReducer
});

type RootReducerType = typeof reducers; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store;

export default store;