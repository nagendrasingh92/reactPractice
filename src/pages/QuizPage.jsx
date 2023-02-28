
 import { useState } from 'react';
 const quizQuestion = [
    {
        id: 1,
        title: '',
        options: [
            {
                a: '',
                b: '',
                c: '',
                d: ''
            }],
        correctAns: '',
        userAns: ''
    }
]
function QuizPage () {
    const [currentQuestion, setCurrentQuestion] = useState(0);
   const [quizList, setQuizList] = useState(quizQuestion)


    const handleNext = () => {
        setCurrentQuestion(currentQuestion+1)
    }

    const handlePrev = () => {

    }

    return (
        <>
        <div>Quiz</div>
        
        </>
    )

}

export default QuizPage;