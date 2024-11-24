import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component'
const tableData = {
    tableHead: ['Letter', 'Morse Code'],
    tableData: [
        ['A', '.-'],
        ['B', '-...'],
        ['C', '-.-.'],
        ['D', '-..'],
        ['E', '.'],
    ],
};
const TableTwo = () => {
    const [data, setData] = useState(tableData);
    return (
        <View style={styles.container}>
            <Table>
                <Row data={data.tableHead} style={styles.head} />
                <Rows data={data.tableData}/>
            </Table>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, justifyContent: 'flex-start', backgroundColor: '#fff' },
    head: { height: 44, backgroundColor: 'white' },
    headText: { fontSize: 20, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
    text: { margin: 6, fontSize: 16, fontWeight: 'bold' , textAlign: 'center' },
})
export default TableTwo