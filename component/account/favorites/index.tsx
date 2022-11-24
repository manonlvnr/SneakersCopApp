import AsyncStorage from "@react-native-async-storage/async-storage";
import { string } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { useFavorites } from "../../../context/favorites";
import { RandomSneakersJSON } from "../../../types";

export default function FavoritesList() {
    const [favoriteItems, setFavoriteItems] = useState()
    const favoriteContext = useFavorites()
    useEffect(() => {
        let arrayFav = Object.keys(favoriteContext.favorites)
        console.log(arrayFav)

        const data = require('../../../random-data.json') as RandomSneakersJSON[];
        arrayFav.map((item) => {
            console.log(item)
            /*if (item.value === true){
                const yeah = "yeaaaah"
                return console.log(yeah)
                
            }*/
        })
        },[])
    return (
    <View>
        <View></View>
    </View>
    );
}
