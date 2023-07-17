import { createSlice } from '@reduxjs/toolkit';

const todoListsSlice = createSlice({
    name: 'todoLists',
    initialState: {
        todoData: [],
    },
    reducers: {
        getUserTask: (state, action) => {
            return state.todoData.filter((item) => item.userId === action.payload);
        },
        updateTodoData: (state, action) => {
            debugger;
            let data = action.payload;
            console.log('data',data);
            let isNew = true;
            let task = state.todoData?.map((item) => {
                if(item.id === data.id ){
                    item = data;
                    isNew = false
                };
                return item
            })

            if(isNew){
                task.push(data);
            }
            state.todoData = task
        },
    },
});

export const { updateTodoData } = todoListsSlice.actions;
export default todoListsSlice.reducer;