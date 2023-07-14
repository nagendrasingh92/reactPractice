import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: { quizData: [], quizUserData: [], quizResult: {} },
  reducers: {
    update(state, action) {
      state.quizData = action.payload;
    },
    reset(state) {
      state.quizData = [];
    },
    updateUserData(state, action) {
      state.quizUserData = action.payload;
    },
    updateQuizScore(state, action) {
      state.quizResult = action.payload;
    },
  },
});

export const { update, reset, updateUserData, updateQuizScore } = quizSlice.actions;
export default quizSlice.reducer;
