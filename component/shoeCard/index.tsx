import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

interface  ShoeCardProps {
    name: string,
    price: number,
    image: string,
    releaseDate: string,
    colorName: string,
    colorHex: string,
    resell: string,
    resellShop: string[],
}

export function ShoeCard ({name, price, image, releaseDate, colorName, colorHex, resell, resellShop}: ShoeCardProps) {
    const navigation = useNavigation();

    const navigateToShoeInfo = () => {
        // On créer un objet 'item' avec les informations qu'on
        // souhaite envoyer à notre nouvelle page
        navigation.navigate('ShoeInfo', {
            item: { name, price, image, releaseDate, colorName, colorHex, resell, resellShop},
        });
        // On envoie l'url, les likes pour éviter de générer un autre random
        // on envoie aussi l'information sur le like ainsi que l'id pour pouvoir
        // télécharger les informations de l'author
    };

    return (
        <TouchableOpacity onPress={navigateToShoeInfo}>
            <View style={styles.container}>
                <Image source={{ uri: image}} style={styles.image}/>
                <View style={styles.textContainer}>
                    <Text style={[styles.colorName, {color: colorHex }]}>{colorName}</Text>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.resell}><Ionicons name="ellipse" style={styles.icons}/>{resell}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 15,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    name: {
        width: 180,
        overflow : 'hidden',
        fontWeight : '600',
        color: '#black',
        marginBottom: 15,
    },
    colorName: {
        width: 180,
        overflow : 'hidden',
        fontWeight : '900',
        fontSize: '20',
        marginBottom: 4,
    },
    resell: {
        width: 180,
        overflow : 'hidden',
        fontWeight : '600',
        color: '#black',
    },
    textContainer: {
        paddingBottom: 10,
    },
})
