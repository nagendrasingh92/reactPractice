import { quizConstants } from './actions';

export function quiz(state = { quizData: [], quizUserData: [], quizResult: {} }, action) {
    switch (action.type) {
        case quizConstants.UPDATE:
            return {...state, quizData: action.payload };
        case quizConstants.RESET:
            return { quizData: [] };
        default:
            return state
    }
}