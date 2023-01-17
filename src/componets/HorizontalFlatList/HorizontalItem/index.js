import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from './styles'

function HorizontalItem({ item,data }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Product", { 'item': item })
        }>
            <View style={styles.root}>

                <Image style = {styles.image} source={{uri:item.get_image}} />
                {/* <Image style={styles.image} source={
                    require("/home/tinsae/Desktop/Betoch_clone/Betoch/assets/house-2.jpeg")
                } /> */}


                <View style={styles.info}>
                    <View style={styles.left}>
                        <Text style={styles.price}> {item.city}</Text>
                        <Text> {item.home_type}</Text>
                    </View>

                    <View style = {styles.right}> 
                        <Text style={styles.price}> bed rooms: {item.bed_rooms}</Text>
                        <Text> bath rooms:{item.bath_rooms}</Text>
                    </View>
                   
                

                </View>
                  

                </View>

            
        </TouchableOpacity>
    )
}

export default HorizontalItem;