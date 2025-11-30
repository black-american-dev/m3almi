// SearchBar.js
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SearchBar = ({ placeholder = 'Search...' }) => {
  return (
    <View style={styles.container}>
      <Svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        style={styles.icon}
        accessibilityLabel="search icon"
        accessible
      >
        <Path
          d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
          fill="#666"
        />
      </Svg>

      <TextInput
        placeholder={placeholder}
        style={styles.input}
        returnKeyType="search"
        underlineColorAndroid="transparent"
        accessible
        accessibilityLabel="Search input"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 8,
    paddingLeft: 40, // leave space for the icon
    paddingRight: 12,
    minHeight: 44,
  },
  icon: {
    position: 'absolute',
    left: 12,
    top: '80%',
    transform: [{ translateY: -10 }], // center the 20px icon vertically
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
});

export default SearchBar;
