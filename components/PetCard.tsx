import { Animal } from "@/dummy-data/types";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export function PetCard({
  name,
  breeds,
  gender,
  age,
  size,
}: Partial<Animal>) {
  return (
    <TouchableOpacity onPress={() => router.push(`/details/${name}`)} className="flex-row border border-gray-100 h-24  items-center p-4 bg-white rounded-xl mb-4 shadow-sm mx-4">
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
        }}
        className="w-16 h-16 rounded-full border border-gray-100"
      />
      <View className="flex-1 ml-4">
        <Text className="text-2xl font-semibold">{name}</Text>
        <View className="flex-row flex-wrap mt-2 gap-4 text-gray-500 ">
          
          <Text className="text-gray-500">{breeds?.primary}</Text>
          <Text className="text-gray-500">{gender}</Text>
          <Text className="text-gray-500">{age}</Text>
          <Text className="text-gray-500">{size}</Text>
        </View>
      </View>
      <TouchableOpacity
        className=" px-4 py-2 border border-blue-500 absolute top-4 right-2 rounded-xl"
     
      > 
        <Text className="text-blue-500 font-medium">Adoptable</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
