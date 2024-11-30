import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function HomePage() {
  return (
    <View className="flex-1 justify-center">
        <StatusBar style='auto' />
      <Text className="text-3xl text-center text-pink-600">MAP</Text>
    </View>
  )
}