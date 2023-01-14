import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';

import React, {useEffect, useState} from 'react';
import styles from './styles';
import QuantitySelector from '../../componets/ProductItem/Quantity';
import Button from '../../componets/Buttons';
import ImageCarousel from '../../componets/ImageCarousel';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import product from '../../data/product';
import Picker from '../../componets/Picker';

const ProductScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;

  const [showMore, setShowMore] = useState(false);
  const [description,setDescription] = useState(item.description)
  const [end, setEnd] = useState(65);




  const [quantity, setQuantity] = useState(0);

  const showHandler = () => {
    if(showMore){
      setDescription(description)
      setShowMore(false)
    }
    if(showMore == false) {
      setDescription(description.slice(0,60))
      setShowMore(true)
    }
  };
console.log(showMore)
  return (
    <ScrollView style={styles.root}>
      {/* title for house */}
      <Text style={styles.title}>{item.title}</Text>

      {/* image carousel to show list of house images */}
      <ImageCarousel images={item.images} />

      <Text style={styles.price}>${item.price}million</Text>

      <View style={styles.description}>
        <Text>
          {description}
        </Text>

        <Pressable
            style={{
              backgroundColor: 'skyblue',
              borderRadius: 5,
              width:75,
              height:20
            }}
            onPress={() => {
              showHandler();
            }}>
            <Text>{showMore ? 'show less' : 'show more'}</Text>
          </Pressable>
      </View>

      {/* buttons for buying and renting house */}
      <Button text={item.sale_type == "For Sale"? "Buy House": "Rent House"} handler={() => navigation.navigate('Order')} />
    </ScrollView>
  );
};

export default ProductScreen;
