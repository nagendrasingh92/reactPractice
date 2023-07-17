
import { useState, useEffect } from 'react';
import { Button } from "@material-ui/core";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { update, updateUserData, updateQuizScore } from '../../redux/slices/quiz/quizSlice';

import QuestionData from './QuestionData';
import './quizQuestion.scss'
import Timer from '../../components/Timer';
//import { quizConstants } from '../../store/reducers/quiz/actions'

function QuizQuestion() {
    const { authenticateUser } = useSelector((state) => state.authenticate);
    // let t1 = useSelector((state) => state.quiz);
    const { quizUserData } = useSelector((state) => state.quiz);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizList, setQuizList] = useState([])


    useEffect(() => {
        let questionList = QuestionData.filter(
            (item) =>
                item.categoryId === parseInt(params.id) &&
                item.levelId === parseInt(params.subId)
        );
        setQuizList(questionList);
    }, [params.id, params.subId]);

    const handleOption = (selectedOp) => {
        let tempQ = [...quizList];
        console.log('tempQ',tempQ);
        tempQ[currentQuestion].userAns = selectedOp;
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
                let score = 0;
                quizList.forEach((item) => {
                    if (item.userAns === item.correctAns) {
                        score += 1;
                    }
                });
                let quizScoreData = {
                    userId: authenticateUser.id,
                    categoryId: params.id,
                    levelId: params.subId,
                    score: score,
                    totalQuestion: quizList.length,
                    correctQuestion: score,
                };

                let tempUserData = [...quizUserData];
                let tempUserQuizObj = tempUserData.find((item) => (
                    (item.userId === authenticateUser.id) &&
                    (item.categoryId === params.id) &&
                    (item.levelId === params.subId))
                )

                if (tempUserQuizObj && tempUserQuizObj.userId && tempUserQuizObj.score > score) {
                    tempUserData.forEach((item) => {
                        if ((item.userId === authenticateUser.id) &&
                            (item.categoryId === params.id) &&
                            (item.levelId === params.subId)) {
                            item.score = score
                        }
                        return item;
                    })
                } else if (!tempUserQuizObj) {
                    tempUserData.push(quizScoreData);
                }
                dispatch(update(quizList));
                dispatch(updateUserData(tempUserData));
                dispatch(updateQuizScore(quizScoreData));
                setQuizList([]);
                quizScoreData = {};
                navigate(`/quizDashboard/score`);
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
            <Timer totalTime={10} onTimeComplete={handleOperation.bind(null, 'submit')} />
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
                                        <div className={item.userAns === item.options.a ? 'active normal' : 'normal'} onClick={() => handleOption(item.options.a)}>
                                            {item.options.a}
                                        </div>
                                    </div>

                                    <div className='optionWrap'>
                                        <div className='options'>
                                            B.
                                        </div>
                                        <div className={item.userAns === item.options.b ? 'active normal' : 'normal'} onClick={() => handleOption(item.options.b)}>
                                            {item.options.b}
                                        </div>
                                    </div>
                                    <div className='optionWrap'>
                                        <div className='options'>
                                            C.
                                        </div>
                                        <div className={item.userAns === item.options.c ? 'active normal' : 'normal'} onClick={() => handleOption(item.options.c)}>
                                            {item.options.c}
                                        </div>
                                    </div>
                                    <div className='optionWrap'>
                                        <div className='options'>
                                            D.
                                        </div>
                                        <div className={item.userAns === item.options.d ? 'active normal' : 'normal'} onClick={() => handleOption(item.options.d)}>
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
                    <div >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleOperation(`${currentQuestion > 8 ? "submit" : "next"}`)}
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