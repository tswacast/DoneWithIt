import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";

import defaultStyles from "../config/styles";

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}
const AppText = ({ style, children }: IProps) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
