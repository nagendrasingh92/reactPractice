import { combineReducers } from 'redux';

import { counter } from './counter';

import { weather } from "./weather";

import { array } from './arrayOfObjects';

import { todoLists } from './todoLists';

import {product} from './productPage'


const rootReducer = combineReducers({
    counter,
    weather,
    array,
    todoLists,
    product
});

export default rootReducer;