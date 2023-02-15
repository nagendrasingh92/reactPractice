import { useFormik } from 'formik';
import './signUpPage.css';
import * as Yup from 'yup';
function SignUpPage() {

    const formik = useFormik({
        initialValues: {
            Username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            Username: Yup.string().min(15, 'Must be 4 characters').required('Required'),
            password: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            console.log('te')
            alert(JSON.stringify(values, null, 2));
        },
    });



    return (
        <div className="SignUpPageWrap">
            <form onSubmit={formik.handleSubmit}>

                <div className="pageContent">
                    <div className="loginHeader">
                        <div className="iconWrap">
                            <i className="fa-solid fa-lock icon"></i>
                        </div>
                        Sign up
                    </div>
                    <div className="Name">
                        <input
                            type='text'
                            name='Username'
                            value={formik.values.Username}
                            placeholder="Name"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.Username && (<div>{formik.errors.Username}</div>)}
                    </div>
                    <div className="emailWrap">
                        <input
                            type='email'
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
                            value={formik.values.email}
                            placeholder="Password"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && (<div>{formik.errors.password}</div>)}
                    </div>

                    <div className="confirmPasswordWrap">
                        <input
                            type='password'
                            name='confirmPassword'
                            value={formik.values.email}
                            placeholder="Confirm Password"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.confirmPassword && (<div>{formik.errors.confirmPassword}</div>)}
                    </div>


                    <div className="signInbttn">
                        <button type="submit"> SIGN UP</button>

                    </div>

                </div>
            </form>

        </div>

    )
}

export default SignUpPage;