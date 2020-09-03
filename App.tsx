import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import { Picker } from "@react-native-community/picker";
import AppPicker from "./app/components/AppPicker";

const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3},
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
