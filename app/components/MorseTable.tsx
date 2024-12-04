import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "@/data/data";
// Current iteration is in a list format built off
// from Reacts FlatList component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginRight: 10,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const MorseTable = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.text}>Letter: {item.letter}</Text>
            <Image source={item.code} style={styles.image}></Image>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default MorseTable;
