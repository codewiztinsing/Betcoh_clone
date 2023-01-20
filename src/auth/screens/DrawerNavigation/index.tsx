import React, { useState } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../BottomNavigation";
import { StackAuthScreens, StackHomeScreens } from "../StackNavigationScreens";
import DrawerContent from "./DrawerContent";
import { Text, View } from "react-native";
import SearchBar from "../../../componets/SeachBar";
import CreateListing from "../../../screens/ListingScreen/create";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation}) => {

  const [searchPhrase,setSearchPhrase] = useState("")
  const[clicked,setClicked] = useState(false)
  // drawerPosition:"left"

  return (
    <Drawer.Navigator screenOptions={{
      

    }} drawerContent={(prosp) => <DrawerContent {...prosp}/>}>
      <Drawer.Screen  
      options={{
   
        header:({navigation}) => {<></>}
          }
        }
      name="Main"  component={StackHomeScreens} />
      <Drawer.Screen 
      
      options={{
   
        // headerShown:false
          }}
      name="Login" component={StackAuthScreens} />
      <Drawer.Screen
      options={{
        headerShown:false
      }}
      
      name="Listing" component={CreateListing} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;