import { todoListsConstants } from './actions';

export function todoLists(state = { todoData: []}, action) {
    switch (action.type) {
        case todoListsConstants.UPDATE:
            return {...state, todoData: action.payload };
        case todoListsConstants.RESET:
            return { todoData: [] };
        default:
            return state
    }
}