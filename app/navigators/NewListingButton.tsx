import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native';

export interface NewListingButtonProps {
  onPress: () => void;
}

const NewListingButton = ({ onPress }: NewListingButtonProps) => {
  return (
    <TouchableOpacity style={{ overflow: 'visible' }} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color="white" size={40} />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: 'white',
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: 'center',
    overflow: 'visible',
    width: 80,
  },
});
