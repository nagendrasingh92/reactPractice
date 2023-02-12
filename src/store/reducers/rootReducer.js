import { combineReducers } from 'redux';

import { counter } from './counter';

import { weather } from "./weather";

import { array } from './arrayOfObjects';

import { todoLists } from './todoLists';


const rootReducer = combineReducers({
    counter,
    weather,
    array,
    todoLists
});

export default rootReducer;