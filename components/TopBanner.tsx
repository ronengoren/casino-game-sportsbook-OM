// online-gaming/components/TopBanner.tsx

import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface TopBannerProps {
  leftSection: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    buttonText?: string;
    hasButton?: boolean;
    onPress?: () => void;
  };
  centerSection: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    buttonText?: string;
    hasButton?: boolean;
    onPress?: () => void;
  };
  accountSection: {
    title: string;
    subtitle: string;
    balance: number;
    totalWinnings: number;
    backgroundImage: string;
    buttonText?: string;
    hasButton?: boolean;
    onPress?: () => void;
  };
}

const TopBanner: React.FC<TopBannerProps> = ({
  leftSection,
  centerSection,
  accountSection,
  isLoggedIn
}) => {
  return (
    <View
      style={{
        marginTop: 20,
        // paddingTop: 20,
        width: "50%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        height: 300,
      }}
    >
      {/* leftSection content */}

      <TouchableOpacity
        style={{ flex: 1, position: "relative", paddingLeft: 10 }}
        onPress={leftSection.onPress}
      >
        <Image
          source={{ uri: leftSection.backgroundImage }}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>{leftSection.title}</Text>
          <Text style={styles.subtitle}>{leftSection.subtitle}</Text>
          {leftSection.hasButton && (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{leftSection.buttonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
      {/* centerSection content */}

      <TouchableOpacity
        style={{ flex: 1, position: "relative" }}
        onPress={centerSection.onPress}
      >
        <Image
          source={{ uri: centerSection.backgroundImage }}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>{centerSection.title}</Text>
          <Text style={styles.subtitle}>{centerSection.subtitle}</Text>
          {centerSection.hasButton && (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{centerSection.buttonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
      {/* accountSection content */}

      <TouchableOpacity
        style={{ flex: 1, position: "relative", padding: 10 }}
        onPress={accountSection.onPress}
      >
        <Image
          source={{ uri: accountSection.backgroundImage }}
          style={styles.backgroundImage}
        />
        <View style={styles.accountOverlay}>
          <Text style={styles.accountTitle}>{accountSection.title}</Text>
          <Text style={styles.accountSubtitle}>{accountSection.subtitle}</Text>
          <Text style={styles.accountSubtitle}>
          {isLoggedIn ?  `Balance: $${accountSection.balance}` : ""}
           
          </Text>
          <Text style={styles.accountSubtitle}> {isLoggedIn ?  `Total Winnings: $${accountSection.totalWinnings}` : ""}
            
          </Text>

          {accountSection.hasButton && (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{accountSection.buttonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 280,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  accountOverlay: {
    position: "absolute",
    top: 15,
    left: 15,
    right: 0,
    bottom: 0,
    // justifyContent: "center",
    alignItems: "flex-start",
  },
  accountTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 180,
    color: "white",
  },
  accountSubtitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  subtitle: {
    fontSize: 12,
    color: "white",
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default TopBanner;
