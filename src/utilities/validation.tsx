import * as yup from 'yup';




const signupValidation = yup.object({
  username:yup.string()
      .trim()
      .min(3,"username must be greater than 3 characters")
      .required("username is required"),
  email:yup.string()
      .email("invalid email")
      .required("email is required"),
  password:yup.string()
              .min(8,"password must be greater than 8 digits")
              .required("password is required"),
  confrimPassword:yup.string()
              .equals([yup.ref('password')],"password mismatch")

})


const loginValidation = yup.object({
  email:yup.string().email("invalid email"),
  password:yup.string().min(8,"password must greater than 8 digits")

})




export { signupValidation,loginValidation};
