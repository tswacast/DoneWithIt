import React, { Component, Children } from "react";
import { Formik } from "formik";

interface AppFormProps<T extends { [key: string]: any }> {
  initialValues: T;
  onSubmit: (values: T) => void;
  validationSchema?: any;
  children: React.ReactNode;
}
const AppForm = <T,>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
