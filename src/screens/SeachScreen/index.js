import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CustomPicker from '../../componets/Picker'
import axios from 'axios'
import { Context } from '../../GlobalContext/globalContext'
import ProductItem from '../../componets/ProductItem'
import HorizontalFlatList from '../../componets/HorizontalFlatList'

const SearchScreen = () => {


  //contexts
  const globalContext = useContext(Context);
  const {domain, setIsLoggedIn,globalProducts} = globalContext;


  const [home_type, setHomeType] = useState("Condo");
  const [city,setCity] = useState("Adama")
  const [refreshing,setOnRefresh] = useState(false)
  const [products,setProducts] = useState(globalProducts)


  useEffect(() => {
    axios
      // .get(`${domain}api/v1/house/`)
      .post(`${domain}api/v1/listings/search/`,{
        home_type:home_type,
        city:city
      })
      .then(response => {
       response.data && setProducts(response.data)
      })

      .catch(error => console.log(error));
  }, [city,home_type,refreshing]);




  
  //setProducts(globalProducts)

  return (
    <View>
        <View style={styles.pickersContainer}>
          {/* house type */}
          <CustomPicker selectedValue = {home_type}
          setSelectedValue = {setHomeType} items = {["Condo","Town house","Aparatama"]}/>


          <CustomPicker selectedValue = {city}
          setSelectedValue = {setCity} items = {[
                 "Hawasa", "Shager","Adama",
                    "Dire Dawa","Harar","others"]}/>

        </View>

        <View>

      <HorizontalFlatList products={products} SECTIONS={[
        {
              title: 'BY SELL TYPE',
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
            {
              title: 'BY LOCATION',
              horizontal: true,
              data: [
                {
                  key: '1',
                  text: 'Item text 1',
                  uri: 'https://picsum.photos/id/1011/200',
                },
                {
                  key: '2',
                  text: 'Item text 2',
                  uri: 'https://picsum.photos/id/1012/200',
                },
          
                {
                  key: '3',
                  text: 'Item text 3',
                  uri: 'https://picsum.photos/id/1013/200',
                },
                {
                  key: '4',
                  text: 'Item text 4',
                  uri: 'https://picsum.photos/id/1015/200',
                },
                {
                  key: '5',
                  text: 'Item text 5',
                  uri: 'https://picsum.photos/id/1016/200',
                },
              ],
            }
      ]}/>
        </View>
    
    </View>
      
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  pickersContainer:{
    flexDirection:"row",
    justifyContent:"space-around"
  }
})