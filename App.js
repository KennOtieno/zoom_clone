import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/HomeScreen'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
   return <Home />
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColour: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    }
})