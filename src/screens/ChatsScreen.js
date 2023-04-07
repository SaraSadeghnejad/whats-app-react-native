import { ImageBackground } from 'react-native'
import bg from "../../assets/images/BG.png"
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import messages from "../../assets/data/messages.json"
import Message from '../components/Message'
const ChatsScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList data={messages} inverted renderItem={({item})=><Message message={item} style={styles.list} />} />
    </ImageBackground>
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