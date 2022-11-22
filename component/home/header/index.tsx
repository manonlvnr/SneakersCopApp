import { StyleSheet, Text, View } from "react-native";

export function Header() {
    return (
        <View>
            <Text style={styles.app}>WhishToCop</Text>
            <Text style={styles.title}>L'appli de référence pour cop tes <Text style={styles.span}>sneakers</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    app: {
        color:"#00ffb0",
        fontSize: 40,
        fontWeight:"900",
    },
    title: {
        color:"white",
        fontSize: 35,
        fontWeight:"600",
    },
    span: {
        backgroundColor:"#00ffb0",
        color:"black",
    }
});
