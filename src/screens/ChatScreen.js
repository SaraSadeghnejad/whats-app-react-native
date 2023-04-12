import { View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import chats from '../../assets/data/chats.json'
import ChatListItem from '../components/ChatListItem'
const ChatScreen = () => {
  return (
    <View>
      <FlatList data={chats} renderItem={({item}) =><ChatListItem chat={item} />} style={{backgroundColor:"white"}} />
    </View>
  )
}

export default ChatScreen