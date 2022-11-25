import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Size() {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.title}>GUIDE DES TAILLES</Text>
                <Image style={styles.image} source={{ uri: 'https://cdn.shopify.com/s/files/1/0094/9701/8468/files/Capture_d_ecran_2022-02-24_a_17.05.06_600x600.png?v=1645718645' }} />
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    title: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '900',
        color: '#5F0ABB',
    },
    image: {
        height: 500,
        paddingHorizontal: 10,
    }
});
