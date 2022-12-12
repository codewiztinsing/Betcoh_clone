import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'


const QuantitySelector = ({quantity,setQuantity}) => {
    const quatityMinus = () => {
        setQuantity(Math.min(0, quantity - 1))
        
    }

    const quatityPlus = () => {
        setQuantity(quantity + 1)
        
    }
    return (
        <View style={styles.root}>
            <TouchableOpacity style = {styles.button} onPress={() => quatityMinus()}>
                <Text>-</Text>
            </TouchableOpacity>

            <Text>{quantity}</Text>
            <TouchableOpacity style = {styles.button}  onPress={() => quatityPlus()}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default QuantitySelector

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        width: 200,
        height: 50,
        justifyContent: "space-around",
        alignItems: "center"
    },
    button : {
        width:40,
        height:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F3F3F3"

    }
})