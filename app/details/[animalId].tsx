import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
const DetailsScreen = () => {

    const { animalId } = useLocalSearchParams();

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Text className='text-3xl font-bold'>{animalId}</Text>
    </SafeAreaView>
  )
}

export default DetailsScreen;