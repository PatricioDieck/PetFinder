import React, { useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { PetCard } from "@/components/PetCard";
import { Animal } from "@/dummy-data/types";
import dummyData from "@/dummy-data/dummy-data.json";

export default function HomeScreen() {
  const [animals, setAnimals] = useState<Animal[]>(dummyData.animals);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="px-4 mt-2 py-3">
        <Text className="text-5xl font-bold">Animals</Text>
      </View>

      <FlatList
        data={dummyData.animals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PetCard
            name={item.name}
            breeds={item.breeds}
            gender={item.gender}
            age={item.age}
            size={item.size}
          />
        )}
      />
    </SafeAreaView>
  );
}
