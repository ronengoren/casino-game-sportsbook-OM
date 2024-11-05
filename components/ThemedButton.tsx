import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

interface ThemedButtonProps {
  style?: any;
  imageSource: any;
  title: string;
  onPress?: () => void;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
  style,
  imageSource,
  title,
  onPress,
}) => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Image
        source={imageSource}
        style={[styles.image, styles.backgroundImage]}
        resizeMode="cover"
      />
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  backgroundImage: {
    opacity: 0.5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ThemedButton;
