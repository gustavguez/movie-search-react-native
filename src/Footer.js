import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Copyright HA</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "steelblue",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
