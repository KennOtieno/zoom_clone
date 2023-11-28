import React from 'react'
import { View, SafeAreaView, StyleSheet } from "react-native"
import Header from "../components/Header"
import Searchbar from '../components/Searchbar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'

function Home() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{height: '100%'}}>
                <Header />
                <Searchbar />
                <MenuButtons />
                <ContactsMenu />
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColour: "1c1c1c"
        padding: 15
    }
})