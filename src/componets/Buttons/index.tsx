import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({ text, handler }) => {
    return (

            <TouchableOpacity onPress={() => handler()} style = {styles.button}>
                <Text style={styles.shareButtonText}>{text}</Text>
            </TouchableOpacity>



    )
}


const styles = StyleSheet.create({
    button:{
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#D77821",
    },
    shareButtonText:{
        color: "#FFFFFF",
        fontSize:20,
      },
})
export default Button