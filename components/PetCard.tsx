import { Animal } from "@/dummy-data/types";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export function PetCard({
  id,
  name,
  breeds,
  gender,
  age,
  size,
  image,
}: Partial<Animal> & { image: string }) {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/details/${id}`)}
      className="flex-row border-b border-gray-200 h-fit items-center p-4 bg-white rounded-xl mb-4"
    >
      <Image
        source={{
          uri: image,
        }}
        className="w-56 h-56 rounded-xl border border-gray-100"
      />
      <View className="flex-1 ml-4 justify-between">
        <View className="flex-row justify-between w-full">
          <Text className="text-3xl font-semibold overflow-none">{name}</Text>
        </View>
        <Text className="text-gray-500">{breeds?.primary}</Text>
        <View className="flex-row overflow-hidden mt-2 gap-4 text-gray-400">
          <Text className="text-gray-400">{gender}</Text>
          <Text className="text-gray-400">{age}</Text>
          <Text className="text-gray-400">{size}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
