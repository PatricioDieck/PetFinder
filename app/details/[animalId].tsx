import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchPet } from "@/services/auth";
import { Ionicons } from "@expo/vector-icons";
import { Animal } from "@/dummy-data/types";

const DetailsScreen = () => {
  const { animalId } = useLocalSearchParams();

  const { data , isLoading, error } = useQuery({
    queryKey: ["pet", animalId],
    queryFn: () => fetchPet(animalId as string),
  });

  const pet : Animal = data?.animal;


  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center">
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error || !pet) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center">
        <Text>Error loading pet details</Text>
        <TouchableOpacity
          className="mt-4 bg-blue-500 px-4 py-2 rounded-lg"
          onPress={() => router.back()}
        >
          <Text className="text-white">Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const handleAdopt = () => {
    if (pet.url) {
      Linking.openURL(pet.url);
    }
  };

  const handleFavorite = () => {
    console.log("favorite");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* Header with back button */}
        <View className="flex-row items-center p-4">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <Text className="text-blue-500 text-3xl">← </Text>
            <Text className="text-6xl mt-4 font-bold flex-1">{pet.name}</Text>
          </TouchableOpacity>
        </View>

        {/* Main image */}
        <View className="px-4">
          <Image
            source={{
              uri:
                pet.photos && pet.photos.length > 0
                  ? pet.photos[0].large ||
                    pet.photos[0].medium ||
                    pet.photos[0].small
                  : "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
            }}
            className="w-full h-72 rounded-xl"
            resizeMode="contain"
          />
        </View>

        {/* Pet info */}
        <View className="p-4">
          <View className="flex-row flex-wrap gap-2 mb-4">
            <View className="bg-gray-200 px-3 py-1 rounded-full">
              <Text>{pet.breeds?.primary}</Text>
            </View>
            <View className="bg-gray-100 px-3 py-1 rounded-full">
              <Text>{pet.gender}</Text>
            </View>
            <View className="bg-gray-100 px-3 py-1 rounded-full">
              <Text>{pet.age}</Text>
            </View>
            <View className="bg-gray-100 px-3 py-1 rounded-full">
              <Text>{pet.size}</Text>
            </View>
          </View>

          {/* Description */}
          <View className="  mt-4 mb-8">
            <Text className=" text-xl">
              {pet.description || "No description available."}
            </Text>
          </View>

          {/* Characteristics */}
          <View className="mb-4">
            <Text className="text-xl font-semibold mb-2">Characteristics</Text>
            <View className="flex-row flex-wrap gap-2">
              {pet.tags &&
                pet.tags.map((tag: string, index: number) => (
                  <View
                    key={index}
                    className="bg-blue-100 px-3 py-1 rounded-full"
                  >
                    <Text className="text-blue-700">{tag}</Text>
                  </View>
                ))}
              {(!pet.tags || pet.tags.length === 0) && (
                <Text className="text-gray-500">No characteristics listed</Text>
              )}
            </View>
          </View>

          {/* Contact info */}
          <View className="mb-4">
            <Text className="text-xl font-semibold mb-2 ">Contact</Text>
            {pet.contact && (
              <View className="gap-2">
                <Text className="text-gray-600">
                  Email: {pet.contact.email || "Not provided"}
                </Text>
                <Text className="text-gray-600">
                  Phone: {pet.contact.phone || "Not provided"}
                </Text>
                {pet.contact.address && (
                  <Text className="text-gray-600">
                    Location:{" "}
                    {[
                      pet.contact.address.city,
                      pet.contact.address.state,
                      pet.contact.address.postcode,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  </Text>
                )}
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Adoption button */}
      <View className="p-4 border-t border-gray-200 flex-row gap-2 ">
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-xl items-center flex-1"
          onPress={handleAdopt}
        >
          <Text className="text-white font-bold text-lg">Adopt Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-200 p-2 rounded-xl"
          onPress={handleFavorite}
        >
          <Ionicons name="heart-outline" size={28} color="" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
