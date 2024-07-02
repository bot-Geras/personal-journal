import {  View, Text } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Hello world Safe</Text>
      <StatusBar style="auto" />
    
    </View>
  );
}


