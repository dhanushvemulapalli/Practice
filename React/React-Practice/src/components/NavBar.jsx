import {Link} from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
    return (<nav className="nav-bar">
        <div className="navbar-brand">
            <Link to="/">Movie List</Link>

        </div>
        <div className="navbar-search">
            <form>
                <input type="text" placeholder="Search for a movie" />
                <button type="submit">Search</button>
            </form>
        </div>
        <div className="navbar-favourites">
            <Link to="/favourites">Favourites</Link>
        </div>
    </nav>
    )
}
export default NavBar;