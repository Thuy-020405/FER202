export const initialState = {
    currentQuestion: 0,
    score: 0,
    isFinished: false
};

export function quizReducer(state, action) {
    switch (action.type) {

        case 'ANSWER': 
            const nextQuestion = state.currentQuestion + 1;
            return {
                ...state,
                score: action.isCorrect ? state.score + 1 : state.score,
                currentQuestion: nextQuestion,
                isFinished: nextQuestion >= action.total 
            };
        
        case 'RESTART': 
            return initialState;
            
        default:
            return state;
    }
}