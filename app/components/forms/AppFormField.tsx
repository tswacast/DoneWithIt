import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppTextInput, { AppTextInputProps } from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

export interface AppFormFieldProps extends AppTextInputProps {
  name: string;
}
const AppFormField = ({ name, ...otherProps }: AppFormFieldProps) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage
        error={(errors as { [key: string]: string })[name]}
        visible={(touched as { [key: string]: boolean })[name]}
      />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
