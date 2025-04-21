import { View, Text, Button, Modal } from 'react-native'
import React, { useState } from 'react'

const index = () => {
  const [visible, setVisible]= useState(false)
  return (
    <View style={{ justifyContent:"center",alignItems:"center",flex:1}}>
      <Button onPress={()=>setVisible(true)} title='open modal'/>
      <Modal visible={visible}>
      <View style={{backgroundColor:"white", flex:1, justifyContent:"flex-end"}}>
      <Button onPress={()=>setVisible(false)} title='close modal'/>
      <View style={{backgroundColor:"cyan", height:250}}></View>
      </View>
      </Modal>
    </View>
    // another option npm i react-native-modal
  )
}

export default index