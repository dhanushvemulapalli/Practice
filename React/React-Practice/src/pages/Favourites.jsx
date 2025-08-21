import React from "react";
import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContexts";
import MovieCard from "../components/movie_card";

function Favourite(){
    const {favourites} = useMovieContext();
    
    if(favourites.length > 0) return(<>
        <div className="favorites">
            <h2>Your Favourites</h2>
            <div className="favorite-list">
                {favourites.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    </>)

    return(<>
            <div className="favourite-empty">
                <h2>No Favourites</h2>
                <p>Add some favourites</p>
            </div>
    </>
    )
}
export default Favourite