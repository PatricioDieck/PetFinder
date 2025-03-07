import React from "react";
import { FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { PetCard } from "@/components/PetCard";
import { Animal } from "@/dummy-data/types";
import { useQuery } from "@tanstack/react-query";
import { fetchPets } from "@/services/auth";

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["animals"],
    queryFn: fetchPets,
  });

  const animals = data?.animals || [];

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="px-4 mt-2 py-3">
        <Text className="text-5xl font-bold">Animals</Text>
      </View>

      <FlatList
        data={animals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PetCard
            id={item.id}
            name={item.name}
            breeds={item.breeds}
            gender={item.gender}
            age={item.age}
            size={item.size}
            image={
              item.photos && item.photos.length > 0
                ? item.photos[0].large
                : "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

const Loading = () => {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

const Error = () => {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <Text>Error loading pets</Text>
    </SafeAreaView>
  );
};
