import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Required')
    .max(60),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too short. Must be minimum of 6 characters')
    .required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Required'),
});
