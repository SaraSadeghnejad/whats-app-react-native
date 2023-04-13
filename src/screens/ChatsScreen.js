import { ImageBackground } from 'react-native'
import bg from "../../assets/images/BG.png"
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import messages from "../../assets/data/messages.json"
import Message from '../components/Message'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import InputBox from '../components/InputBox'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
const ChatsScreen = () => {
    const route = useRoute();
    console.log(route)
    const navigation= useNavigation();
    useEffect(() => {
        navigation.setOptions({title: route.params.name}) 
    }, [route.params.name])
    
   
  return (
    <KeyboardAvoidingView 
  behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
    style={styles.bg}
    >
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList data={messages} inverted renderItem={({item})=><Message message={item} style={styles.list} />} />
     <InputBox />
    </ImageBackground>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
 bg:{
    flex: 1,
 },
 list:{
    padding:10
 }
})
export default ChatsScreen