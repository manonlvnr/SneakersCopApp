import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Tools } from "./tools";

interface ShoesInfoProps {
    route: any;
}

export function ShoeInfo({route}: ShoesInfoProps) {
    const { item } = route.params;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.colorName}>{item.colorName}</Text>
                    <Text style={styles.resell}><Ionicons name="ellipse"/>{item.resell}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.topText}>
                        <Text style={styles.dropDate}>DROP DATE :</Text>
                        <Text style={styles.releaseDate}>{item.releaseDate}</Text>
                    </View>
                    <View style={styles.bottomText}>
                        <Text style={styles.retail}>PRIX RETAIL:{item.price}</Text>
                    </View>
                </View>
            </View>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.likeShareContainer}>
                <TouchableOpacity style={styles.ShareContainer}>
                    <Ionicons name="share-outline" size="30"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeContainer}>
                    <Ionicons name="star-outline" size="30"/>
                </TouchableOpacity>
            </View>
            <Tools/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
    },
    topContainer: {
        width:'100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    leftContainer: {
    },
    rightContainer: {
        padding: 8,
        width: 175,
    },
    bottomText: {
        backgroundColor: '#00ffb0',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        padding: 8,
    },
    dropDate: {
        textAlign:'right',
        color: 'white',
        fontWeight: '800',
    },
    releaseDate: {
        textAlign:'right',
        color: 'white',
        fontWeight: '800',
    },
    retail: {
        color: 'black',
        fontWeight: '800',

    },
    topText: {
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        backgroundColor: 'black',
        padding: 8,
    },
    image: {
        resizeMode: 'cover',
        height: 200,
        width: '100%',
    },
    resell: {
        
    },
    colorName: {
    },
    name: {
        padding: 8,
    },
    likeShareContainer: {
        width:'100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    likeContainer: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#C0C0C0',
        height: 50,
        width: '45%',
        padding: 10,
        alignItems: 'center',
    },
    ShareContainer: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#C0C0C0',
        height: 50,
        width: '45%',
        padding: 10,
        alignItems: 'center',
    },
});
