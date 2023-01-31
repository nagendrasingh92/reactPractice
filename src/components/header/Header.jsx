import { Link } from "react-router-dom"
import './header.css'
function Header() {
  return (
    <div className="sectionOne">
      <div className="logo">
        Logo Design
      </div>
      <div className="linkWrap">
        <div className="pannel">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="directLink">
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-solid fa-circle-half-stroke" onclick=""></i>
        </div>
      </div>
    </div>

  )
}

export default Header;