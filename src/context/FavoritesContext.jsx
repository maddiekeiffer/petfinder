import React, {
    useReducer,
    useContext,
    createContext,
    useCallback,
  } from "react";
  import {
    ADD_FAVORITE,
    CLEAR_FAVORITES,
    favoritesReducer,
    INITIAL_FAVORITE_STATE,
    REMOVE_FAVORITE,
  } from "../reducers/favoritesReducer";
  
  const FavoritesContext = createContext(null);
  
  export const useFavoritesContext = () => {
    return useContext(FavoritesContext);
  }
  
  export function FavoritesProvider(props) {
    const [favorites, dispatch] = useReducer(
      favoritesReducer,
      INITIAL_FAVORITE_STATE
    );
  
    const addFavorite = useCallback(
      (animal) => {
        dispatch({ type: ADD_FAVORITE, payload: animal });
      },
      [dispatch]
    );
  
    const removeFavorite = useCallback(
      (animal_id) => {
        dispatch({ type: REMOVE_FAVORITE, payload: animal_id });
      },
      [dispatch]
    );
  
    const clearFavorites = useCallback(() => {
      dispatch({ type: CLEAR_FAVORITES });
    }, [dispatch]);
  
    return (
      <FavoritesContext.Provider
        value={{ favorites, addFavorite, removeFavorite, clearFavorites }}
      >
        {props.children}
      </FavoritesContext.Provider>
    );
  }