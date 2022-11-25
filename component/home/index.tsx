// import { BestOfTheWeek } from "../bestOfTheWeek";

import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { BestOfTheWeek } from "./bestOfTheWeek";
import { BestResell } from "./bestResell";
import { Header } from "./header";

export default function Home() {
    return (
        <ScrollView>
            <View style={styles.header}>
                <Header/>
            </View>
            <View style={styles.List}>
                <BestOfTheWeek />
            </View>
            <View style={styles.List}>
                <BestResell />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    List: {
        flex: 1, 
    },
    header: {
        backgroundColor:"black",
        paddingTop: 65,
        paddingBottom: 40,
        paddingHorizontal: 30,
    }
});
