import AsyncStorage from "@react-native-async-storage/async-storage";
import { string } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { View , FlatList} from "react-native";
import { useFavorites } from "../../../context/favorites";
import { RandomSneakersJSON } from "../../../types";
import { ShoeCard } from "../../shoeCard";

export default function FavoritesList() {
    const [favoriteItems, setFavoriteItems] = useState()
    const favoriteContext = useFavorites()
    useEffect(() => {
        const fav = favoriteContext.favorites
        let arrayFav = []
        const data = require('../../../random-data.json') as RandomSneakersJSON[];
       for(let key in fav ){
        if(fav[key] === true ){
            data.forEach( item => {
                if(item.name === key){
                    arrayFav.push(item)
                }
            } )
        }
       }
       setFavoriteItems(arrayFav)
        },[favoriteContext.toggleFavorite])
    return (
        <View>
        <FlatList 
            data={favoriteItems}
            renderItem={({ item }) => {
                return (
                    <ShoeCard {...item}/>
                )
            }}
        />
    </View>
    );
}
