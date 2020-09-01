import React from "react";
import { StyleSheet, Text, TextStyle, Platform, StyleProp } from "react-native";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}
const AppText = ({ style, children }: IProps) => {
  return <Text style={[styles.textStyle, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
