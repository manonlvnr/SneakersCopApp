// import { BestOfTheWeek } from "../bestOfTheWeek";

import React from "react";
import { StyleSheet, View } from "react-native";
import { BestOfTheWeek } from "../bestOfTheWeek";

export default function Home() {
    return (
            <View style={styles.bestOfTheWeek}>
                <BestOfTheWeek />
            </View>
    );
}

const styles = StyleSheet.create({
    bestOfTheWeek: {
        flex: 1, 
        alignItems: 'center',
    },
});
