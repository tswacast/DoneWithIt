import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AppPickerItemProps, PickerItem } from "./AppPickerItem";
import AppText from "./AppText";
import Icon from "./Icon";

interface CategoryItem extends PickerItem {
  backgroundColor: string;
  icon: string;
}

const CategoryPickerItem = ({
  item,
  onPress,
}: AppPickerItemProps<CategoryItem>) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
