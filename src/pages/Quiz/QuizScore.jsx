
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './quizScore.scss';
import Button from '@mui/material/Button';


function QuizScore() {
    const { quizData } = useSelector((state) => state.quiz);
    const [scoreDisplay, setScoreDisplay] = useState(0);


    const handleScore = () => {
        let score = 0;
        quizData.map((item) => {
            if (item.userAns === item.correctAns)
                score += 1;
        })
        console.log('data', quizData)
        setScoreDisplay(score);
    }
    return (
        <div className='scoreboarderWrap'>
            <Button onClick={() => handleScore()} variant="contained">Click</Button>
            <span> to display your score {scoreDisplay}</span>
        </div>
    );
}

export default QuizScore;