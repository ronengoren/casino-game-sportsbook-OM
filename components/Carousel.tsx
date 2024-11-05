// online-gaming/components/Carousel.tsx

import { router, useRouter  } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native';

interface CarouselProps {
  data: {
    id: number;
    image: string;
    title: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ data, handleGamePress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter(); // Initialize the router

  const handlePressLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - 4);
    }
  };

  const handlePressRight = () => {
    if (currentIndex < data.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleItemPress = (item: { id: number; title: string }) => {
    handleGamePress(item);
    // console.log(item);
  };

  const visibleData = data.slice(currentIndex, currentIndex + 4);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
          Recent Games
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: '#666' }}>View All</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <TouchableOpacity onPress={handlePressLeft}>
          <Text style={{ fontSize: 24, color: '#666' }}>&lt;</Text>
        </TouchableOpacity>
        <FlatList
          data={visibleData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <View
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 10,
                  overflow: 'hidden',
                  marginRight: 16,
                }}
              >
                <Image source={{ uri: item.image }} style={{ flex: 1 }} />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    padding: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={200}
          decelerationRate="fast"
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
        />
        <TouchableOpacity onPress={handlePressRight}>
          <Text style={{ fontSize: 24, color: '#666' }}>&gt;</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
          Recent Winners
        </Text>
      </View>
    </View>
  );
};

export default Carousel;
