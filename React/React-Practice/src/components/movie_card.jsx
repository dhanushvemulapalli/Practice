import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContexts"

function MovieCard({movie}){
    const {isFavourite,addToFavourites,removeFromFavourites} = useMovieContext();
    const isFav = isFavourite(movie.id);


    function handleClick(e){
        e.preventDefault();
        if(isFav) removeFromFavourites(movie.id);
        else addToFavourites(movie);
        // alert("clicked")
    }
    return( 
        <div className="movie-card">
            <div className="movie-poster">
                <img src = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt = {movie.title} />
                <div className="movie-overlay">
                    <button className={`favourite-btn${isFav ? " active" : ""}`} onClick={handleClick}>
                        🤍</button>
                </div>

            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>

        </div>
    )
}

export default MovieCard