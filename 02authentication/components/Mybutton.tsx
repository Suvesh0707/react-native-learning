import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Mybutton = ({title, onPress}) => {
  return (
    <View>
    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
</View>
  )
}

export default Mybutton

const styles = StyleSheet.create({
    button:{backgroundColor:"darkblue", paddingVertical:10, paddingHorizontal:36,borderRadius:5},
    text:{color:"white", fontSize:15, fontWeight:"bold"}
})