
import { Picker } from '@react-native-picker/picker';
import {useState} from 'react';
import {
  Button,
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomPicker from '../Picker';
import { useNavigation } from '@react-navigation/native';

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked,navigation}) => {
   
  return (
  
      <View style={styles.container}>
     {/* bar */}
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <FontAwesome
            name="bars"
            size={22}
            color="black"
            style={{marginLeft:10}}
          />

        </TouchableOpacity>
       
          {/* Input field */}

          <TouchableOpacity style={styles.input} onPress = {() => {
            navigation.navigate("Search")
          }}>

          
          <Text>Search</Text>

            {/* search Icon */}
            <MaterialIcons
            name="search"
            size={22}
            color="black"
          
          />
      </TouchableOpacity>
      
  
  {/* 10.0.3.2 */}
    </View>
  );
};

export default SearchBar;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
 
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    width: windowWidth * 1,
    
  },
 
  input: {
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:'center',

    fontSize: 15,
    marginLeft: 10,
    // marginRight: 10,
    width: '95%',
  },
  picker:{

  }
});
