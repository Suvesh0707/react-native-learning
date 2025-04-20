import { View, Text } from 'react-native'
import React from 'react'
import Mybutton from '@/components/Mybutton'
import { useRouter } from 'expo-router'

export default function index() {
  const router = useRouter()
  const onContinue = () =>{
    router.navigate("/login")
  }
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Mybutton title={"index"} onPress={onContinue}/>
    </View>
  )
}