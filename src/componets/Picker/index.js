import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker'

const CustomPicker = ({selectedValue, setSelectedValue,items}) =>  {


 
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

export default CustomPicker;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        width: windowWidth * 0.45,
        borderColor: "white",
        borderRadius: 5,
        backgroundColor: "rgba(214,210,210,1)",
        height:45,
       
        marginLeft: 4
      },
})
    