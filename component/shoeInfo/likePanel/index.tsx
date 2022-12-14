import { useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import * as Random from 'expo-random';
import { Buffer } from "buffer";

export function LikePanel() {
    const [upLike, setupLike] = useState(false);
    const upLikeNumber = useMemo (()=>Random.getRandomBytes(1), []);

    const [downLike, setdownLike] = useState(false);
    const downLikeNumber = useMemo (()=>Random.getRandomBytes(1), []);



    return (
        <View style={[styles.mainContainer, styles.shadow]}>
            <TouchableOpacity onPress={() => setupLike(!upLike)}>
                {upLike ? (
                        <View style={styles.upContainer}>
                            <Ionicons name="thumbs-up" size={30} color="#00ffb0" style={styles.upIcon}/>
                            <Text>{upLikeNumber}</Text>
                        </View>
                    ) : (
                        <View style={styles.upContainer}>
                            <Ionicons name="thumbs-up" size={30} color="black" style={styles.upIcon}/>
                            <Text>{upLikeNumber}</Text>
                        </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setdownLike(!downLike) }>
                {downLike ? (
                        <View style={styles.downContainer}>
                            <Text>{downLikeNumber}</Text>
                            <Ionicons name="thumbs-down" size={30} color="red" style={styles.downIcon}/>
                        </View>
                    ) : (
                        <View style={styles.downContainer}>
                            <Text>{downLikeNumber}</Text>
                            <Ionicons name="thumbs-down" size={30} color="black" style={styles.downIcon}/>
                        </View>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-around",
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 25,
        paddingHorizontal: 15,
        width: '100%',
        marginVertical: 10,
        marginBottom: 40,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    upIcon: {
        paddingHorizontal: 10,

    },
    downIcon: {
        paddingHorizontal: 10,
    },
    upContainer: {
        display:"flex",
        flexDirection:"row",
        alignItems: "center"
    },
    downContainer: {
        display:"flex",
        flexDirection:"row",
        alignItems: "center"
    },
})
