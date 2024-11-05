// // online-gaming/app/(tabs)/screens/HomeScreen.tsx

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
// import { GridItem } from '../../components/GridItem';

// const HomeScreen = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [selectedGridItem, setSelectedGridItem] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [gridData, setGridData] = useState({
//     "Online Casino": [
//       { id: 1, title: "Slot Machines" },
//       { id: 2, title: "Roulette" },
//       { id: 3, title: "Blackjack" },
//       { id: 4, title: "Craps" },
//       { id: 5, title: "Baccarat" },
//       { id: 6, title: "Video Poker" },
//       { id: 7, title: "Keno" },
//       { id: 8, title: "Scratch Cards" },
//       { id: 9, title: "Bingo" },
//     ],
//     "Online Gaming": [
//       { id: 1, title: "Fortnite" },
//       { id: 2, title: "PlayerUnknown's Battlegrounds" },
//       { id: 3, title: "Minecraft" },
//       { id: 4, title: "League of Legends" },
//       { id: 5, title: "Dota 2" },
//     ],
//   });

//   const handleGridItemPress = (item: GridItem) => {
//     setSelectedGridItem(item);
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//   };

//   const handleButtonPress = (button: string) => {
//     setSelectedButton(button);
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={Object.keys(gridData)}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleButtonPress(item)}>
//             <Text style={styles.buttonText}>{item}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item}
//       />
//       {selectedButton && (
//         <FlatList
//           data={gridData[selectedButton]}
//           renderItem={({ item }) => (
//             <GridItem item={item} onPress={handleGridItemPress} />
//           )}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//       {modalVisible && (
//         <Modal
//           visible={modalVisible}
//           onRequestClose={handleCloseModal}
//         >
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalText}>{selectedGridItem.title}</Text>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   buttonText: {
//     fontSize: 24,
//     padding: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 24,
//   },
// });

// export default HomeScreen;

import { useNavigation } from 'expo-router';
import { Button, Text, View } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.push('game-center');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Game Center" onPress={handlePress} />
    </View>
  );
};

export default HomeScreen;