function Home() {
    const movies = [
        {id : 1, title : "The Shawshank Redemption", release_date : "1994", url : "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"},
        {id : 2, title : "The Godfather", release_date : "1972", url : "https://m.media-amazon.com/images/M/MV5BMWMwMGQ5YzItY2JlNC00OWZiLWIyMDY5ZjY3YjE1ZjJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
        {id : 3, title : "The Dark Knight", release_date : "2008", url : "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"}, 
    ]
        return (
            <>
                <div className="home">
                    <div className="movies-grid"></div>
                </div>
            </>
        )
    }