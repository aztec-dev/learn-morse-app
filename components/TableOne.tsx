import { FlatList, Text, View, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    tableHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tableText: {
        fontSize: 16,
        fontWeight: '300',
        textAlign: 'center',
    }
})

const data = [
    {id: 1, letter: 'A', morseCode: ".-"},
    {id: 2, letter: 'B', morseCode: "-..."},
    {id: 3, letter: 'C', morseCode: "-.-."},
    {id: 4, letter: 'D', morseCode: "-.."},
]

const TableOne = () => {
    const item = ({item}) => (
        <View style= {{flexDirection: 'row'}}>
            <View style={{ width: '50%', backgroundColor: 'lightyellow'}}>
                <Text style={styles.tableText}>{item.letter}</Text>
            </View>
            <View style={{ width: '50%', backgroundColor: 'lightpink' }}> 
                <Text style={styles.tableText}>{item.morseCode}</Text>
            </View>
        </View>
    )
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: '5%'}}>
            <Text>Morse Code Table</Text>
            <FlatList data={data} renderItem={item} />
        </View>
    )
}

export default TableOne