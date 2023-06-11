import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter the email'),
  password: Yup.string()
    .required('Please enter the password')
    .min(8, 'Password should contain atleast 8 characters')
    .matches(
      /[a-z]/,
      'Password should contain at least one lowercase character.',
    )
    .matches(
      /[A-Z]/,
      'Password should contain at least one uppercase character.',
    )
    .matches(/[0-9]/, 'Password should contain at least one numeric character.')
    .matches(
      /[^a-zA-Z0-9]/,
      'Password should contain at least one special character.',
    ),
});

export const signupSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter the email'),
  password: Yup.string()
    .required('Please enter the password')
    .min(8, 'Password should contain atleast 8 characters')
    .matches(
      /[a-z]/,
      'Password should contain at least one lowercase character.',
    )
    .matches(
      /[A-Z]/,
      'Password should contain at least one uppercase character.',
    )
    .matches(/[0-9]/, 'Password should contain at least one numeric character.')
    .matches(
      /[^a-zA-Z0-9]/,
      'Password should contain at least one special character.',
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match',
  ),
});

export const profileSchema = Yup.object({
  fullName: Yup.string().required('Please enter your full name'),
  username: Yup.string().required('Please enter your username'),
  dob: Yup.string().required('Please enter your date of birth'),
  phoneNumber: Yup.string().required('Please enter your phone number'),
  occupation: Yup.string().required('Please enter your occupation'),
});
