import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
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
  TextLinkContent,
} from '../components/styles';
import {Formik} from 'formik';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../componets/Buttons';
import {useNavigation} from '@react-navigation/native';
import KeyboardAvoidingViewWrapper from '../components/KeyboardAvoidingView';
import { loginValidation} from '../../utilities/validation';
const axios = require('axios').default;

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  //MESSAGING HANDLING MECHANISMS

  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleMessage = (message: any, messageType: any = 'FAILED') => {
    setMessage(message);
    setMessageType(messageType);
  };

  const handleLogin = (values, setSubmitting) => {
    const myip = '213.55.85.43';
    const localip = '10.144.100.33';
    const url = `http://${localip}:8000/api/auth/login`;
    axios
      .post(url, {
        email: values.email,
        password: values.password,
      })
      .then((res: any) =>
        res.data.status != 'FAILED'
          ? navigation.navigate('Home')
          : handleMessage(res.data.status),
      );
    setSubmitting(false).catch(function (error: any) {
      console.log(error.message);
    });
  };

  return (
    <KeyboardAvoidingViewWrapper>
      <Container>
        <StatusBar style="dark" />
        <InnerContainer>
          <BetochTitle>Betoch</BetochTitle>
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={(values, setSubmitting) => {
              handleLogin(values, setSubmitting);
            }}>
            {({
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              values,
            }) => (
              <FormAreaView>
                <Input
                  label="Email"
                  icon="email"
                  placeholder="ourgroupemail@gmail.com"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={errors.email}
                  keyboardType="email-address"
                />

                <Input
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * *"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  error={errors.password}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton onPress={handleSubmit} disabled={true}>
                    <ActivityIndicator size={32} color={'white'} />
                  </StyledButton>
                )}
                <Line />

                <StyledButton social={true} onPress={handleSubmit}>
                  <AntDesign name="google" size={22} />
                  <ButtonText social={true}>Signin with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>
                    Don't hava an account ?
                    <TextLink onPress={() => navigation.navigate('SignUp')}>
                      <TextLinkContent>Signin here</TextLinkContent>
                    </TextLink>
                  </ExtraText>
                </ExtraView>
              </FormAreaView>
            )}
          </Formik>
        </InnerContainer>
      </Container>
    </KeyboardAvoidingViewWrapper>
  );
};

const Input = ({
  label,
  icon,
  isPassword,
  hidePassword,
  error,
  setHidePassword,
  ...props
}) => {
  return (
    <ScrollView>
      <LeftIcon>
        <Entypo name={icon} size={20} color={Colors.brand} />
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>

      <StyledTextInput {...props} />
      {error ? <StyledInputLabel error={true}>{error}</StyledInputLabel> : null}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Entypo name={hidePassword ? 'eye-with-line' : 'eye'} size={30} />
        </RightIcon>
      )}
    </ScrollView>
  );
};

export default LoginScreen;
