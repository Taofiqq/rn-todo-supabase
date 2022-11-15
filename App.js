import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./src/components/AddTodo";
import ListTodo from "./src/components/ListTodo";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>List of Todo Tasks to be Done</Text>
      <AddTodo />
      <ListTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
