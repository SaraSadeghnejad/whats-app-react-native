import React from 'react'
import ChatsScreen from '../screens/ChatsScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainTabNavigator from './MainTabNavigator';
import ContactsScreen from '../screens/ContactsScreen';
const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: 'whitesmoke'}}}>
    <Stack.Screen name="Home" component={MainTabNavigator} options={{headerShown:false}} />
      <Stack.Screen name="Chat" component={ChatsScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator