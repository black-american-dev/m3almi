import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../SearchBar';

const Home = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>How can I help you today!</Text>

        <SearchBar />

        <Text style={styles.text}>home</Text>
        
        <Link style={styles.link} href="/searchScreen">
            go to logIn
        </Link>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 70,
        backgroundColor: "#121212",
    },
    title: {
        color: "white",
        fontSize: 30,
        marginBottom: 100,
    },
    text: {
        color: "white",
        marginTop: 20,
    },
    link: {
        color: "skyblue",
        marginTop: 10,
    }
});
