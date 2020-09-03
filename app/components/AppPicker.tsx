import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, TextInputProps, Modal, Button, FlatList, TouchableOpacityComponent } from "react-native";

import defaultStyles from "../config/styles";
import Icon from "./Icon";
import AppText from "./AppText";
import Screen from "./Screen";
import AppPickerItem from "./AppPickerItem";
import colors from "../config/colors";

interface IPickerItem {
  label: string;
  value: string | number;
}
interface IProps extends TextInputProps {
  selectedItem?: IPickerItem;
  onSelectItem?: (item: IPickerItem) => void;
  placeholder?: string;
  icon?: string;
  items: IPickerItem[];
}
const AppPicker = ({ selectedItem, onSelectItem, items, placeholder, icon }: IProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePressItem = (item: any) => {
    onSelectItem && onSelectItem(item);
    setIsModalVisible(false);
  };

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
          <AppText style={[styles.text, !selectedItem && {color: colors.medium}]}>{selectedItem ? selectedItem.label : placeholder}</AppText>
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
            renderItem={({item}) => <AppPickerItem label={item.label} onPress={() => handlePressItem(item)}/>}
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
