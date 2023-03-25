import { useFormik } from 'formik';
import './signUpPage.css';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { authenticateConstants } from '../store/reducers/authenticate/actions'


function SignUpPage() {
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.authenticate);

    console.log('userData12', userData)
    const formik = useFormik({
        initialValues: {
            Name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            Name: Yup.string().min(4, 'Must be 4 characters').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup
                .string()
                .required('Please enter your password.')
                .min(8, 'Your password is too short.'),
            confirmPassword: Yup
                .string()
                .required('Please confirm your password.')
                .oneOf([Yup.ref('password')], 'Your passwords do not match.')
        }),
        onSubmit: values => {
            let userInfo = values;
            console.log('te', userInfo)
            console.log('userData12111', userData)
            let temp = userData.find((item) => item.email === userInfo.email);
            console.log('temp', temp);
            if (!temp) {
                let y1 = [ ...userData, userInfo] 
                console.log('u1', y1); 
                dispatch({ type: authenticateConstants.UPDATE_USER_LIST, payload: y1 })
            } else{
                alert('Already exist.')
            }
        },
    });



    return (
        <div className="SignUpPageWrap">
            <form onSubmit={formik.handleSubmit}>

                <div className="pageContent">
                    <div className="iconWrap">
                        <i className="fa-solid fa-lock icon"></i>
                    </div>
                    Sign up
                    <div className="Name">
                        <input
                            type='text'
                            name='Name'
                            value={formik.values.Name}
                            placeholder="Name"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.Name && (<div>{formik.errors.Name}</div>)}
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
                            value={formik.values.password}
                            placeholder="Password"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && (<div>{formik.errors.password}</div>)}
                    </div>

                    <div className="confirmPasswordWrap">
                        <input
                            type='password'
                            name='confirmPassword'
                            value={formik.values.confirmPassword}
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