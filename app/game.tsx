// online-gaming/app/GameCenter.tsx

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useLocalSearchParams } from "expo-router";

import { ScrollView } from "react-native-gesture-handler";
import Header from "@/components/Header";
import ScratchCard from "@/components/ScratchCardGame";
import GameHeader from "@/components/GameHeader";
import RouletteWheel from "@/components/RouletteWheelGame";
import SlotMachineGame from "@/components/SlotMachine";

const menuItems = [
  { label: "Home", route: "/" },
  { label: "Game Center", route: "/game-center" },
  { label: "Online Casino", route: "/online-casino" },
  { label: "Sportsbook", route: "/sportbook" },
  { label: "My Wallet", route: "/wallet" },
];

const Game = () => {
  const { id, title } = useLocalSearchParams();

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <ScrollView style={{ flex: 1 }}>
        <Header
          logoSource={require("../assets/images/logo-casino-gaming.png")}
          menuItems={menuItems}
        />
        <GameHeader title={title} />
        <View style={styles.centeredContainer}>
        
        {id == 1 && <ScratchCard />}
        {id == 2 && <RouletteWheel />}
        {id == 3 && <SlotMachineGame />}

        </View>
       
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20, // Optional: adjust spacing
  },
  image: {
    width: 120,
    height: 120,
    margin: 10,
    borderRadius: 10,
    resizeMode: "cover",
  },
  scratchCard: {
    width: 300, // Adjust width as needed
    height: 200, // Adjust height as needed
    borderRadius: 15, // Rounded corners
    borderWidth: 2, // Border thickness
    borderColor: "#FFD700", // Gold color for border
    overflow: "hidden", // Ensures content doesn't exceed borders
    backgroundColor: "#FFFFFF", // Base color before scratching
  },
});

export default Game;
