import { StyleSheet , Text , Image , View , Pressable, ImageBackground , viewPagerAndroid} from "react-native";
import Movie2 from "./movie2.js"
import GENRE from './genre.js';
import {useContext} from "react";
import { WatchListMoviesContext } from "../store/context/watchListMovies-context.js";


export default function MovieLi (props) {
    
    const WatchListMoviesCtx = useContext(WatchListMoviesContext);
    var isInWatchList = false
    WatchListMoviesCtx.movies.forEach((movie) => {
        if(movie.id === props.id){
            isInWatchList = true
        }
    })
    console.log("IsAdded : ",isInWatchList);
    
    function changeWatchListStatusHandler(id) {
        const data = props.details;
        if(isInWatchList){
            WatchListMoviesCtx.removeMovie(id)
        }else{
            WatchListMoviesCtx.addMovie(data)
        }
    }

    return (
        <View style={styles.MovieLiContainer}>
            <Movie2 score={props.score} name={props.name} image={props.image} modalVisibility={false}/>
            <View style={styles.MovieDet}>
                <View style={styles.MovieTitle}>
                    <Text style={styles.MovieDetName}>{(props.name.length < 25)?props.name:props.name.slice(0,25)+"..."}</Text>
                    <View style={styles.wrap}>
                        {props.details.genre_ids.slice(0,3).map((item,i )=> <Text style={styles.MovieDetEpi} key={i}>{GENRE[item]}</Text>)}
                    </View>
                </View>
                <Text style={styles.MovieDescription}>{(props.description.length < 150)?props.description:props.description.slice(0,150)+"..."}</Text>
                <View style={styles.button}>
                    <View style={{borderRadius : 30 , overflow : "hidden" , marginRight : 5,}}>
                        <Pressable android_ripple={{color : "grey" , borderless: false}} onPress={() => {changeWatchListStatusHandler(props.id)}} >
                            <Image style={styles.Add_Rem_icon} source={isInWatchList?require("../assets/remove.png"):require("../assets/add-new.png")}/>
                        </Pressable>
                    </View>
                </View>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    MovieLiContainer : {
        width : "97.5%",
        height : 210,
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "center",
        backgroundColor : "#27374D",
        borderRadius : 10,
        margin : 4,
    },
    MovieDet : {
        width : "67.5%",
        height : "95%",
        display : "flex",
        justifyContent : "space-between",
        alignItems : "flex-start",
    },
    MovieDetName : {
        margin : 5,
        marginBottom : 0,
        fontSize : 16,
        fontWeight : "bold",
        color : "white",
        textAlign : "left",
    },
    MovieDetEpi : {
        width : "auto",
        minWidth : 50,
        backgroundColor : "grey",
        padding : 2.5,
        paddingRight : 5,
        paddingLeft : 5,
        borderRadius : 10,
        margin : 2,
        fontSize : 10,
        fontWeight : "bold",
        color : "white",
        textAlign : "center",
        opacity : 0.9,
    },
    MovieTitle : {
        display : "flex",
        gap : 5
    },
    MovieDescription : {
        height : 65,
        margin : 5,
        textAlign : "left",
        fontSize : 12,
        color : "white",
    },
    button : {
        width : "100%",
        marginRight : 0,
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-end",
        alignItems : "center",
    },
    Add_Rem_icon : {
        height : 50,
        width : 50,
        
    } ,
    wrap : {
        display : "flex",
        flexDirection : "row",
        height : "auto",
        flexWrap : "wrap",
        marginLeft : 5,
    }


})
