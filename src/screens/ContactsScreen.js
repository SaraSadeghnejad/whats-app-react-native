import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import ContactListItem from '../components/ContactListItem'

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