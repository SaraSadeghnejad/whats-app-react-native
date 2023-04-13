import { View} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import ContactListItem from '../components/ContactListItem'
import chats from '../../assets/data/chats.json'
const ContactsScreen = () => {
  return (
    <View>
    <FlatList
     data={chats} 
     renderItem={({item}) =>
     <ContactListItem user={item.user}
      />} 
      style={{backgroundColor:"white"}} />
  </View>
  )
}

export default ContactsScreen