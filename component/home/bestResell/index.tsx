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
                    const { name, price, image, releaseDate, colorName, colorHex, resell, resellShop } = item;
                    if (item.resell == "good" || item.resell == "very good")  {
                    return (
                        <ShoeCard {...item}/>
                    ) }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        marginBottom: 20,
    },
    title: {
        marginBottom: 8,
        fontSize: 30,
        fontWeight: '900',
    }
})
