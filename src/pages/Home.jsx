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



function Home() {
    const cardArray
        =
        [{
            id: '1',
            src: calculator,
            cardHeader: 'Calculator',
            operation: 'Operation:- Add, Subtract, Multiply, Divide.',
            link: '/calculator'
        },

        {
            id: '2',
            src: NumberGame,
            cardHeader: 'Number Game',
            operation: 'Operation:- Arrange numbers from 1 to 15.',
            link: '/numberGame'
        },

        {
            id: '3',
            src: todoList,
            cardHeader: 'To-do Lists',
            operation: 'Operation:- Add, Delete, Edit task.',
            link: '/todoLists'
        },

        {
            id: '4',
            src: weatherUpdate,
            cardHeader: 'Weather find',
            operation: 'Operation:- Display temperature, description, humidity, wind speed.',
            link: '/weather'
        },

        {
            id: '5',
            src: findString,
            cardHeader: 'Data Table using API',
            operation: 'Operation:- Fetch data table from APIs and place a search box.',
            link: '/DataTableUsingApi'
        },

        {
            id: '6',
            src: productPage,
            cardHeader: 'Product display',
            operation: 'Operation:- Add product to wishList',
            link: '/productPageRedux'
        },

        {
            id: '7',
            src: productPage,
            cardHeader: 'Login and signup',
            operation: 'Operation:- Add product to wishList',
            link: '/loginPage'
        },

        {
            id: '8',
            src: quizPage,
            cardHeader: 'Quiz',
            operation: 'Operation:- A simple quiz with score card',
            link: '/quiz'
        }
        ];

    return (
        <>
            <div className="sectionTwo" id="about">
                <div className="intro">
                    Hi👋,<br />
                    My name is <br />
                    <span className="name">Nagendra Singh Chauhan<br />
                    </span>
                    I am a web developer.
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
                                            <div><span>Tech Stack:-</span> html, css, reactJs</div>
                                        </div>
                                        <div className="cardFooter">
                                            <Link to={item.link}><i className="fa-solid fa-link"></i>Live
                                                Preview</Link>
                                            <a href="#1" target="_blank"><i className="fa-brands fa-github" alt="view code"></i>View Code</a>
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