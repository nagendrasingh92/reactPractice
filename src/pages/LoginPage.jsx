import { useFormik } from 'formik';
import './loginPage.css';
import * as Yup from 'yup';
import { Link } from "react-router-dom"

function LoginPage() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
          }),
        onSubmit: values => {
            console.log('te')
            alert(JSON.stringify(values, null, 2));
        },
    });

    

    return (
        <div className="loginPageWrap">
            <div className="pageContent">
                <div className="loginHeader">
                    <div className="iconWrap">
                        <i className="fa-solid fa-lock icon"></i>
                    </div>
                    Sign in
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="userNameWrap">
                        <input
                            type='email'
                            name='email'
                            value={formik.values.email}
                            placeholder="Type email"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && ( <div>{formik.errors.email}</div>)}
                    </div>
                    <div className="passwordWrap">
                        <input
                            type='password'
                            name='password'
                            value={formik.values.password}
                            placeholder="Type Password"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && ( <div>{formik.errors.password}</div>)}
                    </div>
                    <div className="rememberFunction">
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
            </div>
        </div>

    )
}

export default LoginPage;