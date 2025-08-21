import MovieCard from "../components/movie_card"; 
import { useState, useEffect } from "react";
import "../css/Home.css"                    
import { searchMovies, getPopularMovies } from "../services/api";
    // import { getPopularMovies } from "../services/api";
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    // const movies = [
    //     {id : 1, title : "The Shawshank Redemption", release_date : "1994", url : "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"},
    //     {id : 2, title : "The Godfather", release_date : "1972", url : "https://m.media-amazon.com/images/M/MV5BMWMwMGQ5YzItY2JlNC00OWZiLWIyMDY5ZjY3YjE1ZjJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
    //     {id : 3, title : "The Dark Knight", release_date : "2008", url : "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"}, 
    // ]
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);

            }
            catch (err) {
                setError("Failed to load popular movies");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    },[])

    // const getMovies =  async () => {
    //     const data = await getPopularMovies();
    //     setMovies(data.results);
    // }
    // getMovies();


    const handleSearch = async(e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        // setLoading(true);
        if(loading) return;
        setLoading(true);

        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }    
        catch (err) {
            setError("Failed to search movies");
        }
        finally {
            setLoading(false);

        }
        // e.preventDefault()

    }
        return (
            <>
                <div className="home">
                    <form onSubmit={handleSearch} className="search-form">
                        <input 
                        type="text" 
                        placeholder="Search for a movie" 
                        className="search-input"
                        value = {searchQuery}
                        onChange = {(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-button">Search</button>
                    </form>


                    {error && <div className="error">{error}</div>}

                    {loading ? (
                        <div className="loading">Loading...</div>
                    ):(
                    <div className="movies-grid">
                        {movies.map((movie) => 
                            (<MovieCard movie={movie} key = {movie.id} />

                        ))}
                    </div>
                    )}

                </div>
            </>
        )
    }

export default Home