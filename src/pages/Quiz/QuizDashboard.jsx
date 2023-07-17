import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
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
import Select from '@mui/material/Select';
import QuizType from './QuizType';
import './quizDashboard.scss'

import {
    Chart as ChartIcon,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import UserDetails from '../../components/userDetails';


ChartIcon.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function QuizDashboard() {
    const quizUserData = useSelector((state) => state.quiz.quizUserData);
    const { authenticateUser } = useSelector((state) => state.authenticate);
    const [chartResult, setChartResult] = useState([]);
    const [selectedTechnology, setSelectedTechnology] = useState('');
    const [graphData, setGraphData] = useState(null)
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        if (chartResult) {
            const categoryListTemp = chartResult?.map((item) => {
                return {
                    title: item.title,
                    value: item.categoryId,
                }
            })
            setCategoryList(categoryListTemp)
        }
    }, [chartResult]);
    // useEffect(( ) => {
    //     if(chartResult){
    //         const data = {
    //             labels: ['Easy', 'Medium', 'Hard'],
    //             datasets: [
    //                 {
    //                     label: 'Score',
    //                     data: [chartResult.easy, chartResult.medium, chartResult.hard],
    //                     backgroundColor: 'aqua',
    //                     borderColor: 'black',
    //                     borderWidth: 1,
    //                 }
    //             ]
    //         }
    //         setGraphData(data)
    //     }
    // }, [chartResult])


    useEffect(() => {
        let userdata = quizUserData.filter((item) => item.userId === authenticateUser.id) || [];
        let chartDataListTemp = [];

        userdata.forEach((item) => {
            const existingCategoryIndex = chartDataListTemp.findIndex((chartData) => chartData.categoryId === item.categoryId);

            if (existingCategoryIndex !== -1) {
                chartDataListTemp[existingCategoryIndex] = {
                    categoryId: item.categoryId,
                    title: item.categoryId === '1' ? 'html' : item.categoryId === '2' ? 'css' : 'Javascript',
                    data: getChartData(item.categoryId)
                };
            } else {
                chartDataListTemp.push({
                    categoryId: item.categoryId,
                    title: item.categoryId === '1' ? 'html' : item.categoryId === '2' ? 'css' : 'Javascript',
                    data: getChartData(item.categoryId)
                });
            }
        });
        setChartResult(chartDataListTemp);
    }, [quizUserData])

    const handleChange = (type) => {
        let tempData = chartResult.find((item) => item.categoryId === type)
        if (tempData && tempData.data) {
            const gData = {
                labels: ['Easy', 'Medium', 'Hard'],
                datasets: [
                    {
                        label: 'Score',
                        data: [tempData.data.easy, tempData.data.medium, tempData.data.hard],
                        backgroundColor: 'aqua',
                        borderColor: 'black',
                        borderWidth: 1,
                    }
                ]
            }
            setGraphData(gData)
        }
    }

    const getChartData = (type) => {
        let chartResultTemp = { easy: 0, medium: 0, hard: 0 };
        let catergoryData = quizUserData.filter((item) => item.categoryId === type && item.userId === authenticateUser.id);
        catergoryData.forEach((item) => {
            switch (item.levelId) {
                case '1':
                    chartResultTemp = { ...chartResultTemp, easy: item.score }
                    break;
                case '2':
                    chartResultTemp = { ...chartResultTemp, medium: item.score }
                    break;
                case '3':
                    chartResultTemp = { ...chartResultTemp, hard: item.score }
                    break;
                default:
                    break;
            }
        })
        return chartResultTemp
    }

    return (
        <div className='quizDashboardWrap'>
            <div className='scoreWrap'>
                <QuizType />
                <div className='title'>Score Board</div>
                <div>
                    {chartResult &&
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

                                    {chartResult && chartResult.map((item, index) => {
                                        return (
                                            <TableRow
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                key={index}
                                            >
                                                <TableCell align="left">{index + 1 }</TableCell>
                                                <TableCell align="left">{item.title}</TableCell>
                                                <TableCell align="left">{item.data.easy}</TableCell>
                                                <TableCell align="left">{item.data.medium}</TableCell>
                                                <TableCell align="left">{item.data.hard}</TableCell>
                                            </TableRow>
                                        )
                                    })}

                                    {/* <TableRow
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
                                        <TableCell align="left">2</TableCell>
                                        <TableCell align="left">CSS3</TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left"></TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">3</TableCell>
                                        <TableCell align="left">JAVA SCRIPT</TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left"></TableCell>
                                    </TableRow> */}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </div>
                <div className='title'>Category Chart</div>
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

                                {categoryList && categoryList.map((item, index) => {
                                    return <MenuItem key={item.index} value={item.value}>{item.title}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </div>


                <div style={{ padding: '20px', width: '80%' }}>
                    {graphData && <Bar data={graphData} />}
                </div>
            </div>
            <UserDetails />
        </div>

    );
}

export default QuizDashboard;