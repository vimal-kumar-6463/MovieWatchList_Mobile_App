import {StyleSheet , View , Text , Image , ScrollView , FlatView , Pressable} from "react-native"
import {useState , useEffect} from 'react';
import TopPoster from "../components/topPoster"
import Movie from "../components/movie"


function HomeScreen(props) {

    const [homeMovies , setHomeMovies] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?language=english&api_key="+"f246cf94cc80b0dec2d0fb9e17517dc7")
        .then(data => data.json())
        .then(movies => setHomeMovies(movies.results))
        .catch(err => console.log(err))
    },[])

    return (
        <>
        <TopPoster ></TopPoster>
        <ScrollView style={styles.MoviesPanel}>
            <View style={styles.MoviesList}>
                {homeMovies.map(item => <Movie key={item.id} id={item.id} name={item.original_title} image={item.poster_path} score={item.vote_average} 
                                                    description={item.overview} poster_path={item.poster_path} details={item}/>)}
            </View>
        </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    MoviesList : {
        width : "100%",
        height : "100%",
        display : "flex",
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center"     
    },
    MoviesPanel : {
      flex : 1,
      width : "95%",
      display : "flex",
      margin : 10
    }
})


export default HomeScreen ;