import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useContext, useState} from 'react';
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
} from '../../auth/components/styles';
import {Formik} from 'formik';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../componets/Buttons';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

//API client
import axios from 'axios';

//validation schema
import {signupValidation, orderValidation} from '../../utilities/validation';
import {Context} from '../../GlobalContext/globalContext';
import KeyboardAvoidingViewWrapper from '../../auth/components/KeyboardAvoidingView';

const OrderScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  // date picker related setters and getters
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  // messaging related setters and getters
  const [message, setMessage] = useState();
  const [messageType, setmessageType] = useState();

  const initialValues = {
    username: '',
    email: '',
    dateOfBirth: '',
    password: '',
    address: '',
  };

  // global context hooks
  const globalContext = useContext(Context);
  const {domain, setIsLoggedIn, setToken, setUserObj} = globalContext;

  //handleRegister(values,setSubmitting) // handle register
  const handleRegister = async (props, {setSubmitting}) => {
    let body = {
      username: props.username,
      password: props.password,
    };

    axios
      .post(`${domain}/api/v1/users/`, body)
      .then(function (response) {
        setUserObj(response.data);
        setToken(response.data.token);
        setIsLoggedIn(true);
      })
      .catch(function (error) {
        setMessage(error.message);
      });
  };

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessage(messageType);
  };

  const navigation = useNavigation();

  // actual date of birth
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <KeyboardAvoidingViewWrapper>
      <Container>
        <InnerContainer>
          <SubTitle>Well come to Order please fill the form below</SubTitle>

          <Formik
            initialValues={initialValues}
            validationSchema={orderValidation}
            onSubmit={(values, formikActions) =>
              handleRegister(values, formikActions)
            }>
            {({
              errors,
              values,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
              handleSubmit,
            }) => (
              <FormAreaView>
                <Input
                  label="User name"
                  icon="user"
                  placeholder="Operah Winfery"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange('username')}
                  error={touched.username && errors.username}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />

                <Input
                  label="Email"
                  icon="email"
                  placeholder="ourgroupemail@gmail.com"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={touched.email && errors.email}
                  value={values.email}
                  keyboardType="email-address"
                />

                <Input
                  label="Address"
                  icon="address"
                  placeholder="Jamo street"
                  placeholderTextColor={Colors.darklight}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  error={touched.address && errors.address}
                  value={values.address}
                  keyboardType="email-address"
                />

                <Input
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * *"
                  placeholderTextColor={Colors.darklight}
                  error={touched.password && errors.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MsgBox type={messageType}>{message}</MsgBox>

                <StyledButton onPress={handleSubmit}>
                  <ButtonText>
                    {isSubmitting ? (
                      <ActivityIndicator size={52} color="white" />
                    ) : (
                      'Procced  to check out'
                    )}
                  </ButtonText>
                </StyledButton>
              </FormAreaView>
            )}
          </Formik>
        </InnerContainer>
      </Container>
    </KeyboardAvoidingViewWrapper>
  );
};

const Input = ({
  error,
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <ScrollView>
      <LeftIcon>
        <Entypo name={icon} size={20} color={Colors.brand} />
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>

      {!isDate && <StyledTextInput {...props} />}

      {error ? <StyledInputLabel error={true}>{error}</StyledInputLabel> : null}

      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}

      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Entypo name={hidePassword ? 'eye-with-line' : 'eye'} size={20} />
        </RightIcon>
      )}
    </ScrollView>
  );
};

export default OrderScreen;
