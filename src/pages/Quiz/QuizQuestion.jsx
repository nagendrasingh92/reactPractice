
import { useState } from 'react';
import QuestionData from './QuestionData';
import './quizQuestion.scss'
import { Button } from "@material-ui/core";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizConstants } from '../../store/reducers/quiz/actions'
import { useDispatch } from 'react-redux';



function QuizQuestion() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    console.log('params', params);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizList, setQuizList] = useState([])


    useEffect(() => {
        let questionList = QuestionData.filter((item) => item.categoryId === parseInt(params.id) && item.levelId === parseInt(params.subId))
        setQuizList(questionList);
    }, [QuestionData])

    const handleOption = (opType) => {
        let tempQ = JSON.parse(JSON.stringify(quizList))
        tempQ[currentQuestion].userAns = opType;
        setQuizList(tempQ);
    }

    const handleOperation = (type) => {
        switch (type) {
            case 'previous': {
                if (currentQuestion > 0) {
                    setCurrentQuestion(currentQuestion - 1)
                }
                break;

            }
            case 'next': {
                if (currentQuestion < (quizList.length - 1)) {
                    setCurrentQuestion(currentQuestion + 1)
                }
                break;
            }
            case 'submit': {
                dispatch({ type: quizConstants.UPDATE, payload: quizList })
                navigate(`/quizDashboard/score`)
                break;

            }
            default:
                break;
        }
    }



    // const handleQuestionNumber = (number) => {
    //     switch (number) {
    //         case 1 : {
    //             setCurrentQuestion(0);
    //             break;
    //         }
    //         case 2 : {
    //             setCurrentQuestion(1);
    //             break;
    //         }
    //         case 3 : {
    //             setCurrentQuestion(2);
    //             break;
    //         }
    //         case 4 : {
    //             setCurrentQuestion(3);
    //             break;
    //         }
    //         default:{
    //             break;
    //         }
    //     }
    // }

    return (
        <div className='quizWrap'>
            <div className='questionContainer'>
                {
                    quizList.filter((item, index) => index === currentQuestion).map((item) => {
                        return (
                            <div className='questionWrap'>
                                <div className='questionTitle'>
                                    {currentQuestion + 1}. {item.questionText}
                                </div>
                                <div className='optionsWrap'>
                                    <div className='optionWrap'>
                                        <div className='options'>
                                            A.
                                        </div>
                                        <div className={item.userAns === 'a' ? 'active normal' : 'normal'} onClick={() => handleOption('a')}>
                                            {item.options.a}
                                        </div>
                                    </div>

                                    <div className='optionWrap'>
                                        <div className='options'>
                                            B.
                                        </div>
                                        <div className={item.userAns === 'b' ? 'active normal' : 'normal'} onClick={() => handleOption('b')}>
                                            {item.options.b}
                                        </div>
                                    </div>
                                    <div className='optionWrap'>
                                        <div className='options'>
                                            C.
                                        </div>
                                        <div className={item.userAns === 'c' ? 'active normal' : 'normal'} onClick={() => handleOption('c')}>
                                            {item.options.c}
                                        </div>
                                    </div>
                                    <div className='optionWrap'>
                                        <div className='options'>
                                            D.
                                        </div>
                                        <div className={item.userAns === 'd' ? 'active normal' : 'normal'} onClick={() => handleOption('d')}>
                                            {item.options.d}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
                <div className='operationWrap'>
                    <div onClick={() => handleOperation('previous')}>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </Button>
                    </div>
                    <div onClick={() => handleOperation(`${currentQuestion > 8 ? "submit" : "next"}`)}>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            {currentQuestion > 8 ? "Submit" : "Next Question"}
                        </Button>
                    </div>
                </div>
            </div>
            {/* <div className='questionBox'>
                <div onClick={()=> handleQuestionNumber(1)}>1</div>
                <div onClick={()=> handleQuestionNumber(2)}>2</div>
                <div onClick={()=> handleQuestionNumber(3)}>3</div>
                <div onClick={()=> handleQuestionNumber(4)}>4</div>
                <div onClick={()=> handleQuestionNumber(5)}>5</div>

            </div> */}
        </div>
    );

}

export default QuizQuestion;