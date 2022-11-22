import { Image, Linking, PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

interface RetailerCardProps {
    retailerName: string,
    type: string,
    logo: string,
    available: boolean,
    link: string
}

export function RetailerCard({retailerName, type, logo, available, link}: RetailerCardProps) {

    return (
        <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <View style={styles.container}>
                <Image source={{ uri: logo}} style={styles.logo}/>
                <Text>{retailerName}</Text>
                <Text>{type}</Text>
                {available ? <Text style={styles.available}>Disponible</Text> : <Text style={styles.unailable}>Indisponible</Text>}
                <Ionicons name="chevron-forward-outline" size="30"/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-around",
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 15,
        marginBottom:10,
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    available: {
        backgroundColor: '#00ffb0',
        padding: 4,
        color: 'black',
        fontWeight: '900',
    },
    unailable: {
        backgroundColor: 'black',
        padding: 4,
        color: 'white',
        fontWeight: '900',
    },
})
