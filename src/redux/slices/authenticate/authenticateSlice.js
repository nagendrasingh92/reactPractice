import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: [
        {name: 'admin', email: 'admin@g.com', password: '12345678', confirmPassword: '12345678', id: 1},
        {name: 'guest', email: 'guest@g.com', password: '12345678', confirmPassword: '12345678', id: 2}
    ], 
        authenticateUser: null 
};

const authenticateSlice = createSlice({
    name: 'authenticate' ,
    initialState,
    reducers: {
        updateUserList: (state, action) => {
            state.userData = action.payload;
        },
        getUserList: (state) => {
            return state.userData;
        },
        loggedInUserData: (state, action) => {
            state.authenticateUser = action.payload;
        },
        loggedOutUserData: (state) => {
            state.authenticateUser = null;
        }
    }
});

export const {
    updateUserList,
    getUserList,
    loggedInUserData,
    loggedOutUserData
} = authenticateSlice.actions;

export default authenticateSlice.reducer;