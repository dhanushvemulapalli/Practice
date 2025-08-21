// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import MovieCard from './components/movie_card'
import { MovieProvider } from './contexts/MovieContexts'
import Favourite from './pages/Favourites'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  // const movie_number = 1
  return (
    // <div>
    //   <NavBar/>
         
    // <main className="main-content">
    //   <Routes>
    //     <Route path = "/" element={<Home />} />
    //     <Route path = "/favourites" element={<Favourite />} />
    //   </Routes>
    // </main>
    // </div>
    <MovieProvider>
        //   <NavBar/>
         
     <main className="main-content">
       <Routes>
         <Route path = "/" element={<Home />} />
    <Route path = "/favourites" element={<Favourite />} />
    </Routes>
    </main>
    </MovieProvider>
  );
}
export default App

// function App(){
//   return(
//     <p>Huiii</p>
//   )
// }