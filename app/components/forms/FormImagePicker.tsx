import React from 'react';
import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';
import { useFormikContext } from 'formik';

export interface FormImagePickerProps {
  name: string;
}

const FormImagePicker = ({ name }: FormImagePickerProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = (values as { [key: string]: string[] })[name];
  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (index: number) => {
    setFieldValue(
      name,
      imageUris.filter((_u, i) => i !== index)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage
        error={(errors as { [key: string]: string })[name]}
        visible={(touched as { [key: string]: boolean })[name]}
      />
    </>
  );
};

export default FormImagePicker;
