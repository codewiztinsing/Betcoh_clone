import { View, Text, StyleSheet, Image,useWindowDimensions } from 'react-native'
import React from 'react'
import Button from '../../componets/Buttons'
import { useRoute } from '@react-navigation/native'

const Payment = () => {
  
  return (
    <View style={styles.root}>
      <Text style={styles.title}>check out total 2000000ETB</Text>

      {/* <Image style={styles.image} source={require('/home/tinsae/Desktop/Betoch/assets/house 1.jpg')}/> */}
      <Button text={"pay with telebirr"} handler={() =>console.log("pay with telebirr")}
      />
      <Button text={"pay with Amole"}  handler={() => console.log("pay with Amole")}/>
    </View>
  )
}

const styles = StyleSheet.create({
   


    root:{
        margin:10

    },
    title:{
        fontSize:32,
        fontWeight:"bold",

    },
    image:{
        width:300,
        height:100,
        resizeMode:"cover"
        
    }

})

export default Payment