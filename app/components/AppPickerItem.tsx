import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

export interface PickerItem {
  label: string;
  value: string | number;
}

export interface AppPickerItemProps<T extends PickerItem> {
  item: T;
  onPress: () => void;
}
const AppPickerItem = ({ item, onPress }: AppPickerItemProps<PickerItem>) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default AppPickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
