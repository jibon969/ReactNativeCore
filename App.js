import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
                <LoginScreen/>
            </SafeAreaView>
            <View style={styles.statusBarFooter}/>
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: "#FFF",
        color: "#000"
    },
    statusBarFooter: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: '#FFF',
                flex: 0.1,
                marginBottom: -40
            },
            android: {
                marginBottom: 0,
                flex: 0,
                backgroundColor: "#FFF",
            }
        })
    },
});
