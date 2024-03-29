import {
  StatusBar,
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import styled from 'styled-components';

const statusBarHeight = 10;

//color

export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darklight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
};

const {primary, secondary, tertiary, brand, darklight, green, red} = Colors;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  // position:absolute;
  flex: 1;
  padding: 10px;
  background-color: ${primary};
  // height:${windowHeight};
  height:100%;
  
`;
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;

`;

export const BetochLogo = styled.Image`
  width: 250px;
  height: 100px;
`;

export const BetochTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 5px;
`;

export const SubTitle = styled.Text`
font-size:18px;
margin-top:5px;
letter-spacing:1px;
font-weight:bold
color:${tertiary}
`;

export const FormAreaView = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};

  padding-left: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 40px;
  margin-top: 3px;
  margin-bottom: 5px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  text-align: left;
  font-size: ${props => (props.error == true ? '16px' : '14px')};
  color: ${props => (props.error == true ? Colors.red : Colors.tertiary)};
`;

export const LeftIcon = styled.View`
  z-index: 1;
  position: absolute;
  left: 10px;
  top: 25px;
`;

export const RightIcon = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  right: 10px;
  top: 25px;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-contetn: center;
  align-items: center;
  border-radius: 5px;
  // margin-vertical: 2px;
  height: 50px;
  ${props =>
    props.social == true &&
    `
background-color:${Colors.green};
flex-direction:row;
`}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 15px;
  ${props =>
    props.social == true &&
    `
padding-horizontal:25px
`}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${props => (props.type == 'success' ? green : red)};
`;

export const Line = styled.View`
  height: 1px;
  widht: 100%;
  background-color: ${darklight};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content:center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${Colors.brand};
  font-size: 15px;

`;
