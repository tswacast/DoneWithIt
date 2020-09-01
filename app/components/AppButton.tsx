import React from "react";
import { StyleSheet, Platform, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

interface IProps {
  title?: string;
  color?: "primary" | "secondary";
  onPress?: () => void;
}
const AppButton = ({ title, color = "primary", onPress }: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonStyle,
        {
          backgroundColor: colors[color],
        },
      ]}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
