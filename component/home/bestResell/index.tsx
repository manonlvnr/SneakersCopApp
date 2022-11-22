import { FlatList, StyleSheet, Text, View } from "react-native";
import { RandomSneakersJSON } from "../../../types";
import { ShoeCard } from "../../shoeCard";

const data = require('../../../random-data.json') as RandomSneakersJSON[];

export function BestResell() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LES PAIRES LES PLUS RENTABLES</Text>
            <FlatList 
                horizontal
                data={data}
                renderItem={({ item }) => {
                    const { name, price, image, releaseDate, colorName, colorHex, resell } = item;
                    if (item.resell == "good" || item.resell == "very good")  {
                    return (
                        <ShoeCard {...item} isDark/>
                    ) }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingVertical: 30,
        backgroundColor:"#00ffb0",
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        maxWidth: 250,
    }
})
