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


function Home() {
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
                    <img src={developer} alt="developer" widht="100rem" height="100rem" />
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
                    <div className="colWrap">
                        <div className="cardBorder">
                            <div className="cardImage">
                                <img src={calculator} alt="Todo List" />
                            </div>
                            <div className="cardContent">
                                <div className="cardHeader">Calculator</div>
                                <div className="operation">Operation:- Add, Subtract, Multiply, Divide</div>
                                <div><span>Tech Stack</span>"html, css, javaScript"</div>
                            </div>
                            <div className="cardFooter">
                            <Link to="/calculator"><a href="/pages/calculator/calculator.html" target="_blank" alt="preview"><i className="fa-solid fa-link"></i>Live
                                    Preview</a></Link>
                                <a href="" target="_blank"><i className="fa-brands fa-github" alt="view code"></i>View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="colWrap">
                        <div className="cardBorder">
                            <div className="cardImage">
                                <img src={NumberGame} alt="Number Game" />
                            </div>
                            <div className="cardContent">
                                <div className="cardHeader">Number game</div>
                                <div className="operation">Operation:- Arrange numbers from 1 to 15.</div>
                                <div><span>Tech Stack</span>"html, css javaScript"</div>
                            </div>
                            <div className="cardFooter">
                            <Link to="/numberGame"><a href="/pages/numberGame/numberGame.html" target="_blank"><i className="fa-solid fa-link"></i>Live
                                    Priview</a></Link>
                                <a href="" target="_blank"><i className="fa-brands fa-github"></i>View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="colWrap">
                        <div className="cardBorder">
                            <div className="cardImage">
                                <img src={todoList} alt="" />
                            </div>
                            <div className="cardContent">
                                <div className="cardHeader">To-do Lists</div>
                                <div className="operation">Operation:-Add, Delete, Edit task.</div>
                                <div><span>Tech Stack</span>"html, css javaScript"</div>
                            </div>
                            <div className="cardFooter">
                            <Link to="/toDoLists"><a href="/pages/todolist/todoList.html" target="_blank"><i className="fa-solid fa-link"></i>Live Priview</a></Link>
                                <a href="" target="_blank"><i className="fa-brands fa-github"></i>View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="colWrap">
                        <div className="cardBorder">
                            <div className="cardImage">
                                <img src={weatherUpdate} alt="" />
                            </div>
                            <div className="cardContent">
                                <div className="cardHeader">Wheather find</div>
                                <div className="operation">Operation:- Display temperature, description, humidity, wind speed.</div>
                                <div><span>Tech Stack</span>"html, css javaScript"</div>
                            </div>
                            <div className="cardFooter">
                                <Link to="/weather"><a href="/pages/weather/weather.html" target="_blank"><i className="fa-solid fa-link"></i>Live Priview</a></Link>

                                <a href="" target="_blank"><i className="fa-brands fa-github"></i>View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="colWrap">
                        <div className="cardBorder">
                            <div className="cardImage">
                                <img src={findString} alt="Find string" />
                            </div>
                            <div className="cardContent">
                                <div className="cardHeader">Array of objects</div>
                                <div className="operation">Operation:- Fetch Data table from APIs and place a search box.</div>
                                <div><span>Tech Stack</span>"html, css javaScript"</div>
                            </div>
                            <div className="cardFooter">
                            <Link to="/arrayOfObjects"><a href="/pages/arrayOfObjects/arrayOfObjects.html" target="_blank"><i className="fa-solid fa-link"></i>Live
                                    Priview</a></Link>
                                <a href="" target="_blank"><i className="fa-brands fa-github"></i>View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="colWrap">
                        <div className="cardBorder">
                            <div className="cardImage">
                                <img src={productPage} alt="Product page" />
                            </div>
                            <div className="cardContent">
                                <div className="cardHeader">Product page</div>
                                <div className="operation">Operation:- Add product to wishList.</div>
                                <div><span>Tech Stack</span>"html, css javaScript"</div>
                            </div>
                            <div className="cardFooter">
                            <Link to="/productPage"><a href="/pages/productPage/productPage.html" target="_blank"><i className="fa-solid fa-link"></i>Live
                                    Priview</a></Link>
                                <a href="" target="_blank"><i className="fa-brands fa-github"></i>View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;