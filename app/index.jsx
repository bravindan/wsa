import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function HomePage() {
  return (
    <View>
        <StatusBar style='auto' />
      <Text className="text-red-500">HomePage</Text>
    </View>
  )
}