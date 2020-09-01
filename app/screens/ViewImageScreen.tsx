import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";

const ViewImageScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <MaterialCommunityIcons
          color="white"
          size={30}
          style={styles.closeIcon}
          name="close"
        />
        <MaterialCommunityIcons
          color="white"
          size={30}
          style={styles.deleteIcon}
          name="trash-can-outline"
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/chair.jpg")}
        />
      </View>
    </Screen>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
