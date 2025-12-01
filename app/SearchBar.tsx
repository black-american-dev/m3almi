// SearchBar.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const SearchBar = ({ placeholder = 'Search...' }) => {
  return (
      <TextInput
        placeholder={placeholder}
        style={styles.container}
        returnKeyType="search"
        underlineColorAndroid="transparent"
        placeholderTextColor="#888" // <-- set your desired placeholder color
        textColor="#fff"            // <-- input text color
        accessible
        accessibilityLabel="Search input"
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292929',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#373737',
    paddingVertical: 0,
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
});

export default SearchBar;
