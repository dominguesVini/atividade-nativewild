import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import '../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TrucoApp() {
  const [nosScore, setNosScore] = useState(0);
  const [elesScore, setElesScore] = useState(0);
  const [nosWins, setNosWins] = useState(3);
  const [elesWins, setElesWins] = useState(0);

  return (
    <ImageBackground
      source={require('../assets/madeira.jpg')}
      style={{ flex: 1, justifyContent: 'center' }}
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1 items-center justify-between pt-10 pb-6">
        <StatusBar style="light" />

        <View className="flex-row justify-between w-4/5">
          <Text className="text-8xl text-white font-extrabold top-[50px]">Nós</Text>
          <Text className="text-8xl text-white font-extrabold top-[50px]">Eles</Text>
        </View>

        <View className="flex-row justify-between w-3/5 mb-6">
          <Text className="text-9xl text-white font-bold mr-[-5px]">{nosScore}</Text>
          <Text className="text-9xl text-white font-bold ml-[-5px]">{elesScore}</Text>
        </View>

        <View className="flex-row justify-between w-4/5 mb-8 ">
          <View className="items-center">
            <View
              className="absolute w-20 h-20 bg-red-500 items-center justify-center transform rotate-45 top-[-10px] left-[-20px]"
            >
              <Text className="text-9xl text-white transform -rotate-45 top-[-10px] left-[-12px]">-</Text>
            </View>

            <TouchableOpacity onPress={() => setNosScore(nosScore + 1)} className="relative items-center justify-center mt-2 ">
              <Image source={require('../assets/paus.png')} className="w-300 h-300" />
              <Text className="absolute text-white text-2xl font-bold">+1</Text>
            </TouchableOpacity>
          </View>

          <View className="items-center">
            <View
              className="absolute w-20 h-20 bg-red-500 items-center justify-center transform rotate-45  top-[-10px] left-[-20px]"
            >
              <Text className="text-white text-9xl transform -rotate-45  top-[-10px] left-[-12px]">-</Text>
            </View>


            <TouchableOpacity onPress={() => setElesScore(elesScore + 1)} className="relative items-center justify-center mt-2">
              <Image source={require('../assets/paus.png')} className="w-300 h-300" />
              <Text className="absolute text-white text-2xl font-bold">+1</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity className="bg-black flex-row items-center justify-center px-12 py-3 rounded-lg">
          <Text className="text-red-600 text-3xl font-bold mr-2">♥️</Text>
          <Text className="text-white text-4xl font-bold">Truco!</Text>
          <Text className="text-red-600 text-3xl font-bold ml-2">♥️</Text>
        </TouchableOpacity>

        <View className="flex-row justify-between w-4/5 mt-8">
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">Vitórias</Text>
            <Text className="text-white text-4xl font-bold">{nosWins}</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">Vitórias</Text>
            <Text className="text-white text-4xl font-bold">{elesWins}</Text>
          </View>
        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}
