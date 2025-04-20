import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import Mybutton from '@/components/Mybutton'
import { useRouter } from 'expo-router'

export default function Register() {
      const router = useRouter()
          const onRegister = () =>{
            router.navigate("/")
          }
  return (
    <View style={{ flex: 1, gap: 10 }}>
            <Image source={require("@/assets/images/register.png")} style={{ width: "100%", height: 400 }} resizeMode='cover' />
            <View style={{ gap: 20, paddingHorizontal:20}}>
                <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Name'onChangeText={(e)=>(console.log(e))} />

                <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Email'onChangeText={(e)=>(console.log(e))} />

                <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Password'onChangeText={(e)=>(console.log(e))} />
                <Mybutton title={"Register"} onPress={onRegister} />
            </View>
        </View>
  )
}