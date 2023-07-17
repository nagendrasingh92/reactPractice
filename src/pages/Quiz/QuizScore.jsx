 import { useSelector } from 'react-redux';
import './quizScore.scss';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";


function QuizScore() {
    const { quizResult } = useSelector((state) => state.quiz);
    const { quizData } = useSelector((state) => state.quiz);

    return (
        <div className='scoreboarderWrap'>
            <div className='marginForAll'>
            <Link to='/quizDashboard'><Button variant="contained">Go to Quiz dashboard</Button></Link>
            </div>
            <div>
                Total Score : - {quizResult.score}
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Question No.</TableCell>
                                <TableCell align="left">Question</TableCell>
                                <TableCell align="left">Correct Answer</TableCell>
                                <TableCell align="left">User Answer</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {quizData.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{row.id}</TableCell>
                                    <TableCell align="left">{row.questionText}</TableCell>
                                    <TableCell align="left">{row.correctAns}</TableCell>
                                    <TableCell align="left">{row.userAns}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
}

export default QuizScore;