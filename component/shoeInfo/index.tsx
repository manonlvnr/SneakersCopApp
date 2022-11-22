import { Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RetailersList } from "./retailersList";
import { Tools } from "./tools";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { ResellInfo } from "./resellInfo";
import { LikePanel } from "./likePanel";
import { style } from "glamor";

interface ShoesInfoProps {
    route: any;
}

export function ShoeInfo({route}: ShoesInfoProps) {
    const { item } = route.params;

    const shareImage = async () =>{
        Share.share({ message:'Check ces sneakers elles sont top!', title:'Skeakers' });
    }

    const json = JSON.stringify(route.params);

    const [favoriteSneakers, setfavoriteSneakers] = useState('');

    const saveData = async () => {
        try {
            await AsyncStorage.setItem("sneaker", json)
            alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    const readData = async () => {
        try {
        const value = await AsyncStorage.getItem("sneaker");

        if (value !== null) {
            const favorites = JSON.parse(value);
            setfavoriteSneakers(favorites);
        }
        } catch (e) {
        alert('Failed to fetch the input from storage');
        }
    };

    useEffect(() => {
        readData();
    }, []);
    

// console.log(favoriteSneakers);


    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={[styles.colorName, {color: item.colorHex }]}>{item.colorName}</Text>
                    <Text style={styles.resell}><Ionicons name="ellipse"/>{item.resell}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.topText}>
                        <Text style={styles.dropDate}>DROP DATE :</Text>
                        <Text style={styles.releaseDate}>{item.releaseDate}</Text>
                    </View>
                    <View style={styles.bottomText}>
                        <Text style={styles.retail}>PRIX RETAIL: {item.price}€</Text>
                    </View>
                </View>
            </View>
            <Image style={styles.image} source={{ uri: item.image }} />
            <LikePanel/>
            <View style={styles.likeShareContainer}>
                <TouchableOpacity style={[styles.ShareContainer, styles.shadow]} onPress={() => shareImage() }>
                    <Ionicons name="share-outline" size="30"/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.likeContainer, styles.shadow]} onPress={saveData}>
                    <Ionicons name="star-outline" size="30"/>
                </TouchableOpacity>
            </View>
            <ResellInfo/>
            <Tools/>
            <RetailersList/>
        </ScrollView>
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
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    },
    dropDate: {
        textAlign:'right',
        color: 'white',
        fontWeight: '800',
        paddingBottom: 4,
    },
    releaseDate: {
        textAlign:'right',
        color: '#00ffb0',
        fontWeight: '800',
    },
    retail: {
        color: 'black',
        fontWeight: '800',

    },
    topText: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'black',
        padding: 10,
    },
    image: {
        resizeMode: 'cover',
        height: 200,
        width: '100%',
        marginBottom: 40,
    },
    resell: {
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
    },
    colorName: {
        paddingBottom: 8,
        textTransform: 'uppercase',
        fontWeight: '800',
        fontSize: 25,
    },
    name: {
        paddingBottom: 8,
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 15,
    },
    likeShareContainer: {
        width:'100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 20,
    },
    likeContainer: {
        borderRadius: 20,
        padding: 15,
        width: '45%',
        alignItems: 'center',
        backgroundColor: "white",
    },
    ShareContainer: {
        borderRadius: 20,
        padding: 15,
        width: '45%',
        alignItems: 'center',
        backgroundColor: "white",
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});
