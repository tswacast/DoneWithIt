import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, TextInputProps, Modal, Button, FlatList } from "react-native";

import defaultStyles from "../config/styles";
import Icon from "./Icon";
import AppText from "./AppText";
import Screen from "./Screen";
import AppPickerItem from "./AppPickerItem";

interface IProps extends TextInputProps {
  placeholder?: string;
  icon?: string;
  items: {label: (string | number), value: (string | number)}[];
}
const AppPicker = ({ items, placeholder, icon }: IProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              size={30}
              name={icon}
              iconColor={defaultStyles.colors.medium}
              backgroundColor={defaultStyles.colors.light}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <Icon
            size={30}
            name="chevron-down"
            iconColor={defaultStyles.colors.medium}
            backgroundColor={defaultStyles.colors.light}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isModalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setIsModalVisible(false)}/>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({item}) => <AppPickerItem label={item.label} onPress={() => setIsModalVisible(false)}/>}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    margin: 10,
  },
  text: {
    ...defaultStyles.text,
    flex: 1,
  },
});
