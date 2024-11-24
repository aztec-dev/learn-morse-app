import { Text, SafeAreaView } from "react-native";
import MorseTable from "./learn/MorseTable";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
    <MorseTable></MorseTable>      
    </SafeAreaView>
  );
}
