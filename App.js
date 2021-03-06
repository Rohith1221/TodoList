import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Task } from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays tasks */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/*  Tasks here */}
          <Task text={"learn react native"} id={1} />
          <Task text={"do cp"} id={2} />
          <Task text={"rest well"} id={3} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EaEd",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: { marginTop: 30 },
});
