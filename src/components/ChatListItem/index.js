import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import profile from "../../../assets/person-4.png";
const ChatListItem = () => {
  return (
    <View style={styles.container}>
 <Image source={profile} style={styles.image} />
  <View style={styles.content}>
       <View style={styles.row}>
        <Text style={styles.name} numberOfLines={1}>
            Lucas
        </Text>
        <Text style={styles.subTitle}>
            08:30
        </Text>
       </View>
       <Text numberOfLines={2} style={styles.subTitle}>Hello there</Text>
        </View>
    </View>
  )
}

export default ChatListItem
const styles = StyleSheet.create({
    container: {
    flexDirection:"row",
    marginHorizontal:10,
    marginVertical:5,
    height:70,
    },
    image:{
        width: 50,
        height: 50,
        borderRadius:30,
        marginRight:10,
    },
    content:{
        flex:1,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:"lightgray",
    },
    row:{
        flexDirection:"row",
        marginBottom:5,
    },
    name:{
        flex:1,
        fontWeight:"bold",
    },
    subTitle:{
        color:"gray",
 
    }
  });