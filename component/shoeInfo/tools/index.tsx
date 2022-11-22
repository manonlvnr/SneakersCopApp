import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import React, { useRef } from "react";
import { Size } from "./size";
import { Lexicon } from "./lexicon";
import Ionicons from 'react-native-vector-icons/Ionicons';


export function Tools() {
    const refRBSheet = useRef();
    const refRBSheet2 = useRef();

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>OUTILS</Text>
            <View style={styles.container}>
                <View style={[styles.sizeContainer, styles.shadow]}>
                    <Ionicons name="list-outline" size="25" style={styles.sizeIcon}/>
                    <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                        <Text>Guide des tailles</Text>
                    </TouchableOpacity>
                    <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        customStyles={{
                        wrapper: {
                            backgroundColor: "transparent",
                        },
                        draggableIcon: {
                            backgroundColor: "#000"
                        }
                        }}
                    >
                        <Size/>
                    </RBSheet>
                </View>

                <View style={[styles.lexicalContainer, styles.shadow]} elevation={5}>
                    <Ionicons name="book-outline" size="25" style={styles.lexicalIcon}/>
                    <TouchableOpacity onPress={() => refRBSheet2.current.open()}>
                        <Text>Lexique de la sneaker</Text>
                    </TouchableOpacity>
                    <RBSheet
                        ref={refRBSheet2}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        animationType={'slide'}
                        customStyles={{
                        wrapper: {
                            backgroundColor: "transparent",
                        },
                        container: {
                            height: 600,
                        },
                        draggableIcon: {
                            backgroundColor: "#000"
                        }
                        }}
                    >
                        <Lexicon/>
                    </RBSheet>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 20,
        marginTop: 20,
        fontSize: 20,
        fontWeight: '800',
    },
    mainContainer: {
        marginBottom: 20,
    },
    container: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
    },
    sizeContainer: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        borderRadius: 20,
        padding: 15,
        width: "50%",
        marginRight: 20,
        backgroundColor:"white",
    },
    sizeIcon: {
        padding: 1,
    },
    lexicalContainer: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        borderRadius: 20,
        padding: 15,
        width: "50%",
        backgroundColor:"white",
    },
    lexicalIcon: {
        padding: 2,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})
