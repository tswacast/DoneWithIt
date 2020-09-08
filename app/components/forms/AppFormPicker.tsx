import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker, { PickerItem } from "../AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

export interface AppFormPickerProps {
  items: PickerItem[];
  name: string;
  placeholder: string;
}
const AppFormPicker = ({ items, name, placeholder }: AppFormPickerProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={(values as { [key: string]: any })[name]}
      />
      <ErrorMessage
        error={(errors as { [key: string]: string })[name]}
        visible={(touched as { [key: string]: boolean })[name]}
      />
    </>
  );
};

export default AppFormPicker;
