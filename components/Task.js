import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemtext}>
          {props.id}: {props.text}
        </Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

// rnss

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemleft: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    marginRight: 15,
    borderRadius: 5,
  },
  itemtext: {
    fontSize: 20,
    maxWidth: "80%",
    color: "black",
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#55bcf6",
    borderWidth: 2,
    borderRadius: 5,
  },
});
