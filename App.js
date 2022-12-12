/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DrawerNavigator from './src/auth/screens/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { StackAuthScreens } from './src/auth/screens/StackNavigationScreens';
import SignupScreen from './src/auth/screens/SignupScreen';
import ForgotPassword from './src/auth/screens/ForgotPassword';
import BottomTabNavigator from './src/auth/screens/BottomNavigation';



/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {


  return (
 

      <NavigationContainer>
         <DrawerNavigator />
      </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
