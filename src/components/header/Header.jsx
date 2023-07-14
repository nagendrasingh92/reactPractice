import { Link, useNavigate } from "react-router-dom";
import './header.css';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { loggedOutUserData } from '../../redux/slices/authenticate/authenticateSlice';

//import { authenticateConstants } from '../../store/reducers/authenticate/actions';


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authenticateUser } = useSelector((state) => state.authenticate);
  console.log('valuess', authenticateUser)
  const handleUser = (item) => {
    console.log('value', item)
    switch (item) {
      case 'logIn': {
        navigate('/loginPage');
        break;
      }
      default: {
        dispatch((loggedOutUserData()));
        navigate('/');
        break;
      }
    }
  };
  return (
    <div className="sectionOne">
      <div className="logo">
        <Link to="/">Portfolio</Link>
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
          <a href="https://github.com/nagendrasingh92/reactPractice" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://twitter.com/nagendraReact" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/nagendra-singh-chauhan-0328091aa" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          <i className="fa-solid fa-circle-half-stroke"></i>
          {authenticateUser == null ? (<LoginIcon onClick={() => handleUser('logIn')}></LoginIcon>) : (<LogoutIcon onClick={() => handleUser('logOut')}></LogoutIcon>)}
        </div>
      </div>
    </div>

  )
}

export default Header;