// online-gaming/app/GameCenter.tsx

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from "expo-router";

import { ScrollView } from 'react-native-gesture-handler';

const Game = () => {
    const { id } = useLocalSearchParams();

  return (
    <ScrollView style={{ flex: 1 }}>
       
       <Text>Game</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    image: {
      width: 120,
      height: 120,
      margin: 10,
      borderRadius: 10,
      resizeMode: 'cover',
    },
  });

export default Game;