import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../BottomNavigation";
import { StackAuthScreens } from "../StackNavigationScreens";
import DrawerContent from "./DrawerContent";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(prosp) => <DrawerContent {...prosp}/>}>
      <Drawer.Screen name="HomeStack" component={BottomTabNavigator} />
      <Drawer.Screen name="Login" component={StackAuthScreens} />

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;