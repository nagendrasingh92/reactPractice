import { createSlice } from '@reduxjs/toolkit';

const todoListsSlice = createSlice({
    name: 'todoLists',
    initialState: {
        todoData: [],
    },
    reducers: {
        updateTodoData: (state, action) => {
            state.todoData = action.payload;
        },
    },
});

export const { updateTodoData } = todoListsSlice.actions;
export default todoListsSlice.reducer;