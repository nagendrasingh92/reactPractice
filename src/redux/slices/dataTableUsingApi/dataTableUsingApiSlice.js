import { createSlice } from '@reduxjs/toolkit';

const dataTableUsingApiSlice = createSlice({
    name: 'dataTableUsingApi',
    initialState: { arrayData: []},
    reducers: {
        updateData: (state, action) => {
            state.arrayData = action.payload;
        }
    }
});

export const { updateData } = dataTableUsingApiSlice.actions;
export default dataTableUsingApiSlice.reducer;