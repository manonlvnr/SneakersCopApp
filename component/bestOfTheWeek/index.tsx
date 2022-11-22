import { FlatList, StyleSheet, Text, View } from "react-native";
import { RandomSneakersJSON } from "../../types";
import { ShoeCard } from "../shoeCard";



const data = require('../../random-data.json') as RandomSneakersJSON[];

export function BestOfTheWeek() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LES PAIRES DE LA SEMAINE</Text>
            <FlatList 
                horizontal
                data={data}
                renderItem={({ item }) => {
                    const { name, price, image, releaseDate, colorName, colorHex, resell } = item;
                    return (
                        <ShoeCard {...item}/>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingVertical: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        maxWidth: 200,
    }
})
