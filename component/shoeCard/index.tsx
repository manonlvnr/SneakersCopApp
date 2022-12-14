import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';



interface  ShoeCardProps {
    name: string,
    price: number,
    image: string,
    releaseDate: string,
    colorName: string,
    colorHex: string,
    resell: string,
    resellHex: string,
    isDark?: boolean
    } 

export function ShoeCard ({name, price, image, releaseDate, colorName, colorHex, resell, resellHex, isDark}: ShoeCardProps) {
    const navigation = useNavigation();

    const navigateToShoeInfo = () => {
        navigation.navigate('ShoeInfo', {
            item: { name, price, image, releaseDate, colorName, colorHex, resell, resellHex},
        });
    };

    return (

        <TouchableOpacity onPress={navigateToShoeInfo}>
                <View style={isDark ? styles.containerDark : styles.container }>
                    <Image source={{ uri: image}} style={styles.image}/>
                    <View style={isDark ? styles.textContainerDark : styles.textContainer}>
                        <Text style={isDark ? [styles.colorNameDark, {color: colorHex }] : [styles.colorName, {color: colorHex }]}>{colorName}</Text>
                        <Text style={isDark ? styles.nameDark : styles.name}>{name}</Text>
                        <Text style={isDark ? styles.priceDark : styles.price}>{price} €</Text>
                        <Text style={isDark ? styles.resellDark : styles.resell}><Ionicons name="ellipse" color={resellHex}/>{resell}</Text>
                    </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 270,
        paddingTop: 70,
        display:"flex",
    },
    containerDark: {
        height: 270,
        paddingTop: 70,
        display:"flex",
    },
    image: {
        width: 200,
        height: 150,
        position:'absolute',
        zIndex: 10,
        top: -15,
        alignSelf:'center',
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
        color: '#fff',
        marginBottom: 15,
    },
    colorName: {
        width: 180,
        overflow : 'hidden',
        fontWeight : '900',
        fontSize: 20,
        marginBottom: 4,
    },
    colorNameDark: {
        width: 180,
        overflow : 'hidden',
        fontWeight : '900',
        fontSize: 20,
        marginBottom: 4,
    },
    resell: {
        width: 180,
        overflow : 'hidden',
        fontWeight : '600',
        color: '#black',
    },
    resellDark: {
        width: 180,
        overflow : 'hidden',
        fontWeight : '600',
        color: '#fff',
    },
    textContainer: {
        marginRight: 15,
        backgroundColor: '#fff',
        borderRadius: 18,
        paddingTop: 55,
        paddingBottom: 25,
        paddingLeft: 20,
        paddingRight: 50,
        zIndex: -1,
    },
    textContainerDark: {
        marginRight: 15,
        backgroundColor: '#1C1C1C',
        borderRadius: 18,
        paddingTop: 55,
        paddingBottom: 25,
        paddingLeft: 20,
        paddingRight: 50,
        zIndex: -1,
    },
    price: {
        paddingBottom: 10,
        fontWeight : '600',
    },
    priceDark: {
        paddingBottom: 10,
        fontWeight : '600',
        color: '#fff',
    },
})
