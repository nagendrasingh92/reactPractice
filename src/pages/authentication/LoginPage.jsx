import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';

import './loginPage.css';
import { authenticateConstants } from '../../store/reducers/authenticate/actions'



function LoginPage() {
    const { userData } = useSelector((state) => state.authenticate);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    searchParams.get("redirect")
    console.log('location', searchParams.get("redirect"))
    const dispatch = useDispatch();

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

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
        debugger;
        let userInfo = values;
        let temp = userData.find((item) => item.email === userInfo.email && item.password === userInfo.password);
        console.log('temp', userData)
        if (temp) {
            dispatch({ type: authenticateConstants.LOGGEDIN_USER_DATA, payload: temp })
            if(searchParams.get("redirect")){
                console.log('search', searchParams.get("redirect"));
                navigate(searchParams.get("redirect"))
            } else {
                navigate(`*`)
            }
        } else {
            alert('Wrong credentials')
        }
    }

    const guestLogin = () => {
        formik.setFieldValue("email", 'guest@g.com');
        formik.setFieldValue("password", '12345678');
    }

    return (
        <div className="loginPageWrap">
            <form className="pageContent" onSubmit={formik.handleSubmit}>

                <div className="iconWrap">
                    <i className="fa-solid fa-lock icon"></i>
                </div>
                LOGIN
                <div className="textFieldWrap">
                    <TextField
                        size="small"
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
                        size="small"
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
                    <button type="submit"> SIGN IN</button>
                </div>
                <div className="singUp">
                    Don't have an account?
                    <Link to='/signUpPage'>Sign Up</Link>
                </div>
                <div>
                Continue as <button type='button' onClick={()=> guestLogin()} >Guest</button>
                </div>
            </form>

        </div >


    )
}

export default LoginPage;