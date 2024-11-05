import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Button,
} from 'react-native';

const ScratchCard = () => {
  const initialGrid = Array(3)
    .fill(null)
    .map(() => Array(3).fill(null));
  
  const [grid, setGrid] = useState(initialGrid);
  const [revealed, setRevealed] = useState(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(false))
  );

  // Generate random numbers for each square
  const generateGrid = () => {
    return grid.map(row => row.map(() => Math.floor(Math.random() * 10)));
  };

  // Initialize the grid with random numbers when the component mounts
  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  const handleScratch = (rowIndex, colIndex) => {
    if (revealed[rowIndex][colIndex]) return; // Prevent revealing an already revealed square

    const newRevealed = [...revealed];
    newRevealed[rowIndex][colIndex] = true;
    setRevealed(newRevealed);

    // Check for win condition after each reveal
    if (checkWinCondition(newRevealed)) {
      alert('Winner!', 'You matched three numbers in a row, column, or diagonal!');
    } else if (newRevealed.flat().every(cell => cell)) {
      alert('Game Over', 'No matching rows, columns, or diagonals.');
    }
  };

  const checkWinCondition = (revealedGrid) => {
    for (let i = 0; i < 3; i++) {
      // Check rows
      if (revealedGrid[i].every((_, col) => grid[i][0] === grid[i][col])) {
        return true;
      }
      // Check columns
      if (revealedGrid.every((_, row) => grid[0][i] === grid[row][i])) {
        return true;
      }
    }

    // Check diagonals
    if (revealedGrid.every((_, index) => grid[0][0] === grid[index][index])) {
      return true;
    }
    if (revealedGrid.every((_, index) => grid[0][2] === grid[index][2 - index])) {
      return true;
    }

    return false;
  };

  const handleRestart = () => {
    setGrid(generateGrid());
    setRevealed(
      Array(3)
        .fill(null)
        .map(() => Array(3).fill(false))
    );
  };

  return (
    <View style={styles.container}>
      {/* Left side: Game logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/scratch-game-logo.png')} // Replace with your actual image path
          style={styles.logo}
        />
      </View>

      {/* Right side: Scratch card grid */}
      <View style={styles.gridContainer}>
        {grid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((value, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={styles.cell}
                onPress={() => handleScratch(rowIndex, colIndex)}
              >
                {revealed[rowIndex][colIndex] && (
                  <Text style={styles.number}>{value}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
          <Text style={styles.restartButtonText}>Restart Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // padding: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  logo: {
    width: 250,
    height: 350,
    resizeMode: 'contain',
  },
  gridContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: '#c0c0c0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  number: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  restartButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF4500', // Bright orange color for visibility
    borderRadius: 8,
  },
  restartButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScratchCard;
