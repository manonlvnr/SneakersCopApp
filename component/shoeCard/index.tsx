import { useNavigation } from "@react-navigation/native";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
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
    onFavorite: () => void,
    } 

export function ShoeCard ({name, price, image, releaseDate, colorName, colorHex, resell, onFavorite}: ShoeCardProps) {
    const navigation = useNavigation();

    const navigateToShoeInfo = () => {
        // On créer un objet 'item' avec les informations qu'on
        // souhaite envoyer à notre nouvelle page
        navigation.navigate('ShoeInfo', {
            item: { name, price, image, releaseDate, colorName, colorHex, resell, onFavorite},
        });
    };

    const [toggleStyle, setlighStyle] = useState(true);
    const lightStyle = () => {
        setlighStyle(true);
    };


    return (
        <TouchableOpacity onPress={navigateToShoeInfo}>
            <View style={toggleStyle ? styles.container : styles.containerDark }>
                <Image source={{ uri: image}} style={styles.image}/>
                <View style={toggleStyle ? styles.textContainer : styles.textContainerDark}>
                    <Text style={toggleStyle ? [styles.colorName, {color: colorHex }] : [styles.colorNameDark, {color: colorHex }]}>{colorName}</Text>
                    <Text style={toggleStyle ? styles.name : styles.nameDark}>{name}</Text>
                    <Text style={toggleStyle ? styles.price : styles.priceDark}>{price}</Text>
                    <Text style={toggleStyle ? styles.resell : styles.resellDark}><Ionicons name="ellipse" style={styles.icons}/>{resell}</Text>
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
    containerDark: {
        marginRight: 10,
        backgroundColor: 'black',
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
    nameDark: {
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
    colorNameDark: {
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
    resellDark: {

    },
    textContainer: {
        paddingBottom: 10,
    },
    textContainerDark: {
        paddingBottom: 10,
    },
    price: {
        paddingBottom: 10,
    },
    priceDark: {
        paddingBottom: 10,
    },
})
