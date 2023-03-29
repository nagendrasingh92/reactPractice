import { combineReducers } from 'redux';

import { counter } from './counter';

import { weather } from "./weather";

import { dataTableUsingApi } from './dataTableUsingApi';

import { todoLists } from './todoLists';

import { product } from './productPage';

import { quiz } from './quiz';

import authenticate from './authenticate';



const rootReducer = combineReducers({
    counter,
    weather,
    dataTableUsingApi,
    todoLists,
    product,
    quiz,
    authenticate
});

export default rootReducer;