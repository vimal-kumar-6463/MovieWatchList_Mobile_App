import {StyleSheet , Text , View , ScrollView , FlatView , Image, ImageBackground} from "react-native"
import {useState , useEffect , useContext} from "react";
import MovieLi from "../components/movieLi";
import { WatchListMoviesContext } from "../store/context/watchListMovies-context";
import axios from "axios";

function WatchListPage(props) {
    
    const WatchListMoviesCtx = useContext(WatchListMoviesContext);
    const movies = WatchListMoviesCtx.movies
    console.log("Movies : ",movies)
    const watchList = []

    return (
        <ScrollView style={styles.WatchPanel}>
            <ImageBackground style={styles.WatchList}>
                {movies.map((item) => <MovieLi key={item.id} id={item.id} name={item.original_title} image={item.poster_path} score={item.vote_average} episodes={1}
                description={item.overview} poster_path={item.poster_path} searchModal={props.searchModal} details={item}  />)} 
            </ImageBackground>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    WatchPanel : {
        // flex : 1,
        // display : "flex",
        // justifyContent : "center",
        // alignItems : "center",
        margin : 5
    },
    WatchList : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        flexWrap : "wrap"
    }
})


export default WatchListPage ;