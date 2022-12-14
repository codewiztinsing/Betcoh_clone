import React, {createContext,useState,useContext,useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator
} from 'react-native';
import DrawerNavigator from './src/auth/screens/DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {StackAuthScreens} from './src/auth/screens/StackNavigationScreens';
import SignupScreen from './src/auth/screens/SignupScreen';
import ForgotPassword from './src/auth/screens/ForgotPassword';
import BottomTabNavigator from './src/auth/screens/BottomNavigation';

//firebase dependencies
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';


const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{user, setUser}}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};


function RootNavigator() {
  const {user, setUser} = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      },
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
       <BottomTabNavigator />
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
};

export default App;
