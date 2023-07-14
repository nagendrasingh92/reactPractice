import { combineReducers } from '@reduxjs/toolkit';
import authenticateReducer from '../slices/authenticate/authenticateSlice';
import weatherReducer from '../slices/weather/weatherSlices'
import dataTableUsingApiReducer from '../slices/dataTableUsingApi/dataTableUsingApiSlice';
import productPageReducer from '../slices/productPage/productPageSlice';
import todoListsReducer from '../slices/todoList/todoListsSlice';
import quizReducer from '../slices/quiz/quizSlice';
const rootReducer = combineReducers({
    authenticate: authenticateReducer,
    weather: weatherReducer,
    dataTableUsingApi: dataTableUsingApiReducer,
    productPage: productPageReducer,
    todo: todoListsReducer,
    quiz: quizReducer,
});

export default rootReducer;