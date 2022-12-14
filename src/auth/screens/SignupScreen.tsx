import { ActivityIndicator, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react'
import {
  BetochLogo,
  BetochTitle,
  ButtonText,
  Colors,
  Container,
  ExtraText,
  ExtraView,
  FormAreaView,
  InnerContainer,
  LeftIcon,
  Line,
  MsgBox,
  RightIcon,
  StyledButton,
  StyledInputLabel,
  StyledTextInput,
  SubTitle,
  TextLink,
  TextLinkContent
} from '../components/styles'
import { Formik } from 'formik'
import { ScrollView, } from 'react-native-gesture-handler';
import Button from '../../componets/Buttons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'
import KeyboardAvoidingViewWrapper from '../components/KeyboardAvoidingView';

//API client
import axios from 'axios';

//validation schema
import { signupValidation, } from '../../utilities/validation';

// signup firebase functionality
import { signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
   
} from "firebase/auth";
import { auth, database, } from "../../../config/firebase"
import { AddUser } from '../../Firebase/Users';





const SignupScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  // date picker related setters and getters
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1))


  // messaging related setters and getters
  const [message, setMessage] = useState();
  const [messageType, setmessageType] = useState()


  const initialValues={
    username: '', 
    email: '',
     dateOfBirth: '',
      password: '',
       confrimPassword: '' 
      }

//handleRegister(values,setSubmitting) // handle register
const handleRegister = async (values,formikActions) => {
  if (values.email !== '' && values.password !== '') {
    createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((res) =>  {
            setMessage("Register success")
           const uid = auth.currentUser.uid
            AddUser(uid,values.username,values.email)
          navigation.navigate("Home")
        } )
          .catch((err) => 
            {
              setMessage("register error")
              
              
            }
          );
      }
}


  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message)
    setMessage(messageType)
  }

  const navigation = useNavigation()

  // actual date of birth
  const [dob, setDob] = useState()

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate)
    setDob(currentDate)
  }

  const showDatePicker = () => {
    setShow(true)
  }

  return (
    <KeyboardAvoidingViewWrapper>
      <Container>
        <InnerContainer>

          <SubTitle>Create an account</SubTitle>
          {
            show &&

            <DateTimePicker
              testID='datetimepicker'
              value={date}
              mode='date'
              is24Hour={true}
              display='default'
              onChange={onChange}
            />}
          <Formik initialValues={initialValues}
              validationSchema={signupValidation}
            onSubmit={
              (values,formikActions)=> (
                handleRegister(values,formikActions)
              )
            }
          
          >
            {
              ({ errors,values,touched,handleChange, handleBlur,isSubmitting ,handleSubmit}) => (<FormAreaView>
              
                <Input 
                  label="User name"
                  icon="user"
                  placeholder="Operah Winfery"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange("username")}
                  error={touched.username && errors.username}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />


                <Input 
                  label="Email"
                  icon="email"
                  placeholder="ourgroupemail@gmail.com"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={touched.email && errors.email}
                  value={values.email}
                  keyboardType="email-address"
                />



                <Input 
                  label="Date of Birth"
                  icon="calendar"
                  placeholder="YYYY-MM-DD"
                  placeholderTextColor={Colors.darklight}
                  
                  onChangeText={handleChange("dateOfBirth")}
                  onBlur={handleBlur("dateOfBirth")}
                  value={dob ? dob.toDateString() : ''}
                  isDate={true}
                  editable={false}
                  showDatePicker={showDatePicker}

                />


                <Input 
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * *"
                  placeholderTextColor={Colors.darklight}
                  error={touched.password && errors.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />


                <Input 
                  label="Confrim Password"
                  icon="lock"
                  placeholder="* * * * * * *"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange("confrimPassword")}
                  onBlur={handleBlur("confrimPassword")}
                  error={touched.confrimPassword && errors.confrimPassword}

                  value={values.confrimPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && <StyledButton onPress={handleSubmit}>

                  <ButtonText>
                    Register
                  </ButtonText>
                </StyledButton>
                }

                {isSubmitting && <StyledButton disabled={true}>

                  <ActivityIndicator size="large" color={Colors.primary} />
                </StyledButton>
                }
              


                <ExtraView>
                  <ExtraText>Already have an account  ?
                    <TextLink onPress = {() => navigation.navigate("Login")}>
                      <TextLinkContent>Login</TextLinkContent>
                    </TextLink>
                  </ExtraText>
                </ExtraView>

              </FormAreaView>)
            }
          </Formik>
        </InnerContainer>
      </Container>
    </KeyboardAvoidingViewWrapper>

  )
}

const Input = ({
  error,
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isDate,
  showDatePicker,
  ...props }) => {



  return (
    <ScrollView>
      <LeftIcon>
        <Entypo name={icon} size={20} color={Colors.brand} />
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>
      
      {!isDate && <StyledTextInput {...props} />}

      {
        error ? <StyledInputLabel error={true}>{error}</StyledInputLabel>:null
      }


      {isDate && <TouchableOpacity onPress={showDatePicker}>
        <StyledTextInput {...props} />
      </TouchableOpacity>}
     
      {
        isPassword && (
          <RightIcon onPress={() => setHidePassword(!hidePassword)}>
            <Entypo name={hidePassword ? 'eye-with-line' : 'eye'} size={30} />
          </RightIcon>
        )
      }
    </ScrollView>
  )
}




export default SignupScreen
