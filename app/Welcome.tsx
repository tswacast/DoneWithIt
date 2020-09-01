import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  ImageBackground,
} from "react-native";

export default function Welcome() {
  return (
    <>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("./assets/background.jpg")}
      >
        <Image
          style={styles.logoImage}
          source={require("./assets/logo-red.png")}
        />
        <Text>Sell what you don't need</Text>
      </ImageBackground>
      <View style={[styles.button, styles.loginButton]} />
      <View style={[styles.button, styles.registerButton]} />
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    alignItems: "center",
  },
  logoImage: {
    resizeMode: "cover",
    height: 75,
    width: 75,
  },
  button: {
    height: 50,
    width: "100%",
  },
  loginButton: {
    backgroundColor: "tomato",
  },
  registerButton: {
    backgroundColor: "dodgerblue",
  },
});
