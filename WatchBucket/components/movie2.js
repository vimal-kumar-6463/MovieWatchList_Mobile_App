import { StyleSheet , Text , Image , View , Pressable, ImageBackground } from "react-native";
import Rating from "./Rating";


export default function Movie2(props) {

    return (
        <>
        <Pressable android_ripple={{color : "#205295" , borderless: false}} style={styles.movieContainer}>
            <ImageBackground style={styles.movieImage} source={{uri : "https://image.tmdb.org/t/p/w500"+props.image}} >
                <Rating score={props.score.toString().slice(0,3)}/>
            </ImageBackground>
            <View style={styles.movieNameBox} ><Text style={styles.MovieName}>{(props.name.length < 30)?props.name:props.name.slice(0,30)+"..."}</Text></View>
        </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    movieContainer :{ 
        width : 107,
        height : 200,
        backgroundColor : "grey",
        borderRadius : 7,
        display : "flex", 
        justifyContent : "center",
        alignItems : "flex-end",
        borerRadius : 10,
        overflow : 'hidden',
        margin : 5
    },
    movieImage :{
        flex : 1,
        height : "100%",
        width : "100%",
        zIndex : 1,
        display : "flex",
        justifyContent : "flex-end",
        alignItems : "flex-end"
    },
    movieNameBox : {
        height : "17.5%",
        width : "100%",
        backgroundColor : "#61677A",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    MovieName : {
        fontSize : 12,
        fontWeight : "bold",
        color : 'white',
        textAlign : "center",
    },
    modalLayout : {
        flex : 1,
        width : "100%",
        height : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "violet",
    }

})
