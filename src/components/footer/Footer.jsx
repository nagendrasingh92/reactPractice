import { Link } from "react-router-dom"

import './footer.css'
function Footer() {
    return (
        <div className="sectionFive" id='contact'>
            <div className="contactDetails">
                <div className="contact">
                    +91 7737957798
                </div>
                <div className="contact" id="contact">
                    nagendra.chauhan2001@gmail.com
                </div>
                <div className="contact">
                    <a href="https://github.com/nagendrasingh92/reactPractice" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://twitter.com/nagendraReact" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/nagendra-singh-chauhan-0328091aa" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <i className="fa-solid fa-circle-half-stroke"></i>
                </div>
            </div>
            <div className="footerWrap">
                <div className="footerLinks">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="/#projects">Projects</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footerContent">
                    Designed and built by Nagendra Singh Chauhan.
                </div>
            </div>
        </div>
    )
}

export default Footer;