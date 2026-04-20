import { useState } from "react";

export default function Movie(){
    const[movie,changeMovie] = useState({name:"Titanic",rating:'P',year:2000});
    function change(){
        changeMovie(prevState=>({
            ...prevState,name:"Matrix", year:1999
        }))
    }
    return(
        <>
        <h1>Favorite Movie</h1>
        <p>Movie: {movie.name}, {movie.rating}, {movie.year}</p>
        <p><button onClick={change}>Next movie</button></p>
        </>
    );
}