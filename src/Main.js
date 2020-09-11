import Axios from "axios";
import React, { useState } from "react";
import { FlatList, Keyboard, StyleSheet, Text, View } from "react-native";
import MovieResultButton from "./MovieResultButton";
import Search from "./Search";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (name) => {
    setSelectedMovie(null);

    //Clear focus
    Keyboard.dismiss();

    if (name === "") {
      setMovies([]);
      return;
    }

    const response = await Axios.get(
      `http://www.omdbapi.com/?s=${name}&apikey=93064b0b`
    );
    setMovies(response.data?.Search);
  };

  return (
    <View style={styles.main}>
      <Search onSearch={handleSearch} />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <MovieResultButton
            title={item.Title}
            onPress={() => setSelectedMovie(item)}
          />
        )}
      />

      {selectedMovie && <Text>{selectedMovie?.Title}</Text>}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
