
import { FlatList, StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import {WebView} from 'react-native-webview'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../GlobalContext/globalContext';
import OrderItem from '../../componets/OrderItem';

const Payment = () => {
    const globalContext = useContext(Context);
    const {domain, setIsLoggedIn,setGlobalProducts} = globalContext;
    const [orders,setOrders] = useState()
  
    useEffect(() => {
      axios
        // .get(`${domain}api/v1/house/`)
        .get(`${domain}api/v1/orders`)
        .then(response => {
         setOrders(response.data)
        })
  
        .catch(error => console.log(error));
    }, []);

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
        
                    "itemId":"sku-02",
        
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
        <FlatList
        showsVerticalScrollIndicator={false}
        data={orders}
        keyExtractor={(order) => ` ${order.id} ${Math.random()} `}
        renderItem={({item}) => <OrderItem item={item} />}
      />
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