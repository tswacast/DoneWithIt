import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IProps {
  name: string;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}
const Icon = ({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}: IProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
