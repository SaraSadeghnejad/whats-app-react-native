import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';
import ChatScreen from './src/screens/ChatScreen';

export default function App() {
  return (
    <View>
 <ChatScreen />
    </View>
  );
}


