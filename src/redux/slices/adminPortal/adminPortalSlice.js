import { createSlice, configureStore } from '@reduxjs/toolkit';

// new Redux slice
const adminPortalSlice = createSlice({
    name: 'adminPortal' ,
    initialState: {
        userData: null,
        userList: [],
        open: false,
        editId: '',
    },
    reducers: {
        setUserList: (state, action) => {
            state.userList = action.payload;
        },
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setEditId: (state, action) => {
            state.editId = action.payload;
        },
        addUser: (state, action) => {
            const userEntry = action.payload;
            const temp = state.userList.find((item) => item.email === userEntry.email);

            if (state.editId) {
                state.userList = state.userList.map((item) => {
                    if(item.id === state.editId) {
                        item.firstName = userEntry.firstName;
                        item.lastName = userEntry.lastName;
                        item.email = userEntry.email;
                    }
                    return item;
                });
                state.editId = null;
            } else if (!temp) {
                const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
                state.userList.push({ ...userEntry, id });
            } else {
                alert('Already exist.');
            }
            state.open = false;
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            state.userList = state.userList.filter((item) => item.id !== id);
        },
        resetForm: (state) => {
            state.editId = null;
            state.oprn = false;
        },
    },
});

// Extract the action creators
export const {
    setUserList,
    setOpen,
    setEditId,
    addUser,
    deleteUser,
    resetForm,
} = adminPortalSlice.actions;

export default adminPortalSlice.reducer;
