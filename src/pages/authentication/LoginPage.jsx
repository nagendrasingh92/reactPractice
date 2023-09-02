import { useSelector, useDispatch } from 'react-redux';
import { loggedInUserData } from '../../redux/slices/authenticate/authenticateSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { validationSchema } from '../../helper/constants/validation';
import Button from '@mui/material/Button';

import './loginPage.scss';
import { ROUTE_PATH } from '../../helper/constants/route';

const { HOME } = ROUTE_PATH;

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userData } = useSelector((state) => state.authenticate);
    const [searchParams] = useSearchParams();

    searchParams.get("redirect")

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            handleLogin(values)
        },
    });

    const handleLogin = (values) => {
        let userInfo = values;
        let temp = userData.find(
            item =>
                item.email === userInfo.email && item.password === userInfo.password
        );
        if (temp) {
            dispatch(loggedInUserData(temp))
            if (searchParams.get("redirect")) {
                navigate(searchParams.get("redirect"))
            } else {
                navigate(HOME)
            }
        } else {
            alert('Wrong credentials')
        }
    }

    const guestLogin = () => {
        const guestCredentials = {
            email: 'guest@g.com',
            password: '12345678',
        };
        handleLogin(guestCredentials);
        // formik.setFieldValue("email", 'guest@g.com');
        // formik.setFieldValue("password", '12345678');
    }

    return (
        <div className="loginPageWrap">
            <form className="pageContent" onSubmit={formik.handleSubmit}>

                <div className="iconWrap">
                    <i className="fa-solid fa-lock icon"></i>
                    LOGIN
                </div>
                <div className="textFieldWrap">
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
                <div className="textFieldWrap">
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </div>
                <div className="rememberMe">
                    <input type="checkbox" id="checkBox" name="vehicheckBoxcle1" value="" />
                    Remember Me.
                </div>
                <div className="signInbttn">
                <Button variant="contained" className="taskButton" type="submit">SIGN IN</Button>
                </div>
                <div className="singUp">
                    Don't have an account ?
                    <Link to='/signUpPage'>Sign Up</Link>
                </div>
                <div className='seprator'>or</div>
                <div>
                    Continue as <Button variant="contained" size="small" color="success" className="taskButton" onClick={() => guestLogin()}>Guest</Button>
                </div>
            </form>

        </div >


    )
}

export default LoginPage;