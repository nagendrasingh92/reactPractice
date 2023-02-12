import { useFormik } from 'formik';
import './signUpPage.css';
import * as Yup from 'yup';
function SignUpPage() {

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
                    Sign up
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="Name">
                        <label className='inputLabel'>
                            Name
                        </label>
                        <input
                            type='name'
                            name='name'
                            value={formik.values.email}
                            placeholder="name"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && (<div>{formik.errors.email}</div>)}
                    </div>
                    <div className="emaildWrap">
                        <label className='inputLabel'>
                            Email
                        </label>
                        <input
                            type='email'
                            name='email'
                            value={formik.values.email}
                            placeholder="email"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && (<div>{formik.errors.password}</div>)}
                    </div>

                    <div className="passwordWrap">
                        <label className='inputLabel'>
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            value={formik.values.email}
                            placeholder="password"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && (<div>{formik.errors.password}</div>)}
                    </div>

                    <div className="confirmPasswordWrap">
                        <label className='inputLabel'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            name='confirmPassword'
                            value={formik.values.email}
                            placeholder="confirmPassword"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && (<div>{formik.errors.password}</div>)}
                    </div>


                    <div className="signInbttn">
                        <button type="submit"> SIGN UP</button>

                    </div>

                </form>
            </div>
        </div>

    )
}

export default SignUpPage;