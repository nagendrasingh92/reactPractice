import { counterConstants } from './actions';

export function counter(state = { counterCount: 0 }, action) {
    switch (action.type) {
        case counterConstants.UPDATE:
            return {...state, counterCount: action.payload };
        case counterConstants.RESET:
            return { counterCount: 0 };
        default:
            return state
    }
}