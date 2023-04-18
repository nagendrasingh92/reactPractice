import { useFormik } from 'formik';
import './signUpPage.css';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { authenticateConstants } from '../../store/reducers/authenticate/actions'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


function SignUpPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.authenticate);
    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        name: yup
            .string()
            .min(4, 'Must be 4 characters')
            .required('Required'),

        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        confirmPassword: yup
            .string()
            .required('Please confirm your password.')
            .oneOf([yup.ref('password')], 'Your passwords do not match.')
    });

    console.log('userData12', userData)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        
        onSubmit: values => {
            let userInfo = values;
            let temp = userData.find((item) => item.email === userInfo.email);
            let id = Date.now().toString(36) + Math.random().toString(36).substr(2)
            if (!temp) {
                let userlist = [...userData, { ...userInfo, id: id } ]
                console.log('ddsf', userlist)
                dispatch({ type: authenticateConstants.UPDATE_USER_LIST, payload: userlist })
                navigate(`/loginPage`)
            } else {
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
                    <div className="textFieldWrap">
                    <TextField
                        size="small"
                        id="text"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    </div>
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
                    <div className="textFieldWrap">
                    <TextField
                        size="small"
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
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