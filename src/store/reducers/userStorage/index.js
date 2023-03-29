import { authenticateConstants } from './actions';

export default function userStorage(state = { userData: [], authenticateUser: null }, action) {
    switch (action.type) {
        case authenticateConstants.UPDATE_USER_LIST:
            return { ...state, userData: action.payload };
        case authenticateConstants.GET_USER_LIST:
            return state.userData;
        case authenticateConstants.LOGGEDIN_USER_DATA:
            return { ...state, authenticateUser: action.payload };
        case authenticateConstants.LOGGEDOUT_USER_DATA:
            return { ...state, authenticateUser: null };
        default:
            return state
    }
}