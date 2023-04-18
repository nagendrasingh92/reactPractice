import { useState } from 'react';
import './quizDashboard.scss'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function QuizDashboard() {
    const { quizUserData } = useSelector((state) => state.quiz);
    const { authenticateUser } = useSelector((state) => state.authenticate);
    const [chartResult, setChartResult] = useState({ easy: 0, medium: 0, hard: 0 });
    const [selectedTechnology, setSelectedTechnology] = useState();
    console.log('quizUserData', quizUserData)

    const handleChange = (type) => {

        console.log('type', type)
        switch (type) {
            case 1: {
                let chartUserTemp1 = quizUserData.find((item) => (
                    (item.userId === authenticateUser.id) &&
                    (item.categoryId === '1') &&
                    (item.levelId === '1'))
                )
                let chartUserT = quizUserData.find((item) => (
                    (item.userId === authenticateUser.id)
                    )
                )
                console.log('chartUserT',chartUserT)
                let chartUserTemp2 = quizUserData.find((item) => (
                    (item.userId === authenticateUser.id) &&
                    (item.categoryId === '1') &&
                    (item.levelId === '2'))
                )
                console.log('chartUserT2',chartUserTemp2)
                console.log('quizUserData',quizUserData)

                let chartUserTemp3 = quizUserData.find((item) => (
                    (item.userId === authenticateUser.id) &&
                    (item.categoryId === '1') &&
                    (item.levelId === '3'))
                )
                if (chartUserTemp1 && chartUserTemp2 && chartUserTemp3) {
                    let objTemp2 = { ...chartResult, easy: chartUserTemp1.score, medium: chartUserTemp2.score, hard: chartUserTemp3.score };
                    setChartResult(objTemp2)
                    console.log('objTemp', objTemp2)
                } else {
                    let objTemp2 = { ...chartResult, easy: 0, medium: 0, hard: 0 };
                    setChartResult(objTemp2)
                }
                break;
            }
            case 2: {
                let chartUserTemp1 = quizUserData.find((item) => (
                    (item.userId === authenticateUser.id) &&
                    (item.categoryId === '2') &&
                    (item.levelId === '1'))
                )
                let chartUserTemp2 = quizUserData.find((item) => (
                    (item.userId === authenticateUser.id) &&
                    (item.categoryId === '2') &&
                    (item.levelId === '2'))
                )
                let chartUserTemp3 = quizUserData.find((item) => (
                    (item.userId === authenticateUser.id) &&
                    (item.categoryId === '2') &&
                    (item.levelId === '3'))
                )
                if (chartUserTemp1 && chartUserTemp2 && chartUserTemp3) {
                    let objTemp2 = { ...chartResult, easy: chartUserTemp1.score, medium: chartUserTemp2.score, hard: chartUserTemp3.score };
                    setChartResult(objTemp2)
                    console.log('objTemp1', objTemp2)
                } else {
                    let objTemp2 = { ...chartResult, easy: 0, medium: 0, hard: 0 };
                    setChartResult(objTemp2)
                }
                break;
            }
            case 3: {
                let chartUserTemp1 = quizUserData.find((item) => (
                    (item.userId === authenticateUser.id) &&
                    (item.categoryId === '3') &&
                    (item.levelId === '1'))
                )
                let chartUserTemp2 = quizUserData.find((item) => (
                    (item.userId === authenticateUser.id) &&
                    (item.categoryId === '3') &&
                    (item.levelId === '2'))
                )
                let chartUserTemp3 = quizUserData.find((item) => (
                    (item.userId === authenticateUser.id) &&
                    (item.categoryId === '3') &&
                    (item.levelId === '3'))
                )
                if (chartUserTemp1 && chartUserTemp2 && chartUserTemp3) {
                    let objTemp2 = { ...chartResult, easy: chartUserTemp1.score, medium: chartUserTemp2.score, hard: chartUserTemp3.score };
                    setChartResult(objTemp2)
                    console.log('objTemp2', objTemp2)
                } else {
                    let objTemp2 = { ...chartResult, easy: 0, medium: 0, hard: 0 };
                    setChartResult(objTemp2)
                }
                break;
            }
            default:
                break;
        }

    }

    const data = {
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
            {
                label: 'Score',
                data: [chartResult.easy, chartResult.medium, chartResult.hard],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    return (
        <div className='quizDashboardWrap'>
            <div className='userDetailsWrap'>
                <div className='userDetail'>User Details</div>
                <div>Username: {authenticateUser.name}</div>
                <div>Email-Id: {authenticateUser.email}</div>
            </div>
            <div>
                <div>Score Board</div>
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Serial No.</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell align="left">Easy</TableCell>
                                    <TableCell align="left">Medium</TableCell>
                                    <TableCell align="left">Hard</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">1</TableCell>
                                    <TableCell align="left">HTML</TableCell>
                                    <TableCell align="left">{chartResult.easy}</TableCell>
                                    <TableCell align="left">{chartResult.medium}</TableCell>
                                    <TableCell align="left">{chartResult.hard}</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">1</TableCell>
                                    <TableCell align="left">CSS3</TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">1</TableCell>
                                    <TableCell align="left">JAVA SCRIPT</TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div>
                <div>Category Chart</div>
                <div>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="selectedTechnology"
                                value={selectedTechnology}
                                label="Select Category"
                                onChange={(event) => handleChange(event.target.value)}
                            >

                                <MenuItem value={1}>HTML</MenuItem>
                                <MenuItem value={2}>CSS3</MenuItem>
                                <MenuItem value={3}>JAVA SCRIPT</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <div
                style={
                    {
                        padding: '20px',
                        width: '80%'
                    }
                }
            >
                <Bar

                    data={data}
                // options={options}
                >

                </Bar>
            </div>

            <Link to='/quizType'><Button variant="contained">Go to Quiz</Button></Link>
        </div>

    );
}

export default QuizDashboard;