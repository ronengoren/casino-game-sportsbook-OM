// online-gaming/app/GameCenter.tsx

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BigBanner from '@/components/BigBanner';
import { ScrollView } from 'react-native-gesture-handler';

const Wallet = () => {
    const menuItems = [
        { label: 'Home', route: '/' },
        { label: 'Game Center', route: '/game-center' },
        { label: 'Online Casino', route: '/online-casino' },
        { label: 'Sportsbook', route: '/sportbook' },
        { label: 'My Wallet', route: '/wallet' },
    
      ];
      
  const footerMenuItems = [
    { label: 'Home', route: '/home' },
    { label: 'Game Center', route: '/game-center' },
    { label: 'Online Casino', route: '/online-casino' },
    { label: 'Sportsbook', route: '/sportbook' },
    { label: 'My Wallet', route: '/wallet' },
  ];
  const images = [
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 1 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 2 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 3 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 4 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 5 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 6 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 7 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 8 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 9 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 10 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 11 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 12 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 13 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 14 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 15 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 16 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 17 pressed') },
    { uri: '../assets/images/baccarat.png', onPress: () => console.log('Image 18 pressed') },
  ];
  return (
    <ScrollView style={{ flex: 1 }}>
       <Header
        logoSource={require('../assets/images/logo-casino-gaming.png')}
        menuItems={menuItems}
      />
        <BigBanner
        title="Welcome to our game center!"
        subtitle="Play our games and win big!"
        backgroundImage="https://example.com/big-banner-background.jpg"
        buttonText="Play Now"
        onPress={() => console.log('Big banner pressed')}
      />
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {images.slice(0, 9).map((image, index) => (
            <TouchableOpacity key={index} onPress={image.onPress}>
              <Image source={{ uri: image.uri }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {images.slice(9, 18).map((image, index) => (
            <TouchableOpacity key={index} onPress={image.onPress}>
              <Image source={{ uri: image.uri }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Footer menuItems={footerMenuItems} />

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

export default Wallet;