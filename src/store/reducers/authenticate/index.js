import { authenticateConstants } from './actions';

const initialData = { 
    userData: [
        {name: 'admin', email: 'admin@g.com', password: '12345678', confirmPassword: '12345678', id: 1},
        {name: 'guest', email: 'guest@g.com', password: '12345678', confirmPassword: '12345678', id: 2}
    ], 
        authenticateUser: null 
};

export default function authenticate(state = initialData, action) {
    switch (action.type) {
        case authenticateConstants.UPDATE_USER_LIST:
            return { ...state, userData: action.payload };
        case authenticateConstants.GET_USER_LIST:
            return state.userData;
        case authenticateConstants.LOGGEDIN_USER_DATA:{
            debugger;
            return { ...state, authenticateUser: action.payload };
        }
        case authenticateConstants.LOGGEDOUT_USER_DATA:
            return { ...state, authenticateUser: null };
        default:
            return state
    }
}