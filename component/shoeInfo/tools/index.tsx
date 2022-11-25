import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import React, { Fragment, useRef, useState } from "react";
import { Size } from "./size";
import { Lexicon } from "./lexicon";
import {Ionicons} from '@expo/vector-icons';


export function Tools() {
    const refRBSheet = useRef();
    const refRBSheet2 = useRef();

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>OUTILS</Text>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => refRBSheet.current.open()} style={[styles.sizeContainer, styles.shadow]}>
                    <Ionicons name="list-outline" size={25} style={styles.sizeIcon}/>
                    <Text style={styles.sizeText}>Guide des tailles</Text>
                    <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        height={600}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                        }}
                        >
                        <Size/>
                    </RBSheet>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => refRBSheet2.current.open()} style={[styles.lexicalContainer, styles.shadow]}>
                    <Ionicons name="book-outline" size={25} style={styles.lexicalIcon}/>
                    <Text style={styles.lexicalText}>Lexique de la sneaker</Text>
                    <RBSheet
                        ref={refRBSheet2}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        height={600}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                            }}
                            >
                        <Lexicon/>
                    </RBSheet>
                </TouchableOpacity>
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
    sizeText: {
        fontSize: 12,
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
    lexicalText: {
        fontSize: 12,
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})
