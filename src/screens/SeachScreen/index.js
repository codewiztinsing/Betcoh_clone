import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CustomPicker from '../../componets/Picker'
import axios from 'axios'
import { Context } from '../../GlobalContext/globalContext'
import ProductItem from '../../componets/ProductItem'

const SearchScreen = () => {


  //contexts
  const globalContext = useContext(Context);
  const {domain, setIsLoggedIn,globalProducts} = globalContext;


  const [home_type, setHomeType] = useState("Condo");
  const [city,setCity] = useState("Adama")
  const [refreshing,setOnRefresh] = useState(false)
  const [products,setProducts] = useState()


  useEffect(() => {
    axios
      // .get(`${domain}api/v1/house/`)
      .post(`${domain}api/v1/listings/search/`,{
        home_type:home_type,
        city:city
      })
      .then(response => {
        console.log(response.data)
      
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
          setSelectedValue = {setCity} items = {["AdissAbebe","Hawasa","Adama","Bishofitu"]}/>

        </View>

        <View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          refreshing={refreshing}
          onRefresh={() => setOnRefresh(true)}
          keyExtractor={(item) => `${item.slug} ${item.id} ${Math.random()} `}
          renderItem={({item}) => <ProductItem item={item} />}
        />
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