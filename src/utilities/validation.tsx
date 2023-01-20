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
              .min(8,"password must be greater than 8 digits")
              .equals([yup.ref('password')],"password mismatch")

})


const orderValidation = yup.object({
  name:yup.string()
      .trim()
      .min(3,"name must be greater than 3 characters")
      .required("name is required"),
  address:yup.string()
      .min(8,"address is required")
      .max(20,"too long address")
      .required("address is required"),
  phone:yup.string()
      .min(10,"must be 10 digit")
      .max(10,"too long phone number")
      .required("phone is required")
  

})

const listingValidation = yup.object({
    title:yup.string()
        .trim()
        .min(5,"title must describe house in detail")
        .required("title is required"),

    city:yup.string()
        .trim()
        .min(3,"cities in the world")
        .required("city is required"),

    state:yup.string()
        .trim()
        .min(3,"Countery in the world")
        .required("state is required"),
    price:yup.number()
        .max(6,"please check it is less than 6 digits")
        .required("price is required"),
    bedrooms:yup.number()
        .min(1,"please enter number of bed rooms")
        .max(2,"too many bedrooms")
        .required("please enter number of bed rooms"),
    bathrooms:yup.number()
        .min(1,"please enter number of bath rooms")
        .max(2,"too many bath rooms")
        .required("please enter number of bath rooms")
    
  
  })


const loginValidation = yup.object({
  email:yup.string().email("invalid email"),
  password:yup.string().min(8,"password must greater than 8 digits")

})




export { signupValidation,listingValidation,loginValidation,orderValidation};
