import { quizConstants } from './actions';

export function quiz(state = { quizData: [], quizUserData: [], quizResult: {} }, action) {
    switch (action.type) {
        case quizConstants.UPDATE:
            return { ...state, quizData: action.payload };
        case quizConstants.RESET:
            return { quizData: [] };
        case quizConstants.UPDATE_USER_DATA:
            return { ...state, quizUserData: action.payload };
        case quizConstants.UPDATE_QUIZ_SCORE:
            return { ...state, quizResult: action.payload };
        default:
            return state
    }
}