import React from 'react'
import {FlatList, StyleSheet, Text, View} from  'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})

// Current iteration is in a list format built off 
// from Reacts FlatList component

const MorseTable = () => {
    return <View style={styles.container}>
        <FlatList
            data={[
                {key: 'A', value: '.-'},
                {key: 'B', value: '-...'},
                {key: 'C', value: '-.-.'},
                {key: 'D', value: '-..'},
                {key: 'E', value: '.'},
                {key: 'F', value: '..-.'},
                {key: 'G', value: '--.'},
                {key: 'H', value: '....'},
                {key: 'I', value: '..'},
                {key: 'J', value: '.---'},
                {key: 'K', value: '-.-'},
                {key: 'L', value: '.-..'},
                {key: 'M', value: '--'},
                {key: 'N', value: '-.'},
                {key: 'O', value: '---'},
                {key: 'P', value: '.--.'},
                {key: 'Q', value: '--.-'},
                {key: 'R', value: '.-.'},
                {key: 'S', value: '...'},
                {key: 'T', value: '-'},
                {key: 'U', value: '..-'},
                {key: 'V', value: '...-'},
                {key: 'W', value: '.--'},
                {key: 'X', value: '-..-'},
                {key: 'Y', value: '-.--'},
                {key: 'Z', value: '--..'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key} | {item.value}</Text>}
        />
    </View>
};

export default MorseTable;