import {Reducer} from 'redux';
import {
	deleteTodoAction,
	markCompleteAction,
	markIncompleteAction,
} from "types/actionsType";
import { complete } from "types/storeType";

const initialState: complete = [];


const completeReducer: Reducer<complete, deleteTodoAction | markCompleteAction | markIncompleteAction> = (state = initialState, action) => {
    switch (action.type){
        case 'MARK_COMPLETE' :
             return [...state, action.todo];
        case 'MARK_INCOMPLETE' :
        case 'DELETE_TODO' :
             return [...state.filter((todo => todo !== action.todo))]
        default : 
             return [...state];
    }
}

export default completeReducer;