import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Context } from '../../GlobalContext/globalContext'

const OrderItem = ({item}) => {
    const [listing,setListing] = useState()
    const [realtor,setRealtor] = useState()
    const globalContext = useContext(Context);
    const {domain, setIsLoggedIn,setGlobalProducts} = globalContext;

    useEffect(() => {
        axios
          .get(`${domain}api/v1/listings/${item.listing}/`)
          .then(response => {
            setListing(response.data)

          })
    
          .catch(error => console.log(error));
      }, []);

      console.log("listing ",listing)
  return (
    <View style={styles.root}>
      <View style={styles.left}>
      <Text style={{color:"white"}}>{item.realtor}</Text>
            <Text style={{color:"white"}}>{item.name}</Text>
            <Text style={{color:"white"}}>{item.phone}</Text>
            <Text style={{color:"white"}}>{item.created_at}</Text>
            <Text style={{color:"white"}}>ETB </Text>
         
      </View>

      <View style={styles.right}>
          <Text>Procced to checkout</Text>
      </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({

    root:{
        flexDirection:"row",
        marginTop:10,
        marginHorizontal:5

    },
    left:{
        flex:3,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        margin:5,
        height:100
    },
    right:{
        flex:1,
        backgroundColor:"pink",
        justifyContent:"center",
        alignItems:"center",
        margin:5,
        marginTop:20,
        height:50
    }
})