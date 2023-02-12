import { weatherConstants } from './actions';

export function weather(state = { weatherData: {} }, action) {
    switch (action.type) {
        case weatherConstants.UPDATE:
            return {...state, weatherData: action.payload };
        case weatherConstants.RESET:
            return { weatherData: {} };
        default:
            return state
    }
}