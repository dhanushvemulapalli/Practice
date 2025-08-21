import { createContext,useContext,useState,useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) =>{

    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) {
          setFavourites(JSON.parse(storedFavourites));
        }
      }, []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    },[favourites])

    const addToFavourites = (movie) => {
        setFavourites([...favourites, movie]);
      };

    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter((favourite) => favourite.id !== movie.id));
      };
    
    const isFavourite = (movie) => {
        return favourites.some((favourite) => favourite.id === movie.id);
      };
    
      const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
      }
    return <MovieContext.Provider value={value}> {children}</MovieContext.Provider>
}

