// online-gaming/components/Footer.tsx

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface FooterProps {
  menuItems: {
    label: string;
    route: string;
  }[];
}

const Footer: React.FC<FooterProps> = ({ menuItems }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 16,
        position: 'absolute', // Position absolutely
        left: 0, // Align left to screen
        right: 0, // Align right to screen
        bottom: 0, // Position at the bottom of the screen
       
      }}
    >
      {menuItems.map((menuItem, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            // Handle navigation to the menu item's route
          }}
        >
          <Text>{menuItem.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Footer;