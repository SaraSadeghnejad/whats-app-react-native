import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
dayjs.extend(relativeTime);
const ContactListItem = ({user}) => {
    const navigation = useNavigation()
  return (
    <Pressable onPress={()=>navigation.navigate("Chat",{id:chat.id,name:chat.name})} style={styles.container}>
 <Image source={{uri:user.image}} style={styles.image} />
  <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
            {user.name}
        </Text>
       <Text numberOfLines={2} style={styles.subTitle}>{user.status}</Text>
        </View>
    </Pressable>
  )
}

export default ContactListItem
const styles = StyleSheet.create({
    container: {
    flexDirection:"row",
    marginHorizontal:10,
    marginVertical:5,
    height:70,
    alignItems:"center"
    },
    image:{
        width: 50,
        height: 50,
        borderRadius:30,
        marginRight:10,
    },

    name:{
        fontWeight:"bold",
    },
    subTitle:{
        color:"gray",
 
    }
  });