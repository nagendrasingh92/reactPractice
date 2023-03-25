import { useFormik } from 'formik';
import './loginPage.css';
import * as Yup from 'yup';
import { Link } from "react-router-dom"
import { useSelector, useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateConstants } from '../store/reducers/authenticate/actions'



function LoginPage() {
    const { userData } = useSelector((state) => state.authenticate);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            email: Yup.string().email('Invalid User Name address').required('Required'),
        }),

        onSubmit: values => {
            handleLogin(values)
        },
    });

    const handleLogin  = (values) => {
        console.log('value', userData)
        let userInfo = values;
        let temp = userData.find((item) => item.email === userInfo.email && item.password === userInfo.password);
        console.log('Value1', temp)
        if (temp) {
            dispatch({ type: authenticateConstants.LOGGEDIN_USER_DATA, payload: temp })
            navigate(`/quizDashboard`)
        } else {
            alert('Wrong credentials')
        }
    }

    return (
        <div className="loginPageWrap">
            <form className="pageContent" onSubmit={formik.handleSubmit}>

                <div className="iconWrap">
                    <i className="fa-solid fa-lock icon"></i>
                </div>
                LOGIN
                <div className="userNameWrap">
                    <input
                        type='text'
                        name='email'
                        value={formik.values.email}
                        placeholder="Email address"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && (<div>{formik.errors.email}</div>)}
                </div>
                <div className="passwordWrap">
                    <input
                        type='password'
                        name='password'
                        value={formik.values.password}
                        placeholder="Password *"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && (<div>{formik.errors.password}</div>)}
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

            </form>

        </div >


    )
}

export default LoginPage;