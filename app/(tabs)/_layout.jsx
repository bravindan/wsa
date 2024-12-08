import React from "react";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function _TabsLayout() {
  return (
    <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: "#ff5e99" },
          headerTitleStyle: { color: "#ffffff" },
          headerBackTitleVisible: false,
          tabBarActiveTintColor: "black",
          tabBarStyle: {
            position: "absolute",
            bottom: 1,
            left: 0,
            right: 0,
            backgroundColor: "#ff5e99",
            height: 56,
          },
        }}
      >
        
        <Tabs.Screen
          name="index"
          options={{
            title: "Find me",
            // headerTitleStyle: { fontSize: 20 },
            headerShown: true,
            tabBarIcon: () => (
              <Ionicons name="location" size={24} color="white" />
            ),
          }}
        />
        <Tabs.Screen
          name="sos"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: () => (
              <View className="w-20 h-20 bg-yellow-200 rounded-full flex justify-center items-center mb-8">
                <MaterialIcons
                  name="sos"
                  size={26}
                  color="black"
                  padding={2}
                  // elevation={3}
                  resizeMode="contain"
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="routes"
          options={{
            title: "SafeRoutes",
            headerShown: false,
            tabBarIcon: () => (
              <MaterialIcons name="alt-route" size={24} color="white" />
            ),
          }}
        />
   
      </Tabs>
  );
}
