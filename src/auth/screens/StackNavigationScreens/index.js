import * as React from 'react';
import {SafeAreaView, Text, TextInput, View,StyleSheet, Keyboard, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


//home stack screens
import HomeScreen from '../../../screens/HomeScreen';
import ProductScreen from '../../../screens/ProductScreen';

// auth screens
import LoginScreen from '../LoginScreen';
import SignupScreen from '../SignupScreen';
import { Searchbar } from 'react-native-paper';
import SearchBar from '../../../componets/SeachBar';
import OrderScreen from '../../../screens/OrderScreens';
import SearchScreen from '../../../screens/SeachScreen';


// stacks we gonna use
const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();


// home stack navigators
function StackHomeScreens() {
 


     return (
         <HomeStack.Navigator 
         screenOptions={{
            headerStyle: {
              backgroundColor: "#9AC4F8",
            },
            headerShown:false,
            headerTintColor: "white",
            headerBackTitle: "Back",
          }}
         >
            <HomeStack.Screen name="Home" component={HomeScreen}/>
            <HomeStack.Screen name="Search" component={SearchScreen}/>
            <HomeStack.Screen name="Product" component={ProductScreen}/>
            <HomeStack.Screen name="Order" component={OrderScreen}/>
            <HomeStack.Screen name="_Login" options={
              {
                headerShown:false
              }
            } component={LoginScreen}/>
            <HomeStack.Screen
             options={
              {
                headerShown:false
              }
            }
            
            name="SignUp" component={SignupScreen}/>


         </HomeStack.Navigator>
      );
    }



// auth screens screens
function StackAuthScreens() {
      return (
          <AuthStack.Navigator
          
          screenOptions={{
            
           }}
          >
            <AuthStack.Screen name="_Login" options={
              {
                headerShown:false
              }
            } component={LoginScreen}/>
            <AuthStack.Screen name="SignUp"  component = {SignupScreen}/>
            <AuthStack.Screen  options={{headerShown:false}} name="Home"    component = {HomeScreen}/>
            <AuthStack.Screen name="Search"  component = {SearchScreen}/>
            <AuthStack.Screen name="Product" component = {ProductScreen}/>
            <AuthStack.Screen name="Order"   component = {OrderScreen}/>
            
          </AuthStack.Navigator>
       );
     }

export {StackHomeScreens,StackAuthScreens};



