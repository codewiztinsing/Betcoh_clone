import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker'

const TypePicker = ({selectedValue, setSelectedValue,items}) =>  {


 
    return (
    //   picker for rend or buy
      <View style={styles.card}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(option, optionIndex) => { setSelectedValue(option) }}
        >
          {items.map((option, index) => <Picker.Item key={index} label={option} value={option} />)}

        </Picker>
      </View>

    )
  }

export default TypePicker;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        marginBottom:10,
        width: windowWidth * 0.86,
        borderColor: "white",
        borderRadius: 5,
        backgroundColor: "#E5E7EB",
        height:40,
        justifyContent:'center'
       
     
      },
})
    