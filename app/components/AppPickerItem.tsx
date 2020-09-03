import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AppText from './AppText'

interface IProps {
    label: string | number;
    onPress: () => void;
}
const AppPickerItem = ({label, onPress}: IProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    )
}

export default AppPickerItem

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})
