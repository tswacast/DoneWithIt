import React from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";

import defaultStyles from "../config/styles";
import Icon from "./Icon";
import AppText from "./AppText";

interface IProps extends TextInputProps {
  placeholder?: string;
  icon?: string;
}
const AppPicker = ({ placeholder, icon }: IProps) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          size={30}
          name={icon}
          iconColor={defaultStyles.colors.medium}
          backgroundColor={defaultStyles.colors.light}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <Icon
        size={30}
        name="chevron-down"
        iconColor={defaultStyles.colors.medium}
        backgroundColor={defaultStyles.colors.light}
      />
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    margin: 10,
  },
  text: {
    ...defaultStyles.text,
    flex: 1,
  },
});
