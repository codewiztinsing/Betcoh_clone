import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View,TouchableOpacity } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from './styles'

interface ProductItemProps {

    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;

    }
};

function ProductItem({item}:ProductItemProps) {

  const navigation = useNavigation();
 
    
  return (
    <TouchableOpacity onPress={() =>  navigation.navigate("Product",{'item':item})
    }>
          <View style = {styles.root}>
                <Image style = {styles.image} source={item.image} />

            <View style = {styles.rightContainer}>
                <Text style = {styles.title}numberOfLines = {3}>{item.title}</Text>
                {/* rating containers */}
                <View style = {styles.ratingContainer}>
                    {
                    [0,0,0,0,0].map((it,i) =>
                     <FontAwesome
                     key={`${Number.parseInt(item.id)  - i}`} 
                     style = {styles.star} name={i < Math.floor(item.avgRating) ? "star":"star-o"} size={18} color="#C4A000"/>

                    )}

                    
                    <Text>{item.ratings}</Text>
                    

                </View>
                <Text style={styles.price}> from ETB {item.price}</Text>
                {
                    item.oldPrice && (<Text style={styles.oldPrice}>
                        ETB {item.oldPrice}
                        </Text>)
                }
             

            </View>

            </View>
    </TouchableOpacity>
  )
}

export default ProductItem