import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  ImageBackground,
} from "react-native";

export default function ViewImage() {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <View style={[styles.button, styles.backButton]} />
        <View style={[styles.button, styles.deleteButton]} />
      </View>
      <Image style={styles.image} source={require("./assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
  },
  actionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    height: 50,
    width: 50,
  },
  backButton: {
    backgroundColor: "tomato",
  },
  deleteButton: {
    backgroundColor: "dodgerblue",
  },
  image: {
    flex: 1,
    resizeMode: "center",
  },
});
