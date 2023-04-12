import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NotImplementedScreen from '../screens/NotImplementedScreen'
import ChatScreen from '../screens/ChatScreen'
import { Entypo, Ionicons } from '@expo/vector-icons'


const MainTabNavigator = () => {

    const Tab =createBottomTabNavigator()
  return (
    <Tab.Navigator
    initialRouteName='Chats'
    screenOptions={{
        tabBarStyle:{backgroundColor:"whitesmoke"},
        headerStyle:{backgroundColor:"whitesmoke"},
    }}
    >
    <Tab.Screen
       options={{
        tabBarIcon:({color,size})=>(
        <Ionicons name="logo-whatsapp" size={size} color={color} />
       ),
        }}
     name="Status" component={NotImplementedScreen} />
    <Tab.Screen
       options={{
        tabBarIcon:({color,size})=>(
        <Ionicons name="call-outline" size={size} color={color} />
       ),
        }}
     name="Calls" component={NotImplementedScreen} />
    <Tab.Screen 
       options={{
        tabBarIcon:({color,size})=>(
        <Ionicons name="camera-outline" size={size} color={color} />
       ),
        }}
    name="Camera" component={NotImplementedScreen} />
    <Tab.Screen 
    name="Chats" component={ChatScreen}
       options={
        ({navigation})=>({
        tabBarIcon:({color,size})=>(
        <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
       ),
         headerRight:()=>(
         <Entypo onPress={()=>navigation.navigate('Contacts')}
          name='new-message'
           size={18} 
           color={'royalblue'}
            style={{marginRight:15}} />
         )
       
    })}
     />
      <Tab.Screen name="Setting"
        options={{
        tabBarIcon:({color,size})=>(
        <Ionicons name="settings-outline" size={size} color={color} />
       ),
        }}
       component={NotImplementedScreen} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator