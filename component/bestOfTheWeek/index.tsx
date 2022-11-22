import { FlatList, StyleSheet, Text, View } from "react-native";
import { RandomSneakersJSON } from "../../types";
import { ShoeCard } from "../shoeCard";



const data = require('../../random-data.json') as RandomSneakersJSON[];

export function BestOfTheWeek() {
    // const tab = []
    // const handledata = () => {
    //     const newData = data 
    //     tab.push(newData);
    //     }
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Les paires de la semaine</Text>
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
        height: 400
    },
    title: {
        marginBottom: 8,
        fontSize: 30,
        fontWeight: '900',
    }
})
