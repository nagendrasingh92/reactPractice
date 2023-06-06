import { authenticateConstants } from './actions';

export default function authenticate(state = { userData: [{name: 'admin', email: 'admin@g.com', password: '12345678', confirmPassword: '12345678', id: 1},{name: 'guest', email: 'guest@g.com', password: '12345678', confirmPassword: '12345678', id: 2}], authenticateUser: null }, action) {
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