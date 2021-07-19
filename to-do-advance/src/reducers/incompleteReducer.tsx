import {Reducer} from 'redux';
import {
	deleteTodoAction,
	markCompleteAction,
	markIncompleteAction,
} from "types/actionsType";
import { incomplete } from "types/storeType";

const initialState: incomplete = [];


const incompleteReducer: Reducer<incomplete, deleteTodoAction | markCompleteAction | markIncompleteAction> = (state = initialState, action) => {
    switch (action.type){
        case 'MARK_COMPLETE' :
             return [...state.filter((todo => todo !== action.todo))]
        case 'MARK_INCOMPLETE' :
             return [...state, action.todo];
        case 'DELETE_TODO' :
             
        default : 
             return [...state];
    }
}

export default incompleteReducer;