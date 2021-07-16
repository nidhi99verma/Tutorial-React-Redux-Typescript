import { combineReducers } from "redux";
import bankReducer from './bankReducer';

const reducer = combineReducers({
    bank: bankReducer
});

export default reducer;
export type State = ReturnType<typeof reducer>