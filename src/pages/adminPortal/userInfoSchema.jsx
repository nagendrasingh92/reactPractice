import * as Yup from "yup";

export const userInforSchema = Yup.object({
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    name: Yup
        .string()
        .min(4, 'Must be 4 characters')
        .required('Required'),

    password: Yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
}) 