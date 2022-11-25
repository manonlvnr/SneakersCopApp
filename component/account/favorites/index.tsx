import AsyncStorage from "@react-native-async-storage/async-storage";
import { string } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { View , FlatList, Text, StyleSheet} from "react-native";
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
        <View style={styles.container}>
            <Text style={styles.name}>Mes Favoris :</Text>
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

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    name: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: '900',
        maxWidth: 200,
    },
});
