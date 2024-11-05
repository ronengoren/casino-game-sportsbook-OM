import { useState, useEffect, useRef } from "react";
import { Text, View } from "react-native";
import SlotMachine from "react-native-slot-machine";

export default function SlotMachineGame() {
  const [slotSettings, setSlotSettings] = useState({
    duration: 4000,
    slot1: 1234,
    slot2: "hello",
    slot3: "2351",
  });
  const slotRef = useRef(null);
//   useEffect(() => {
//     setTimeout(
//       () =>
//         setSlotSettings({
//           duration: 1000,
//           slot1: "4321",
//           slot2: "world",
//           slot3: "1234",
//         }),
//       5000
//     );
//     setTimeout(
//       () =>
//         setSlotSettings({
//           duration: 4000,
//           slot1: "1234",
//           slot2: "hello",
//           slot3: "2351",
//         }),
//       7000
//     );
//     setTimeout(() => slotRef.current.spinTo("prize"), 12000);
//   }, []);

  const symbols = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌"]; // can't use emojies in SlotMachine because some of them are comprised of 2 chars
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
      <View
        style={{
          height: 200,
          
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SlotMachine
      
          text={slotSettings.slot3}
          range="012345"
          renderContent={(c) => (
            <Text style={{ fontSize: 25 }}>{symbols[c]}</Text>
          )}
          duration={slotSettings.duration}
        />
      </View>
    </View>
  );
}
