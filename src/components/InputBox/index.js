import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {AntDesign ,MaterialIcons} from "@expo/vector-icons"
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
const InputBox = () => {
    const [newMessage,setNewMessage] = useState('');
    const onSend =()=>{
        console.log("sending message: ",newMessage);
        setNewMessage('');
    }
  return (
    <View style={styles.container}>
      <AntDesign name='plus' color='royalblue' size={20} />
      <TextInput 
       value={newMessage}
       onChangeText={setNewMessage}
       style={styles.input}
       placeholder='type your message ...'

       />
    <MaterialIcons onPress={onSend} style={styles.send} name='send' size={24} color='white' />
    </View>
  )
}
const styles = StyleSheet.create({
 container:{
    flexDirection:'row',
    backgroundColor:"whitesmoke",
    padding:5,
    paddingHorizontal:10
 },
 input: {
    flex:1,
    backgroundColor:'white',
    padding:5,
    paddingHorizontal:10,
    borderRadius:50,
    borderColor: 'lightgray',
    borderWidth:StyleSheet.hairlineWidth
 },
 send: {
    backgroundColor:"royalblue",
    padding:7,
    borderRadius:15,
    overflow:'hidden',
 },
})
export default InputBox