// online-gaming/app/GameCenter.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BigBanner from "@/components/BigBanner";
import { ScrollView } from "react-native-gesture-handler";

const SportsBook = () => {
  const [selectedSport, setSelectedSport] = useState("Football");
  const [games, setGames] = useState([
    { date: "2023-11-04", total: 230, id: 1 },
    { date: "2023-11-05", total: 210, id: 2 },
    // ... more games
  ]);
  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Game Center", route: "/game-center" },
    { label: "Online Casino", route: "/online-casino" },
    { label: "Sportsbook", route: "/sportbook" },
    { label: "My Wallet", route: "/wallet" },
  ];

  const footerMenuItems = [
    { label: "Home", route: "/home" },
    { label: "Game Center", route: "/game-center" },
    { label: "Online Casino", route: "/online-casino" },
    { label: "Sportsbook", route: "/sportbook" },
    { label: "My Wallet", route: "/wallet" },
  ];
  const sports = [
    "Football",
    "Basketball",
    "Baseball",
    "Hockey",
    "Golf",
    "Soccer",
    "Fighting",
    "Tennis",
    "Rugby",
    "ESports",
    "Futures",
  ];

  return (
    <>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <ScrollView>
          <Header
            logoSource={require("../assets/images/logo-casino-gaming.png")}
            menuItems={menuItems}
          />
          <View style={styles.container}>
            {/* Left Section */}
            <View style={styles.leftSection}>
              <FlatList
                data={sports}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => setSelectedSport(item)}
                    style={{
                      padding: 10,
                      backgroundColor:
                        selectedSport === item ? "lightgray" : "white",
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
              />
            </View>

            {/* Center Section */}
            <View style={styles.centerSection}>
              <View style={styles.selectedSportHeader}>
                <Text style={styles.selectedSportHeaderText}>
                  {selectedSport}
                </Text>
              </View>

              <View style={{ padding: 10 }}>
                <TextInput
                  style={{ borderWidth: 1, borderColor: "gray", padding: 10 }}
                  placeholder="Search Games"
                />
              </View>
              <View
                style={{
                  padding: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.columnHeader}>Date</Text>
                <Text style={styles.columnHeader}>Total</Text>
                <Text style={styles.columnHeader}>Action</Text>
              </View>
              <FlatList
                data={games}
                renderItem={({ item }) => (
                  <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "gray", flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text>{item.date}</Text>
                    <Text>Total: {item.total}</Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "blue",
                        padding: 10,
                        borderRadius: 5,
                        marginTop: 10,
                      }}
                    >
                      <Text style={{ color: "white" }}>Bet Now</Text>
                    </TouchableOpacity>
                    
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>

            {/* Right Section */}
            <View style={styles.rightSection}>
              {/* Implement tabs for BetSlips and My Bets here */}
              <Text>BetSlips</Text>
              <Text>My Bets</Text>
            </View>
          </View>
        </ScrollView>
        <Footer menuItems={footerMenuItems} />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  leftSection: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "gray",
    padding: 10,
  },
  centerSection: {
    flex: 2,
    padding: 10,
  },
  rightSection: {
    flex: 1,
    padding: 10,
  },
  sportItem: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedSportItem: {
    backgroundColor: "lightgray",
  },
  gameItem: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 10,
  },
  betButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  betButtonText: {
    color: "white",
  },
  selectedSportHeader: {
    backgroundColor: "lightgray", // adjust background color as needed
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedSportHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  columnHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SportsBook;
