import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NotImplementedScreen from './NotImplementedScreen'
import ChatsScreen from '../screens/ChatsScreen'

const MainTabNavigator = () => {
    const Tab =createBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Chats'>
    <Tab.Screen name="Status" component={NotImplementedScreen} />
    <Tab.Screen name="Calls" component={NotImplementedScreen} />
    <Tab.Screen name="Camera" component={NotImplementedScreen} />
    <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Setting" component={NotImplementedScreen} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator