import { FlatList, StyleSheet, Text, View } from "react-native";
import { RetailerCard } from "./retailerCard";
import { RandomShopJSON } from "../../../types";


const data = require('../../../random-shop-data.json') as RandomShopJSON[];

export function RetailersList() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LISTE DES RETAILERS</Text>
            <FlatList 
                data={data}
                renderItem={({ item }) => {
                    const { retailerName, type, logo, available, link } = item;
                    return (
                        <RetailerCard {...item}/>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
    },
    title: {
        marginBottom: 8,
        fontSize: 30,
        fontWeight: '900',
    }
})
