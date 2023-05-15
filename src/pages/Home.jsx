import { Link } from "react-router-dom"
import './home.css'
import developer from "../assets/image/developer.jpg"
import bootstrapIcon from "../assets/image/bootstrapIcon.svg"
import calculator from "../assets/image/calculator.jpg"
import findString from "../assets/image/findString.jpg"
import htmlIcon from "../assets/image/htmlIcon.svg"
import vscodeIcon from "../assets/image/vscodeIcon.svg"
import sassIcon from "../assets/image/sassIcon.svg"
import cssIcon from "../assets/image/cssIcon.svg"
import githubIcon from "../assets/image/githubIcon.svg"
import gitIcon from "../assets/image/gitIcon.svg"
import jsOfficialIcon from "../assets/image/jsOfficialIcon.svg"
import reactIcon from "../assets/image/reactIcon.svg"
import NumberGame from "../assets/image/NumberGame.jpg"
import todoList from "../assets/image/todoList.jpg"
import weatherUpdate from "../assets/image/weatherUpdate.jpg"
import productPage from "../assets/image/productPage.jpg"
import quizPage from "../assets/image/quiz.png"
import loginSingup from "../assets/image/loginSingup.png"
import adminImage from "../assets/image/adminImage.jpg"
import contractImage from "../assets/image/contractPage.jpg"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Home() {
    const { authenticateUser } = useSelector((state) => state.authenticate);
    const navigate = useNavigate();

    const cardArray =
        [
            {
                id: '1',
                src: adminImage,
                cardHeader: 'Admin Portal',
                operation: 'Operation:- To review user info',
                previewLink: '/adminPortal',
                codeLink: 'https://github.com/nagendrasingh92/reactPractice/tree/dev/src/pages',
                tech: 'html, css, reactJs',
            },
            {
                id: '2',
                src: calculator,
                cardHeader: 'Calculator',
                operation: 'Operation:- Add, Subtract, Multiply, Divide.',
                previewLink: '/calculator',
                codeLink: 'https://github.com/nagendrasingh92/reactPractice/tree/dev/src/pages/calculator',
                tech: 'html, css, reactJs',
            },
            {
                id: '3',
                src: NumberGame,
                cardHeader: 'Number Game',
                operation: 'Operation:- Arrange numbers from 1 to 15.',
                previewLink: '/numberGame',
                codeLink: 'https://github.com/nagendrasingh92/reactPractice/tree/dev/src/pages/numberGame',
                tech: 'html, css, reactJs'
            },
            {
                id: '4',
                src: todoList,
                cardHeader: 'To-do Lists',
                operation: 'Operation:- Add, Delete, Edit task.',
                previewLink: '/todoListsRedux',
                codeLink: 'https://github.com/nagendrasingh92/reactPractice/tree/dev/src/pages/todoList',
                tech: 'html, css, reactJs'
            },
            {
                id: '5',
                src: weatherUpdate,
                cardHeader: 'Weather find',
                operation: 'Operation:- Display temperature, description, humidity, wind speed.',
                previewLink: '/weather',
                codeLink: 'https://github.com/nagendrasingh92/reactPractice/tree/dev/src/pages/weatherSearch',
                tech: 'html, css, reactJs'
            },

            {
                id: '6',
                src: findString,
                cardHeader: 'Data Table using API',
                operation: 'Operation:- Fetch data table from APIs and place a search box.',
                previewLink: '/DataTableUsingApi',
                codeLink: 'https://github.com/nagendrasingh92/reactPractice/tree/dev/src/pages/dataTable',
                tech: 'html, css, reactJs'
            },
            {
                id: '7',
                src: productPage,
                cardHeader: 'Product display',
                operation: 'Operation:- Add product to wishList',
                previewLink: '/productPageRedux',
                codeLink: 'https://github.com/nagendrasingh92/reactPractice/tree/dev/src/pages/productDisplay',
                tech: 'html, css, reactJs'
            },
            {
                id: '8',
                src: loginSingup,
                cardHeader: 'Login and signup',
                operation: 'Operation:- Add product to wishList',
                previewLink: '/loginPage',
                codeLink: 'https://github.com/nagendrasingh92/reactPractice/tree/dev/src/pages/authentication',
                tech: 'html, css, reactJs'
            },
            {
                id: '9',
                src: quizPage,
                cardHeader: 'Quiz',
                operation: 'Operation:- A simple quiz with score card',
                previewLink: '/quizDashboard',
                codeLink: 'https://github.com/nagendrasingh92/reactPractice/tree/dev/src/pages/Quiz',
                tech: 'html, css, reactJs'
            },
            {
                id: '10',
                src: contractImage,
                cardHeader: 'Contract Automation',
                operation: 'Operation:- Add, Delete customer and contract',
                previewLink: 'https://nagendrasingh92.github.io/contractAutomation',
                codeLink: 'https://github.com/nagendrasingh92/contractAutomation',
                tech: 'html, css, reactJs'
            }
        ];

    const handleUser = (item, redirect = '') => {
        console.log('value', item)
        switch (item) {
            case 'logIn': {
                navigate(`/loginPage?redirect=${redirect}`)
                break;
            }
            default: {
                break;
            }
        }
    }
    return (
        <>
            <div className="sectionTwo" id="about">
                <div className="intro">
                    <div>Hi👋,</div>
                    <div>My name is </div>
                    <div><span className="name">Nagendra Singh Chauhan</span></div>
                    <div>I am a web developer.</div>
                </div>
                <div className="developerImage">
                    <div className="imageWrap">
                        <img src={developer} alt="developer" />
                    </div>
                </div>
            </div>
            <div className="sectionThree" id="tech-stack">
                <div className="sectionHead">
                    My Tech Stack
                </div><br />
                <div className="sectionThreeDescription">
                    Technologies I've been working with recently.
                </div>
                <div className="sectionThreeLogo">
                    <img src={vscodeIcon} alt="Vs Code" />
                    <img src={htmlIcon} alt="Html" />
                    <img src={sassIcon} alt="Sass" />
                    <img src={cssIcon} alt="Css" />
                    <img src={bootstrapIcon} alt="BootStrap" />
                    <img src={githubIcon} alt="Git Hub" />
                    <img src={gitIcon} alt="Git" />
                    <img src={jsOfficialIcon} alt="JavaScript" />
                    <img src={reactIcon} alt="react" />
                </div>
            </div>

            <div className="sectionFour" id="projects">
                <div className="sectionFourTitleWrap">
                    <div className="sectionHead">
                        Projects
                    </div>
                    <div className="sectionFourDescription">
                    </div>
                </div>
                <div className="sectionFourCardWrap">

                    {
                        cardArray.map((item, index) => {
                            return (
                                <div className="colWrap" key={index}>
                                    <div className="cardBorder">
                                        <div className="cardImage">
                                            <img src={item.src} alt={item.cardHeader} />
                                        </div>
                                        <div className="cardContent">
                                            <div className="cardHeader">{item.cardHeader}</div>
                                            <div className="operation">{item.operation}</div>
                                            <div><span>Tech Stack:-</span>{item.tech}</div>
                                        </div>
                                        <div className="cardFooter">
                                            {authenticateUser == null ? (<div onClick={() => handleUser('logIn', item.previewLink)}>Live Preview</div>) : (<a href={item.previewLink}><i className="fa-solid fa-link"></i>Live
                                                Preview</a>)}


                                            <a href={item.codeLink} target="_blank"><i className="fa-brands fa-github" alt="view code"></i>View Code</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Home;