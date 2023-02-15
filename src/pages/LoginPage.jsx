import { useFormik } from 'formik';
import './loginPage.css';
import * as Yup from 'yup';
import { Link } from "react-router-dom"

function LoginPage() {

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            userName: Yup.string().email('Invalid User Name address').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });



    return (
        <div className="loginPageWrap">
            <form className="pageContent" onSubmit={formik.handleSubmit}>

                <div className="loginHeader">
                    <div className="iconWrap">
                        <i className="fa-solid fa-lock icon"></i>
                    </div>
                    Sign in
                </div>
                <div className="userNameWrap">
                    <input
                        type='text'
                        name='userName'
                        value={formik.values.email}
                        placeholder="User Name *"
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