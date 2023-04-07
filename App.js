import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';

export default function App() {
  return (
    <View>
 <ChatListItem />
 <ChatListItem />
    </View>
  );
}


