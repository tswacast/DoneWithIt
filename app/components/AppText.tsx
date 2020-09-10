import React from "react";
import { Text, TextStyle, StyleProp, TextProperties } from "react-native";

import defaultStyles from "../config/styles";

interface AppTextProps extends TextProperties {
  children: React.ReactNode;
}
const AppText = ({ children, style, ...otherProps }: AppTextProps) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
