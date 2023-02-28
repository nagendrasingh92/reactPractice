import { Link } from "react-router-dom"
import './header.css'
function Header() {
  return (
    <div className="sectionOne">
      <div className="logo">
      <Link to="/">Logo Design</Link>
      </div>
      <div className="linkWrap">
        <div className="pannel">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="directLink">
          <a href="https://github.com/nagendrasingh92/reactPractice" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://twitter.com/nagendraReact" target="_blank"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/nagendra-singh-chauhan-0328091aa" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <i className="fa-solid fa-circle-half-stroke"></i>
        </div>
      </div>
    </div>

  )
}

export default Header;