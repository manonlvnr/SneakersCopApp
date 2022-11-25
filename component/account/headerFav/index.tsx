import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderFav() {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Ionicons name={"people-circle"} size={70}/>
            </View>
            <Text style={styles.name}>MANON</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        height: 250,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    },
    icon: {
        backgroundColor: "#00ffb0",
        borderRadius: 100,
        padding: 30,
        marginBottom: 20,
    }
});
