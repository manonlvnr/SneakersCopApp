import { Button, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import React, { useRef } from "react";
import { Size } from "./size";
import { Lexicon } from "./lexicon";

export function Tools() {
    const refRBSheet = useRef();
    const refRBSheet2 = useRef();

    return (
        <View>
            <View>
                <Button title="Guide des tailles" onPress={() => refRBSheet.current.open()} />
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

            <View>
                <Button title="Lexique de la sneaker" onPress={() => refRBSheet2.current.open()} />
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

    );
}
