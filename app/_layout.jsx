import React from "react";
import { Link, Stack } from "expo-router";
import {  TouchableOpacity } from "react-native";
import {  SimpleLineIcons } from "@expo/vector-icons";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#434040",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "SAFEHA",
          headerRight: () => (
            <TouchableOpacity>
                <Link href="/profile" asChild>
                <SimpleLineIcons
                  name="user"
                  size={24}
                  color="white"
                  style={{ marginRight: 15 }}
                  // onPress={() => {
                  //   console.log("Person icon pressed");
                  // }}
                />
                </Link>
             </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="profile" 
      options={{ title: "Profile settings" }} />
    </Stack>
  );
}
