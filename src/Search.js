import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import ButtonLink from "./ButtonLink";

const Search = ({ onSearch }) => {
  const [name, setName] = useState("");
  return (
    <View style={styles.search}>
      <TextInput
        placeholder="Ingrese el nombre de una película"
        style={styles.textInput}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <ButtonLink title="Search" onPress={() => onSearch(name)} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  textInput: {
    height: 40,
    width: 200,
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
