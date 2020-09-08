import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";
import { FormikErrors } from "formik";

interface IProps {
  error?: string;
  visible?: boolean;
}
const ErrorMessage = ({ error, visible }: IProps) => {
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
