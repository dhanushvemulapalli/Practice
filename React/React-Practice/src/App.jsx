// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/movie_card'


function App() {
  const movie_number = 1
  return (
    <>
    {movie_number === 1 ? <h1>Movie 1</h1> : <h1>Movie 2</h1>}
    </>
  )
}

// function Header({text}) {
//   return (
//     <>
      
//     </>
//   )
// }
export default App
