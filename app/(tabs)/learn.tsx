import { View, Text, StyleSheet } from "react-native";
import MorseTable from "../components/MorseTable";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Tab() {
  return <MorseTable></MorseTable>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
