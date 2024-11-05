// online-gaming/components/BigBanner.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface BigBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText: string;
  onPress: () => void;
}

const BigBanner: React.FC<BigBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: backgroundImage }} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default BigBanner;