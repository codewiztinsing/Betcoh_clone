import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import {
    Avatar,
    Title,
    Caption,
    Drawer
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'


export default function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                        </View>

                        <View style={{ marginLeft: 15, flexDirection: 'row' }}>
                            <Title style={styles.title}>
                                Yonas Dargues
                            </Title>

                            <Caption style={styles.caption}>@darguesyonas</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => { props.navigation.navigate("Home") }}

                    />


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
                            <Icon
                                name="bookmark-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Bookmarks"
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
                    onPress={() => {  }}
                />
            </Drawer.Section>
        </View>
    )
}


