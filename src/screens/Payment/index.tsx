import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import React, { useContext } from 'react'
import { Context } from '../../GlobalContext/globalContext';

const Payment = () => {
    const globalContext = useContext(Context);
    const {domain, setIsLoggedIn,setGlobalProducts} = globalContext;
  
  

    const handlePayment = () => {


        const body = {

            "process":"Express",
        
            "successUrl":`${domain}api/v1/pay/`,
        
            "ipnUrl":"http://my-ipn-url/",
        
            "merchantId":"SB2114",
        
            // "merchantOrderId":"ab-cd",
        
            "expiresAfter":24,
        
            "items":[
        
                {
        
                    "itemId":"sku-01",
        
                    "itemName":"sample item",
        
                    "unitPrice":2,
        
                    "quantity":1
        
                }
        
            ],
        
            "totalItemsDeliveryFee":12.3,
        
            "totalItemsTax1":35.5
        
        }

        axios.post(`${domain}api/v1/pay// `
        ,body
        ).then((response) => {
            console.log("new orl",response.data)
        }).catch((error) => {
            console.log(error)
        })


    }

  return (
    <View>
      <Text>Payment</Text>
      <TouchableOpacity style={styles.paybtn}
      onPress={() => {
          handlePayment()
      }}
      >
          <Text>pay</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({


    paybtn:{
        width:70,
        height:30,
        backgroundColor:"pink",
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        margin:20
    }
})