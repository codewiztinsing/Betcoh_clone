import React from 'react'
import { Image, StyleSheet, Text, View,FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import products from '../../data/products'
import LoginScreen from '../../auth/screens/LoginScreen';
import SignupScreen from '../../auth/screens/SignupScreen';
import ProductItem from '../../componets/ProductItem';

function HomeScreen({navigation}) {
    

    return (
        <View style = {styles.pages}>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ProductItem item={item}
            />}

            />
            <View style={styles.bottomNavigation}>

        
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    pages : {
        width:"100%",
        padding:10,
    },
    bottomNavigation:{
        width:"100%",
        height:30,
        marginBottom:10
    }
    
})
export default HomeScreen