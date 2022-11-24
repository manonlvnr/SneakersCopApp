import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { PropsWithChildren, useContext, useEffect, useState } from "react"

type FavoritesContextType = {
  favorites: Record<string, boolean>
  toggleFavorite: (key: string) => void
}

const favoriteContext = React.createContext<FavoritesContextType | null>(null)

export const FavoriteContextProvider = ({children}: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({}) 

  useEffect(() => {
    AsyncStorage
      .getItem('favorites')
      .then(data => {
        if (data) {
          setFavorites(JSON.parse(data))
        }
      })
  }, [])

  const toggleFavorite = (key: string) => {
    const mergedfavorite = {...favorites}
    mergedfavorite[key] = mergedfavorite[key] ? !mergedfavorite[key] : true

    setFavorites(mergedfavorite)

    AsyncStorage.setItem('favorites', JSON.stringify(mergedfavorite))
  }

  return (
    <favoriteContext.Provider value={{
      favorites,
      toggleFavorite,
    }}>
      {children}
    </favoriteContext.Provider>
  )
}


export const useFavorites = () => {
  const favorites = useContext(favoriteContext)

  if (!favorites) {
    throw Error('No favorites provider initialized')
  }

  return favorites
}
