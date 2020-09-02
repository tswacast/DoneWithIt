import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

const user = {
  name: "Tom Wacaster",
  email: "tswacaster@gmail.com",
  image: require("../assets/mosh.jpg"),
};

const AccountScreen = () => {
  return (
    <Screen style={styles.container}>
      <View>
        <ListItem title={user.name} subTitle={user.email} image={user.image} />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
  },
});
