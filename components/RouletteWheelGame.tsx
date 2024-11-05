import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Animated,
  Easing,
  TextInput,
} from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import MultiSelectMenuRoulette from "./MultiSelectMenuRoulette";
import Footer from "./Footer";

const rouletteOptions = {
  bettingOptions: [
    {
      type: "Straight Up",
      description: "Bet on a single number.",
      odds: 35,
      numbers: Array.from({ length: 36 }, (_, i) => i + 1), // Numbers 1 to 36
    },
    {
      type: "Split",
      description: "Bet on two adjacent numbers.",
      odds: 17,
      combinations: [
        [1, 2],
        [2, 3],
        [4, 5],
        [5, 6],
        // Add more combinations as needed
      ],
    },
    {
      type: "Street",
      description: "Bet on three numbers in a row.",
      odds: 11,
      combinations: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        // Add more combinations as needed
      ],
    },
    {
      type: "Corner",
      description: "Bet on four numbers that meet at one corner.",
      odds: 8,
      combinations: [
        [1, 2, 4, 5],
        [2, 3, 5, 6],
        // Add more combinations as needed
      ],
    },
    {
      type: "Line",
      description: "Bet on two rows of three numbers (6 numbers total).",
      odds: 5,
      combinations: [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        // Add more combinations as needed
      ],
    },
    {
      type: "Column",
      description: "Bet on one of the three columns of the roulette table.",
      odds: 2,
      columns: [
        [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34], // First column
        [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35], // Second column
        [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], // Third column
      ],
    },
    {
      type: "Dozen",
      description: "Bet on a group of twelve numbers.",
      odds: 2,
      dozens: [
        {
          label: "1st Dozen",
          numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        {
          label: "2nd Dozen",
          numbers: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        },
        {
          label: "3rd Dozen",
          numbers: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        },
      ],
    },
    {
      type: "Even/Odd",
      description: "Bet on whether the winning number will be even or odd.",
      odds: 1,
      options: ["Even", "Odd"],
    },
    {
      type: "Red/Black",
      description: "Bet on whether the winning number will be red or black.",
      odds: 1,
      options: ["Red", "Black"],
    },
    {
      type: "Low/High",
      description:
        "Bet on whether the winning number will be low (1-18) or high (19-36).",
      odds: 1,
      options: ["Low", "High"],
    },
  ],
};
const footerMenuItems = [
    { label: "Home", route: "/home" },
    { label: "Game Center", route: "/game-center" },
    { label: "Online Casino", route: "/online-casino" },
    { label: "Sportsbook", route: "/sportbook" },
    { label: "My Wallet", route: "/wallet" },
  ];
const RouletteWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const animationProgress = useRef(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [spinResults, setSpinResults] = useState();
  const [isWinning, setIsWinning] = useState(null);
  const [betValue, setBetValue] = useState("");

  const spinWheel = () => {
    console.log(betValue);
    setSpinResults();
    setIsSpinning(true); // Set spinning state
    animationProgress.current?.play(); // Play the animation when the button is pressed
    setTimeout(() => {
      setSpinResults(chooseRandomItem());
      checkSpinResult();
      setTimeout(() => {
        setBetValue("");
        setSelectedOptions({});
        setSpinResults();
      }, 5000);
      //   setBetValue("");
    }, 5000);
  };

  const handleBetValueChange = (bet) => {
    console.log(bet);
    // setBetValue(text.replace(/[^0-9.]/g, '').replace(/^0+/, ''));
  };
  const checkSpinResult = () => {
    if (spinResults) {
      const result = spinResults;
      const selectedNumbers = Object.values(selectedOptions).flat();
      const exists = selectedNumbers.includes(result);
      setIsWinning(exists);
      console.log(
        `Spin result: ${result}, Exists in selected options: ${exists}`
      );
    } else {
      console.log("No spin result available");
    }
  };
  const BettingInterface = ({ onBet }) => {
    return (
      <View style={styles.bettingContainer}>
        <MultiSelectMenuRoulette
          rouletteOptions={rouletteOptions}
          onBet={handleBet}
        />
      </View>
    );
  };

  const handleBet = (bet) => {
    setSelectedOptions(bet);
  };

  const chooseRandomItem = () => {
    const randomTypeIndex = Math.floor(
      Math.random() * rouletteOptions.bettingOptions.length
    );
    const randomType = rouletteOptions.bettingOptions[randomTypeIndex];

    switch (randomType.type) {
      case "Straight Up":
        return randomType.numbers[
          Math.floor(Math.random() * randomType.numbers.length)
        ];
      case "Split":
        return randomType.combinations[
          Math.floor(Math.random() * randomType.combinations.length)
        ][Math.floor(Math.random() * 2)];
      case "Street":
      case "Corner":
      case "Line":
        return randomType.combinations[
          Math.floor(Math.random() * randomType.combinations.length)
        ][Math.floor(Math.random() * randomType.combinations[0].length)];
      case "Column":
        const randomColumnIndex = Math.floor(
          Math.random() * randomType.columns.length
        );
        return randomType.columns[randomColumnIndex][
          Math.floor(Math.random() * randomType.columns[0].length)
        ];
      case "Dozen":
        const randomDozenIndex = Math.floor(
          Math.random() * randomType.dozens.length
        );
        return randomType.dozens[randomDozenIndex].numbers[
          Math.floor(Math.random() * randomType.dozens[0].numbers.length)
        ];
      case "Even/Odd":
      case "Red/Black":
      case "Low/High":
        return randomType.options[
          Math.floor(Math.random() * randomType.options.length)
        ];
      default:
        return null;
    }
  };
  return (
    <>
     
      <View style={styles.container}>
        <View style={styles.wheelContainer}>
          <LottieView
            source={require("../assets/jsons/casinoRoulette.json")}
            ref={animationProgress}
            autoPlay={false}
            style={styles.wheelImage}
          />
        </View>

      </View>
      {/* <Footer menuItems={footerMenuItems} /> */}
      <Text style={{color: "red", fontSize: 20}}>Roulette Wheel</Text>
      <Text style={{ fontSize: 20, color: "green" }}>Spin Results:</Text>
      <Text style={{ fontSize: 15, color: "green" }}>{spinResults}</Text>
      {spinResults && Object.keys(selectedOptions).length > 0 && (
        <Text style={{ fontSize: 15, color: "green" }}>
          {isWinning ? `You Won $${betValue}` : `You Lost $${betValue}`}
        </Text>
      )}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "green" }}>$</Text>
        <TextInput
          style={{
            height: 40,
            width: 100,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            margin: 12,
            backgroundColor: "#f0f0f0",
          }}
          value={betValue}
          onChangeText={setBetValue}
          keyboardType="numeric"
        />
      </View>
      <Button
        title="Spin"
        onPress={spinWheel}
        disabled={!(betValue && Object.keys(selectedOptions).length)}
      />
      <View style={styles.betSummaryContainer}>
        <Text style={styles.betSummaryTitle}>Your Bets:</Text>
        <Text style={styles.betSummaryText}>
          {JSON.stringify(selectedOptions, null, 2)}
        </Text>
      </View>
      <BettingInterface onBet={handleBet} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  wheelContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%", // Set to the width of your image
    height: 300, // Set to the height of your image
    overflow: "hidden",
    // borderRadius: 150, // To make the edges round
  },
  wheel: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  wheelImage: {
    width: "100%",
    height: "100%",
  },
  betSummaryContainer: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 10,
  },
  betSummaryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  betSummaryText: {
    fontSize: 14,
    color: "#666",
    fontFamily: "monospace",
  },
});

export default RouletteWheel;
