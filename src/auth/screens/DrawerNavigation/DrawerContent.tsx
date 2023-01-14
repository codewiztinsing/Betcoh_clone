import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import {
    Avatar,
    Title,
    Caption,
    Drawer
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import  _Icon from 'react-native-vector-icons/MaterialIcons'



import styles from './styles'
import { Context } from '../../../GlobalContext/globalContext'
import { useNavigation } from '@react-navigation/native'


export default function DrawerContent(props) {


    const navigation = useNavigation()
    const globalContext = useContext(Context)
    const {domain,setIsLoggedIn,setToken,setUserObj} = globalContext

    
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                  
                </View>

                <Drawer.Section style={styles.drawerSection}>



                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="account-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Login"
                        onPress={() => { props.navigation.navigate('Login') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <_Icon
                                name="language"
                                color={color}
                                size={size}
                            />
                        )}
                        label="language"
                        onPress={() => { props.navigation.navigate('BookmarkScreen') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="application-settings"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Settings"
                        onPress={() => { props.navigation.navigate('SettingsScreen') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="account-check-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Support"
                        onPress={() => { props.navigation.navigate('SupportScreen') }}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { 
                        setIsLoggedIn(false)
                        setToken("")
                        navigation.navigate("_Login")

                     }}
                />
            </Drawer.Section>
        </View>
    )
}


