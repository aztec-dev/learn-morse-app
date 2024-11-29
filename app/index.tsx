import { Text, SafeAreaView, ScrollView } from "react-native";
import MorseTable from "./learn/MorseTable";

export default function Index() {
  return (
    <ScrollView>
      <MorseTable></MorseTable>
    </ScrollView>
  );
}
