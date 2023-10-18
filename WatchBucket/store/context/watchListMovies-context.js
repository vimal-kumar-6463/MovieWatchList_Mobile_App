import { createContext , useState} from "react";


export const WatchListMoviesContext = createContext({
    movies: [],
    addMovie: (id) => {},
    removeMovie: (id) => {},
})


export default function WatchListMoviesContextProvider({children}) {
     
    const [movies, setMovies] = useState([]);

    function addMovie(data) {

        console.log("Movie added with ID : ",data.id)
        setMovies((movies) => [...movies,data])
    }

    function removeMovie(id) {

        console.log("Movie removed with ID : ",id)
        setMovies((movies) => movies.filter(movie => movie.id !== id))
    }
    
    const value = {
        movies: movies,
        addMovie: addMovie,
        removeMovie: removeMovie
    }

    return <WatchListMoviesContext.Provider value={value}>{children}</WatchListMoviesContext.Provider>
}

