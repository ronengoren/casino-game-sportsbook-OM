import React, { useState } from 'react';
import { Modal, TouchableHighlight, View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const MultiSelectMenuRoulette = ({rouletteOptions, onBet}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelect = (optionType, optionValue) => {
    const isSelected = selectedOptions[optionType] && selectedOptions[optionType].includes(optionValue);
    if (isSelected) {
      setSelectedOptions({
        ...selectedOptions,
        [optionType]: selectedOptions[optionType].filter((o) => o !== optionValue),
      });
    } else {
      setSelectedOptions({
        ...selectedOptions,
        [optionType]: [...(selectedOptions[optionType] || []), optionValue],
      });
    }
  };

  const handleDone = () => {

    onBet(selectedOptions);
    setModalVisible(false);
  };

  

  return (
    <View>
    <Button onPress={() => setModalVisible(true)} title='Select Your Bets'>
    </Button>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <ScrollView contentContainerStyle={styles.modalContainer}>
        <View style={styles.modalContent}>
          {rouletteOptions.bettingOptions.map((option) => (
            <View key={option.type}>
              <Text style={styles.optionTitle}>{option.type}</Text>
              {option.numbers && (
                <View>
                  {option.numbers.map((number) => (
                    <TouchableHighlight
                      key={number}
                      onPress={() => handleSelect(option.type, number)}
                    >
                      <View style={styles.optionContainer}>
                        <Text style={styles.optionLabel}>{number}</Text>
                        {selectedOptions[option.type] && selectedOptions[option.type].includes(number) && (
                          <Text style={styles.checkmark}>✔️</Text>
                        )}
                      </View>
                    </TouchableHighlight>
                  ))}
                </View>
              )}
              {option.combinations && (
                <View>
                  {option.combinations.map((combination) => (
                    <TouchableHighlight
                      key={combination.join(',')}
                      onPress={() => handleSelect(option.type, combination)}
                    >
                      <View style={styles.optionContainer}>
                        <Text style={styles.optionLabel}>{combination.join(', ')}</Text>
                        {selectedOptions[option.type] && selectedOptions[option.type].includes(combination) && (
                          <Text style={styles.checkmark}>✔️</Text>
                        )}
                      </View>
                    </TouchableHighlight>
                  ))}
                </View>
              )}
              {option.columns && (
                <View>
                  {option.columns.map((column) => (
                    <TouchableHighlight
                      key={column.join(',')}
                      onPress={() => handleSelect(option.type, column)}
                    >
                      <View style={styles.optionContainer}>
                        <Text style={styles.optionLabel}>{column.join(', ')}</Text>
                        {selectedOptions[option.type] && selectedOptions[option.type].includes(column) && (
                          <Text style={styles.checkmark}>✔️</Text>
                        )}
                      </View>
                    </TouchableHighlight>
                  ))}
                </View>
              )}
              {option.dozens && (
                <View>
                  {option.dozens.map((dozen) => (
                    <TouchableHighlight
                      key={dozen.label}
                      onPress={() => handleSelect(option.type, dozen.numbers)}
                    >
                      <View style={styles.optionContainer}>
                        <Text style={styles.optionLabel}>{dozen.label}</Text>
                        {selectedOptions[option.type] && selectedOptions[option.type].includes(dozen.numbers) && (
                          <Text style={styles.checkmark}>✔️</Text>
                        )}
                      </View>
                    </TouchableHighlight>
                  ))}
                </View>
              )}
              {option.options && (
                <View>
                  {option.options.map((optionValue) => (
                    <TouchableHighlight
                      key={optionValue}
                      onPress={() => handleSelect(option.type, optionValue)}
                    >
                      <View style={styles.optionContainer}>
                        <Text style={styles.optionLabel}>{optionValue}</Text>
                        {selectedOptions[option.type] && selectedOptions[option.type].includes(optionValue) && (
                          <Text style={styles.checkmark}>✔️</Text>
                        )}
                      </View>
                    </TouchableHighlight>
                  ))}
                </View>
              )}
            </View>
          ))}
          <TouchableHighlight onPress={() => handleDone()}>
            <Text style={styles.doneButton}>Done</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </Modal>
  </View>
  );
};

export default MultiSelectMenuRoulette;

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      width: '80%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    optionTitle: {
      fontSize: 18,
    //   marginBottom: 10,
    },
    optionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    optionLabel: {
      fontSize: 16,
      fontWeight: 'bold',

    },
    checkmark: {
      fontSize: 16,
      color: 'green',
    },
    doneButton: {
      fontSize: 16,
      color: 'blue',
      paddingVertical: 10,
    },
  });