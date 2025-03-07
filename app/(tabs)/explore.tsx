import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { PetCard } from "@/components/PetCard";
import { useFavoritesStore } from "@/store/favorites";

export default function ExploreScreen() {
  const { favorites } = useFavoritesStore();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 mt-2 py-3">
        <Text className="text-5xl font-bold">Favorites</Text>
      </View>

      {favorites.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-500">No favorite pets yet</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PetCard
              id={item.id}
              name={item.name}
              breeds={item.breeds}
              gender={item.gender}
              age={item.age}
              size={item.size}
              description={item.description}
              image={
                item.photos && item.photos.length > 0
                  ? item.photos[0].large ||
                    item.photos[0].medium ||
                    item.photos[0].small
                  : "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
              }
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}
