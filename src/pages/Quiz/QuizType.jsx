import { useState } from 'react';
import Button from '@mui/material/Button';
import './quizDashboard.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



function QuizType() {
    const navigate = useNavigate();
    const { authenticateUser } = useSelector((state) => state.authenticate);
    const [expanded, setExpanded] = useState('');
    const [slectedQuiz, setSlectedQuiz] = useState(null);
    const category = [
        {
            id: 1,
            type: 'HTML',
            levels: [
                {
                    id: 1,
                    title: 'Easy'
                },
                {
                    id: 2,
                    title: 'Medium'
                },
                {
                    id: 3,
                    title: 'Hard'
                }
            ]
        },
        {
            id: 2,
            type: 'CSS3',
            levels: [
                {
                    id: 1,
                    title: 'Easy'
                },
                {
                    id: 2,
                    title: 'Medium'
                },
                {
                    id: 3,
                    title: 'Hard'
                }
            ]
        },
        {
            id: 3,
            type: 'JAVA SCRIPT',
            levels: [
                {
                    id: 1,
                    title: 'Easy'
                },
                {
                    id: 2,
                    title: 'Medium'
                },
                {
                    id: 3,
                    title: 'Hard'
                }
            ]
        }
    ]
    const handleChange = (id) => {
        setExpanded(id)
    }
    const handleLevelSelect = (id, subId) => {
        console.log('id, subId', id, subId)
        console.log('userid', authenticateUser)
        setSlectedQuiz({ id, subId })
    }
    const handleNavigate = () => {
        const {
            id = '',
            subId = ''
        } = slectedQuiz;
        if (id, subId) {
            navigate(`/quizDashboard/${id}/${subId}`)
        }
    }
    return (
        <div className='quizDashboardWrap'>
            <div className='userDetailsWrap'>
                <div className='userDetail'>User Details</div>
                <div>Username: {authenticateUser.name}</div>
                <div>Email-Id: {authenticateUser.email}</div>
            </div>
            
            {category.length > 0 && category.map((item) => {
                return (
                    <div>
                        <Accordion key={item.id} expanded={expanded === item.id} onChange={() => handleChange(item.id)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {item.type}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {item.levels.map((subItem) => {
                                    return (
                                        <Typography key={subItem.id} onClick={() => handleLevelSelect(item.id, subItem.id)}>
                                            <div className={`${(slectedQuiz?.id === item.id && slectedQuiz?.subId === subItem.id) ? 'active' : ''}`}>
                                                {subItem.title}
                                            </div>
                                        </Typography>
                                    )
                                })}
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}
            <Button onClick={() => handleNavigate()} variant="contained">Start Quiz</Button>
        </div>
    );
}

export default QuizType;