// online-gaming/app/(tabs)/components/GridItem.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface GridItemProps {
  item: {
    id: number;
    title: string;
  };
  onPress: (item: { id: number; title: string }) => void;
}

const GridItem: React.FC<GridItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GridItem;