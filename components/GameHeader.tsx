// online-gaming/components/GameHeader.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameHeader = ( { title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>🎰 Welcome to the { title} Game 🎲</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#D4AF37', // Gold background to mimic Vegas lights
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10, // For Android shadow
    marginVertical: 15,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF0000', // Bright red color for text
    textAlign: 'center',
    textShadowColor: '#FFD700', // Gold text shadow for glowing effect
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});

export default GameHeader;
