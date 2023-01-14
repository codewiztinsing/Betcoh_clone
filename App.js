import {NavigationContainer} from '@react-navigation/native';
import React, {createContext, useState, useContext, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './src/auth/screens/BottomNavigation';
import {Context, Provider} from './src/GlobalContext/globalContext';



// main stack navigators

const MainStack = createStackNavigator()
function MainStackScreens() {
     return (
   
          <MainStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#9AC4F8",
            },
            headerShown:false,
            headerTintColor: "white",
            headerBackTitle: "Back",
          }}>
              <MainStack.Screen name="Home" component={BottomTabNavigator}/>
              
          </MainStack.Navigator>
  
      );
    }




const App = props => {
  return (
    <Provider>
      <NavigationContainer>
        <MainStackScreens />
        {/* <BottomTabNavigator /> */}
      </NavigationContainer>
    </Provider>
  );
};
export default App;
