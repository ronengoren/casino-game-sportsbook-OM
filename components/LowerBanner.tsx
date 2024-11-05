// online-gaming/components/LowerBanner.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface LowerBannerProps {
  leftSection: {
    title: string;
    subtitle: string;
  };
  centerSection: {
    title: string;
    subtitle: string;
  };
  rightSection: {
    title: string;
    subtitle: string;
  };
}

const LowerBanner: React.FC<LowerBannerProps> = ({
  leftSection,
  centerSection,
  rightSection,
}) => {
  return (
    <View
      style={{
        marginTop: 20,
        paddingTop: 20,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 200,
      }}
    >
      <View style={{ flex: 1, alignItems: 'center', paddingLeft: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {leftSection.title}
        </Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          {leftSection.subtitle}
        </Text>
      </View>
     
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {rightSection.title}
        </Text>
        <Text style={{ fontSize: 14, color: '#666' }}>
          {rightSection.subtitle}
        </Text>
      </View>
    </View>
  );
};

export default LowerBanner;