
//import { useState } from 'react';
//import QuestionData from './Quiz/QuestionData.jsx';
import Start from '../components/quiz/Start'
import Result from '../components/quiz/Result';
import QuizHolder from '../context/QuizHolder';
import Quiz from '../components/quiz/Quiz';
import { QuizContext } from '../context/QuizHolder';
import { useContext } from 'react';

function QuizPage() {
    const { start, exit } = useContext(QuizContext);

    /*const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizList, setQuizList] = useState(QuestionData)


    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1)
    }

    const handlePrev = () => {

    }*/

    return (
        <QuizHolder>
            {
                start === true
                ?
                <Quiz />
                :
                <Start />
            }
            <Result />
        </QuizHolder>
    )

}

export default QuizPage;