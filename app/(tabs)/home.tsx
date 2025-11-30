import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../SearchBar';

const home = () => {
    return (
        <View style={styles.container}>
            <SearchBar />
            <Text>home</Text>
            <Link href='/searchScreen'>go to logIn</Link>
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})