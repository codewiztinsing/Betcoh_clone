import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';

import React, {useContext, useEffect, useState} from 'react';
import styles from './styles';
import QuantitySelector from '../../componets/ProductItem/Quantity';
import Button from '../../componets/Buttons';
import ImageCarousel from '../../componets/ImageCarousel';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import Picker from '../../componets/Picker';
import HorizontalFlatList from '../../componets/HorizontalFlatList';
import {related_listings} from '../../utilities/backendRequests';
import {Context} from '../../GlobalContext/globalContext';
import axios from 'axios';

const ProductScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;

  // showmore mechanics
  const [showMore, setShowMore] = useState(false);
  const [description, setDescription] = useState(item.description);
  const [end, setEnd] = useState(65);

  // related listings
  const [relatedListings, setRelatedListings] = useState([item]);

  //contexts
  const globalContext = useContext(Context);
  const {domain, setIsLoggedIn, setGlobalProducts} = globalContext;

  useEffect(() => {
    axios
      .post(`${domain}api/v1/listings/related_search/`, {
        home_type: item.home_type,
        city: item.city,
        price:item.price

      })
      .then(response => {
        setRelatedListings(response.data)
      })

      .catch(error => console.log(error));
  }, []);

 

  const showHandler = () => {
    if (showMore) {
      setDescription(description);
      setShowMore(false);
    }
    if (showMore == false) {
      setDescription(description.slice(0, 60));
      setShowMore(true);
    }
  };
  return (
    <ScrollView style={styles.root}>
      {/* title for house */}
      <Text style={styles.title}>{item.title}</Text>

      {/* image carousel to show list of house images */}
      <ImageCarousel images={item.images} />

      <View style={styles.info}>
        <View style={styles.left}>
          <Text style={styles.price}>${item.price}million</Text>
          <Text style={styles.bottomText}>
            {item.sale_type == 'For Sale' ? 'Selling House' : 'Rent House'}{' '}
          </Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.bottomText}> Bed rooms: {item.bed_rooms}</Text>
          <Text style={styles.bottomText}> Bath rooms :{item.bath_rooms} </Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text>{description}</Text>

        <Pressable
          style={{
            backgroundColor: 'skyblue',
            borderRadius: 5,
            width: 75,
            height: 20,
          }}
          onPress={() => {
            showHandler();
          }}>
          <Text>{showMore ? 'show less' : 'show more'}</Text>
        </Pressable>
      </View>
      {/* <Text>Show related house </Text> */}
      <HorizontalFlatList
        products={relatedListings}
        SECTIONS={[
          {
            title: 'Related house',
            horizontal: true,
            data: [
              {
                key: '1',
                text: 'Item text 1',
                uri: 'https://picsum.photos/id/1/200',
              },
              {
                key: '2',
                text: 'Item text 2',
                uri: 'https://picsum.photos/id/10/200',
              },

              {
                key: '3',
                text: 'Item text 3',
                uri: 'https://picsum.photos/id/1002/200',
              },
              {
                key: '4',
                text: 'Item text 4',
                uri: 'https://picsum.photos/id/1006/200',
              },
              {
                key: '5',
                text: 'Item text 5',
                uri: 'https://picsum.photos/id/1008/200',
              },
            ],
          },
        ]}
      />
    </ScrollView>
  );
};

export default ProductScreen;
