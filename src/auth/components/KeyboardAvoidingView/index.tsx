import { View, Text, KeyboardAvoidingView, Keyboard } from 'react-native'
import React from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'

const KeyboardAvoidingViewWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
           <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
               {children}
           </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingViewWrapper