import React from "react";
import { StyleSheet, SafeAreaView, StyleProp, ViewStyle } from "react-native";
import Constants from "expo-constants";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
const Screen = ({ style, children }: IProps) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
