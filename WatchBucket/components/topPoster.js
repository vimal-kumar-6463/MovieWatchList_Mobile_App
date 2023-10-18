import { StyleSheet , View , Text , Image, Pressable , ImageBackground } from "react-native";
import PagerView from "react-native-pager-view";
import {useState , useEffect} from 'react';
import Poster from "./poster";

export default function TopPoster (props) {
    
    const [posterMovies , setPosterMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key='+"f246cf94cc80b0dec2d0fb9e17517dc7")
        .then(data => data.json())
        .then(movies => {setPosterMovies(movies.results.slice(0,4))})
        .catch(err => console.log(err))
    },[])

    return ( 
        <View style={[styles.container]}>
        <PagerView style={styles.pagerView}>
            {posterMovies.map((item , i ) => <Poster posterMovie={item} key={i.toString()} id={item.id} name={item.original_title} image={item.poster_path} score={item.vote_average} 
                                                    description={item.overview} poster_path={item.poster_path} details={item}/>)}
        </PagerView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : 450,
        height : 200,
        maxWidth : "95%",
        maxHeight : "40%",
        borderRadius : 5,
        overflow : "hidden",
        margin : 10,
    },
    pagerView : {
        width : 450,
        height : 200,
        maxWidth : "100%",
        maxHeight : "100%",
        backgroundColor : "#61677A",
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-end",
        alignItems : "flex-end",
        overflow : "hidden"
    },
    posterPopUp : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-end",
        alignItems : "flex-start",
        width : 240,
        height : 75,
        zIndex : 1,
        margin : 5,
        marginLeft : 10,
        backgroundColor : "#61677A",
        padding : 10,
        borderRadius : 20,
    },
    posterDet : {
        flex : 8 ,
    },
    simpleText : {
        fontSize : 20,
        color : "green",
        backgroundColor : "grey"
    },
    label : {
        textAlign : "left",
        fontWeight : "bold",
        fontSize : 17.5,
        color : "white",
    }
})
