import { StyleSheet, Text, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';


export function ResellInfo() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>INFORMATIONS SUR LE RESELL</Text>
            <View style={styles.container}>
                <View style={styles.resellContainer}>
                    <Text style={styles.resellTitle}>Indice de resell</Text>
                    <View style={[styles.resellTextContainer, styles.shadow]}>
                        <Ionicons name="ellipse" size={20}/> 
                        <Text>Bon resell</Text>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitle}>Estimations</Text>
                    <View style={[styles.priceTextContainer, styles.shadow]}>
                        <Ionicons name="cash-outline" size={20}/> 
                        <Text>230€</Text>
                    </View>
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
    priceTextContainer: {
        borderRadius: 20,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
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
    resellTextContainer: {
        borderRadius: 20,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
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
