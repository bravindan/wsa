import { View, Text,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";

const sosList = [
  {
    name: "Record Video",
    number: "101"
  },
  {
    name: "Call 911",
    number: "102"
  },
  {
    name: "Alert Emergency Contacts",
    number: "103"
  },
  ]

export default function sos() {
  return (
    <View
      className="flex-1  justify-center"
      style={{ backgroundColor: "#434040" }}
    >
      <FlatList
        data={sosList}
        keyExtractor={(item) => item.number}
        renderItem={({ item }) => (
          <TouchableOpacity
            // style={{
            //
            //   elevation: 2,
            // }}
            className=" p-4"
            onPress={() => console.log("pressed sos item")}
          >
            <Text className="text-white font-bold text-2xl">{item.name}</Text>
            {/* <Text style={{fontSize: 16, marginTop: 10}}>{item.number}</Text> */}
          </TouchableOpacity>
        )}
        className="ml-10 mt-10"
      />
      <View className=" items-center justify-center mb-28 w-3/4 mx-auto rounded-full">
        <TouchableOpacity className="bg-gray-400 rounded-full flex-row items-center  gap-8 w-full">
          <MaterialIcons
            name="cancel"
            size={40}
            color="black"
            className=" rounded-full p-2 items-center mx-auto w-20"
            style={{ elevation: 2, backgroundColor: "#ff5e99" }}
          />
          <Text className="text-white font-bold text-2xl w-3/4">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}