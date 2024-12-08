import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView from "react-native-maps";

export default function HomePage() {
  return (
    <View className="flex-1 justify-center">
      <StatusBar style="auto" />
      {/* <Text className="text-3xl text-center text-pink-600">MAP</Text> */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -1.286389,
          longitude: 36.817223,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}