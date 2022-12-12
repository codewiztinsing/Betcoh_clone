import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import styles from './styles'
import QuantitySelector from '../../componets/ProductItem/Quantity';
import Button from '../../componets/Buttons';
import ImageCarousel from '../../componets/ImageCarousel';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import product from '../../data/product';


const ProductScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const item = product
  console.log(item);
  

  const [selectedValue, setSelectedValue] = useState(item.options[0])
  const [quantity, setQuantity] = useState(0)


  return (
    <ScrollView style={styles.root}>
      {/* title for house */}
      <Text style={styles.title}>{item.title}</Text>

      {/* image carousel to show list of house images */}
      <ImageCarousel images={item.images}/>


      {/* picker for rend or buy */}
      <View style={styles.card}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(option, optionIndex) => { setSelectedValue(option) }}
        >
          {item.options.map((option, index) => <Picker.Item key={index} label={option} value={option} />)}

        </Picker>
      </View>

    
        <Text style={styles.price}>${item.price}million</Text>
    

      <View style={styles.description}>
        <Text>{item.description}</Text>
      </View>
      {/* quantity selector m */}
      {/* <QuantitySelector quantity={quantity} setQuantity={setQuantity} /> */}

      {/* buttons for buying and renting house */}
      <Button text="Buy House" handler={() => navigation.navigate("Payment")}/>
      <Button text="Rent House" handler={() => navigation.navigate("Payment")}/>
    </ScrollView>
  )
}




export default ProductScreen 