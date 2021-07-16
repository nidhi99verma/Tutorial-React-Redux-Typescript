import { ActionType } from '../action-types';
import {Action} from '../actions/index';
const initialState = 0;

//wrong way
// type Action = {
//     type: string,
//     payload?: number
// }

// interface DepositAction {
//     type: 'deposit'
//     payload: number;
// }
// interface WithdrawAction {
//     type: 'withdraw'
//     payload: number;
// }
// interface BankruptAction {
//     type: 'bankrupt'
// }

// type Action = DepositAction | WithdrawAction | BankruptAction;

// const reducer = (state: number = initialState, action: Action) => {
//     switch (action.type) {
//         case 'deposit': return state + action.payload;
//         case 'withdraw': return state - action.payload;
//         case 'bankrupt': return 0;
//         default: state;
//     }
// }

const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.DEPOSIT :
             return state + action.payload;
        case ActionType.WITHDRAW :
             return state - action.payload;
        case ActionType.BANKRUPT :
             return 0;
        default: 
             return state;
    }
}

export default reducer;