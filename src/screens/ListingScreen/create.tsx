import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useContext, useEffect, useState} from 'react';
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
import {useNavigation, useRoute} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

//API client
import axios from 'axios';

//validation schema
import {
  signupValidation,
  orderValidation,
  listingValidation,
} from '../../utilities/validation';
import {Context} from '../../GlobalContext/globalContext';
import KeyboardAvoidingViewWrapper from '../../auth/components/KeyboardAvoidingView';
import TypePicker from './TypePicker';
import {launchImageLibrary} from 'react-native-image-picker';



const CreateListing = () => {
  // messaging related setters and getters
  const [message, setMessage] = useState();
  const [realtor_id, setRealtorId] = useState();
  const [messageType, setmessageType] = useState();
  const navigation = useNavigation();

  const route = useRoute();
  // const {listing} = route.params;
  const [sale_type, setSaleType] = useState('For Rent');
  const [house_type, setHouseType] = useState('Condo');

  // images related
  const [filename1, setFileName1] = useState('');
  const [filename2, setFileName2] = useState('');
  const [filename3, setFileName3] = useState('');
  const [filename4, setFileName4] = useState('');
  const [filename5, setFileName5] = useState('');
  const [filename6, setFileName6] = useState('');
  const [filename7, setFileName7] = useState('');

 
  //contexts

  const globalContext = useContext(Context);
  const {domain, setOrders, userObj, setIsLoggedIn, setGlobalProducts} =
    globalContext;

     // order body
  useEffect(() => {
    axios
      .get(`${domain}api/v1/realtors/${userObj.email}/`)
      .then(response => {
        setRealtorId(response.data.id);
      })

      .catch(error => console.log(error));
  }, [userObj.email]);


  const initialValues = {
    title: '',
    city: '',
    state: '',
    price: '',
    bathrooms: '',
    bedrooms: '',
    address: '',
    phone: '',
  };


  function ImagePicker({label,filename,setFileName}) {
    return (
      <View style={styles.imgContainer}>
           <Text style={{
             fontSize:18,
             fontWeight:"bold"
             }}>{label}</Text>
  
            <Text style={{
             fontSize:12,
             }}>{filename}</Text>
           <TouchableOpacity
             activeOpacity={0.5}
             style={styles.chooseBtn}
             onPress={() => chooseFile('photo',filename,setFileName)}>
             <Text style={{}}>Choose Image</Text>
           </TouchableOpacity>
         
      </View>

    )
    
  }
 
  const chooseFile =( type,filename,setFileName) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log(response)
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.assets[0].uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFileName(response.assets[0].fileName);
    });
  };

  const handleOrder = props => {
    const body = {
      realtor: realtor_id,
      title: props.title,
      slug:`${house_type}-${props.city}`,
      city: props.city,
      address:props.city,
      price:props.price,
      state: props.state,
      bed_rooms: Number.parseInt(props.bedrooms),
      bath_rooms: Number.parseInt(props.bathrooms),
      home_type:house_type,
      sale_type:sale_type,
      image:filename1,
      image_1:filename2,
      image_2:filename3,
      image_3:filename4,
      image_4:filename5,
      image_5:filename6


    };

    axios
      .post(`${domain}api/v1/listings/create/`, body)
      console.log(body)
      .then(response => {
        console.log(response.data)
        ToastAndroid.showWithGravity(
          `${props.title} is successfully added`,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      })

      .catch(error => {
        ToastAndroid.showWithGravity(
          `Already booked listing`,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      });
  };

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessage(messageType);
  };

  return (
    <ScrollView>
    <KeyboardAvoidingViewWrapper>
    
        <Container>
          <InnerContainer>
            <SubTitle>Send Listing</SubTitle>

            <Formik
              initialValues={initialValues}
              validationSchema={listingValidation}
              onSubmit={(values, formikActions) =>
                handleOrder(values, formikActions)
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
                  {/* title of listing */}
                  <Input
                    label="Title"
                    icon="yc-square"
                    placeholder="sell house in shager"
                    placeholderTextColor={Colors.darklight}
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    error={touched.title && errors.title}
                    value={values.title}
                  />

                  {/* city of listing */}
                  <Input
                    label="City"
                    icon="globe"
                    placeholder="Finfine"
                    placeholderTextColor={Colors.darklight}
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    error={touched.city && errors.city}
                    value={values.city}
                  />

                  {/* city of listing */}
                  <Input
                    label="State"
                    icon="globe"
                    placeholder="Oromia"
                    placeholderTextColor={Colors.darklight}
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur('state')}
                    error={touched.state && errors.state}
                    value={values.state}
                  />

                  {/* title of listing */}
                  <Input
                    label="Price"
                    icon="dollar"
                    placeholder="500000 ETB"
                    placeholderTextColor={Colors.darklight}
                    onChangeText={handleChange('price')}
                    onBlur={handleBlur('price')}
                    error={touched.price && errors.price}
                    value={values.price}
                  />
                  {/* sell type */}
                  <TypePicker
                    selectedValue={sale_type}
                    setSelectedValue={setSaleType}
                    items={['For Rent', 'For Sale']}
                  />

                  {/* house type */}
                  <TypePicker
                    selectedValue={house_type}
                    setSelectedValue={setHouseType}
                    items={['Condo', 'Town House', 'Aparatama']}
                  />

                  {/* city of listing */}
                  <Input
                    label="Bed rooms"
                    icon="bed"
                    placeholder="room 13"
                    placeholderTextColor={Colors.darklight}
                    onChangeText={handleChange('bedrooms')}
                    onBlur={handleBlur('bedrooms')}
                    error={touched.bedrooms && errors.bedrooms}
                    value={values.bedrooms}
                  />

                  {/* city of listing */}
                  <Input
                    label="Bath rooms"
                    icon="bath"
                    placeholder="shower house"
                    placeholderTextColor={Colors.darklight}
                    onChangeText={handleChange('bathrooms')}
                    onBlur={handleBlur('bathrooms')}
                    error={touched.bathrooms && errors.bathrooms}
                    value={values.bathrooms}
                  />
                  <ImagePicker label={"Image"} filename={filename1} setFileName={setFileName1}/>
                  <ImagePicker label={"Image"} filename={filename2} setFileName={setFileName2}/>
                  <ImagePicker label={"Image"} filename={filename3} setFileName={setFileName3}/>
                  <ImagePicker label={"Image"} filename={filename4} setFileName={setFileName4}/>
                  <ImagePicker label={"Image"} filename={filename5} setFileName={setFileName5}/>
                  <ImagePicker label={"Image"} filename={filename6} setFileName={setFileName6}/>
                  



                  <MsgBox type={messageType}>{message}</MsgBox>

                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Send to Admin</ButtonText>
                  </StyledButton>
                </FormAreaView>
              )}
            </Formik>
          </InnerContainer>
        </Container>
     
    </KeyboardAvoidingViewWrapper>
    </ScrollView>
  );
};

const Input = ({
  error,
  label,
  icon,

  ...props
}) => {
  return (
    <ScrollView>
      <LeftIcon>
        <FontAwesome name={icon} size={20} color={Colors.brand} />
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>

      <StyledTextInput {...props} />

      {error ? <StyledInputLabel error={true}>{error}</StyledInputLabel> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:5

  },

  chooseBtn:{
    width:100,
    height:30,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"pink"
  }
})
export default CreateListing;
