import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
    userName: Yup.string().required('Username is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters')
});