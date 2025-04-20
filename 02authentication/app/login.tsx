import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Mybutton from '@/components/Mybutton'
import { useRouter } from 'expo-router'

export default function Login() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
    const onLogin = () => {
      console.log(value1, value2)
    }
    return (
        <View style={{ flex: 1, gap: 10 }}>
            <Image source={require("@/assets/images/login.png")} style={{ width: "100%", height: 400 }} resizeMode='cover' />
            <View style={{ gap: 20, paddingHorizontal:20}}>
                <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Email'onChangeText={(e)=>(setValue1(e))} />

                <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Password'onChangeText={(e)=>(setValue2(e))} />
                <Mybutton title={"Login"} onPress={onLogin} />
            </View>
        </View>
    )
}