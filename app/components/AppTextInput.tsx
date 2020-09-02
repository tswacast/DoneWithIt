import React from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";

import defaultStyles from "../config/styles";
import Icon from "./Icon";

interface IProps extends TextInputProps {
  icon?: string;
}
const AppTextInput = ({ icon, ...otherProps }: IProps) => {
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
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

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
  textInput: {
    ...defaultStyles.text,
    flex: 1,
  },
});
