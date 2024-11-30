
import React from 'react'
import { Tabs } from 'expo-router';
export default function _TabsLayout() {
  return (
      <Tabs className="p-2">
        <Tabs.Screen
          name="index"
          options={{ title: "Find Me", headerShown: false }}
        />
      <Tabs.Screen name="sos" options={{ title: "SOS", headerShown: false }} />
      <Tabs.Screen
        name="routes"
        options={{ title: "SafeRoutes", headerShown: false }}
      />
    </Tabs>
  );
}