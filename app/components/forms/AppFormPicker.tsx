import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import { AppPickerItemProps, PickerItem } from "../AppPickerItem";

export interface AppFormPickerProps<T extends PickerItem> {
  items: T[];
  name: string;
  numberOfColumns?: number;
  PickerItemComponent?: React.FunctionComponent<AppPickerItemProps<T>>;
  placeholder: string;
}
const AppFormPicker = <T extends PickerItem>({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
}: AppFormPickerProps<T>) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
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
