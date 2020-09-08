import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppButton, { AppButtonProps } from "../AppButton";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface SubmitButtonProps extends Omit<AppButtonProps, "onPress"> {}
const SubmitButton = (props: SubmitButtonProps) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton onPress={handleSubmit} {...props} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
