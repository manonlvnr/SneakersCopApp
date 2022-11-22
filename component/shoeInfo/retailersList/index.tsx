import { FlatList, StyleSheet, Text, View } from "react-native";
import { RetailerCard } from "./retailerCard";
import { RandomShopJSON } from "../../../types";


const data = require('../../../random-shop-data.json') as RandomShopJSON[];

export function RetailersList() {
    return (
        <View>
            <Text style={styles.title}>LISTE DES RETAILERS</Text>
            <FlatList 
                data={data}
                renderItem={({ item }) => {
                    const { retailerName, type, logo, available, link } = item;
                    return (
                        <RetailerCard {...item}/>
                    )
                }}
                style={[styles.container, styles.shadow]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        marginBottom: 40,
    },
    title: {
        marginBottom: 20,
        marginTop: 20,
        fontSize: 20,
        fontWeight: '800',
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})
