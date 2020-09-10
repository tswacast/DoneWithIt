import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInputProps,
  Modal,
  Button,
  FlatList,
} from "react-native";

import defaultStyles from "../config/styles";
import Icon from "./Icon";
import AppText from "./AppText";
import Screen from "./Screen";
import AppPickerItem, { AppPickerItemProps, PickerItem } from "./AppPickerItem";

export interface AppPickerProps<T extends PickerItem> extends TextInputProps {
  selectedItem?: T;
  onSelectItem?: (item: T) => void;
  numberOfColumns?: number;
  PickerItemComponent?: React.FunctionComponent<AppPickerItemProps<T>>;
  placeholder?: string;
  icon?: string;
  items: T[];
}
const AppPicker = <T extends PickerItem>({
  selectedItem,
  onSelectItem,
  items,
  numberOfColumns,
  PickerItemComponent = AppPickerItem,
  placeholder,
  icon,
}: AppPickerProps<T>) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePressItem = (item: any) => {
    console.log({ item });
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
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
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
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => handlePressItem(item)}
              />
            )}
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
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    ...defaultStyles.text,
    flex: 1,
  },
});
