import {StyleSheet , View , Image , Text , ScrollView , FlatView , Pressable} from "react-native"
import {useState} from 'react';
import {useEffect} from 'react';
import Movie from "../components/movie.js";
import { retrieveData } from "../components/dataControl.js";

function TrendingPage(props) {

    const [trendingMovies , setTrendingMovies] = useState([]);

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?language=english&api_key="+"f246cf94cc80b0dec2d0fb9e17517dc7")
        .then(res => res.json())
        .then(rawData => setTrendingMovies(rawData.results))
        .catch(err => console.log(err))
    },[])
    

    return (
            <>
                <Text style={styles.title}>{"🔥 Trending"}</Text>
                <ScrollView style={styles.MoviesPanel}>
                    <View style={styles.MoviesList}>
                        {trendingMovies.map((item) => 
                            <Movie key={item.id} id={item.id} name={item.original_title} image={item.poster_path} score={item.vote_average}
                            description={item.overview} poster_path={item.poster_path} searchModal={props.searchModal} details={item}/>)}
                    </View> 
                </ScrollView>
            </>
    )
}


const styles = StyleSheet.create({
    MoviesPanel : {
        flex : 1,
    },
    MoviesList : {
        display : "flex",
        flex : 1,
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center",
    },
    title : {
        fontSize : 15,
        fontWeight : "bold",
        padding : 3,
        textAlign : "left",
        color : "white"
    }
})







export default TrendingPage ;