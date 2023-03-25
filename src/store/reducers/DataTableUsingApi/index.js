import { arrayConstants } from './actions';

export function array (state = { arrayData: [] }, action) {
    switch (action.type) {
        case arrayConstants.UPDATE:
            return {...state, arrayData: action.payload };
        case arrayConstants.RESET:
            return { arrayData: [] };
        default:
            return state
    }
}