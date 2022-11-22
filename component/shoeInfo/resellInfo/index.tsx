import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


export function ResellInfo() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>INFORMATIONS SUR LE RESELL</Text>
            <View style={styles.container}>
                <View style={styles.resellContainer}>
                    <Text style={styles.resellTitle}>Indice de resell</Text>
                    <Text style={styles.resellText}><Ionicons name="ellipse" size="20" style={styles.resellIcon}/> Bon resell</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitle}>Estimations</Text>
                    <Text style={styles.priceText}><Ionicons name="cash-outline" size="20" style={styles.priceIcon}/> 230€</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 20,
    },
    title: {
        marginBottom: 20,
        marginTop: 20,
        fontSize: 20,
        fontWeight: '800',
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    priceContainer: {
        width: "50%",
    },
    priceText: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#C0C0C0',
        padding: 15,
        textAlign: "center",
    },
    priceTitle: {
        fontSize: 18,
        paddingBottom: 8,
        paddingLeft: 8,
    },
    resellContainer: {
        width: "50%",
        marginRight: 20,
    },
    resellText: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#C0C0C0',
        padding: 15,
        textAlign: "center",
    },
    resellTitle: {
        fontSize: 18,
        paddingBottom: 8,
        paddingLeft: 8,
    },
     shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})
