import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <ListingDetailsScreen />
      {/* <Card
        title="Red jacket for sell"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
