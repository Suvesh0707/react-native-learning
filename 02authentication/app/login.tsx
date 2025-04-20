// import { View, Text, Image, TextInput, ScrollView } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Mybutton from '@/components/Mybutton'
// import { useRouter } from 'expo-router'

// export default function Login() {
//   const [value1, setValue1] = useState("")
//   const [value2, setValue2] = useState("")
//   useEffect(() => {
//     console.log("Loading...")
//   },[value1]
//   )
//     const onLogin = () => {
//       console.log(value1, value2)
//     }
//     return (
//         <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, gap: 10, marginBottom:50 }}>
//             <Image source={require("@/assets/images/login.png")} style={{ width: "100%", height: 400 }} resizeMode='cover' />
//             <View style={{ gap: 20, paddingHorizontal:20}}>
//                 <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Email'onChangeText={(e)=>(setValue1(e))} />

//                 <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Password'onChangeText={(e)=>(setValue2(e))} />

//                 <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Password'onChangeText={(e)=>(setValue2(e))} />

//                 <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Password'onChangeText={(e)=>(setValue2(e))} />

//                 <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Password'onChangeText={(e)=>(setValue2(e))} />

//                 <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Password'onChangeText={(e)=>(setValue2(e))} />

//                 <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Password'onChangeText={(e)=>(setValue2(e))} />

//                 <TextInput style={{ borderWidth: 1, height: 40, borderRadius:5 }} placeholder='  Enter Your Password'onChangeText={(e)=>(setValue2(e))} />
//                 <Mybutton title={"Login"} onPress={onLogin} />      
//             </View>
//         </ScrollView>
//     )
// }

import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <ScrollView horizontal style={{width:"100%"}}> 
      <FlatList
      numColumns={4}
      ListHeaderComponent={<View style={{height:100, width:"100%",backgroundColor:"blue"}}></View>}
      ListFooterComponent={<View style={{height:100, width:"100%",backgroundColor:"blue"}}></View>}
      data={[1,2,3,4,5,6,7,8,9,10]}
      renderItem={({item})=>{
        return(
          <View style={{width:100, height:100,backgroundColor:"orange", margin:10}}>
             <Text>{item}</Text>  
          </View>
        )
      }}
      /> 
    </ScrollView>
  )
}

export default login