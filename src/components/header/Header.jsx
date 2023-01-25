import { Link } from "react-router-dom"
import './header.css'
function Header(){
    return (
      <nav className="navWrap">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            
          </ul>
      </nav>
    )
}

export default Header;