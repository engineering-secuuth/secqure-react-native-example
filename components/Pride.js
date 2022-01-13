import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Pride = ({ title, desc }) => {
  return (
    <View style={styles.card}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginVertical: 4,
        }}
      >
        {desc}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Vitual tour</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Pride };

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#c0c0c0",
    alignSelf: "stretch",
    marginHorizontal: 30,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#2cc1ff",
    width: 150,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttontext: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
