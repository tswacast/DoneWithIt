import React from 'react'
import { StyleSheet, View } from 'react-native'

const ListItemSeparator = () => {
    return (
        <View style={styles.separator} />
    )
}

export default ListItemSeparator

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: 'lightgrey',
    },
})
