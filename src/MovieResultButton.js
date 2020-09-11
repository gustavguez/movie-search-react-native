import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MovieResultButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MovieResultButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#385f71",
    marginHorizontal: 5,
    marginVertical: 2,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
