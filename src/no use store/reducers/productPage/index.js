import { productPageConstants } from './actions';

export function product(state = { productsData: {} }, action) {
    switch (action.type) {
        case productPageConstants.UPDATE:
            return {...state, productsData: action.payload };
        case productPageConstants.RESET:
            return { productsData: {} };
        default:
            return state
    }
}