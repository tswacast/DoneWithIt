import React from "react";
import {
  StyleSheet,
  ImageSourcePropType,
  Text,
  View,
  Image,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

interface IProps {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
}

const ListItem = ({ image, title, subTitle }: IProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
