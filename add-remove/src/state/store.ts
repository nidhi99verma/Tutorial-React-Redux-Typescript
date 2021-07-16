import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/index";
import thunk from 'redux-thunk';

export const store = createStore(
    reducer,
    {},
    applyMiddleware(thunk)
)