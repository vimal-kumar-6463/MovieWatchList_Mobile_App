import { StyleSheet , Text , Image , View , Pressable, ImageBackground, DrawerLayoutAndroidComponent, Modal } from "react-native";
import { useState } from 'react'; 
import MovieLi from "./movieLi";
import Rating from "./Rating";

export default function Movie(props) {
    
    const [modalVisibility , setModalVisibility] = useState(false);
    const [isWatchList , setIsWatchList] = useState(false);

    return (
        <>
        <Modal visible={modalVisibility} transparent={true} animationType="slide">
            <ImageBackground style={styles.modalLayout} source={{uri : "https://image.tmdb.org/t/p/w500"+props.image}} 
                             imageStyle={{opacity:0.2}} >
                <View style={styles.button}>
                    <Pressable android_ripple={{color : "grey"}} onPress={()=>{setModalVisibility(false)}}>
                        <Image style={styles.searchIcon} source={require('../assets/Arrow.png')}/>
                    </Pressable>
                </View>
                <MovieLi key={props.id} id={props.id} name={props.name} score={props.score} episodes={2} description={props.description} image={props.image}
                         isWatchList={isWatchList} setIsWatchList={setIsWatchList} details={props.details} />
            </ImageBackground>
        </Modal>
        <Pressable android_ripple={{color : "#205295" , borderless: false}} style={styles.movieContainer} onPress={() => setModalVisibility(true)}>
            <ImageBackground style={styles.movieImage} source={{uri : "https://image.tmdb.org/t/p/w500"+props.image}} >
                <Rating score={props.score.toString().slice(0,3)}/>
            </ImageBackground>
            <View style={styles.movieNameBox} >
                <Text style={styles.MovieName}>{(props.name.length < 30)?props.name:props.name.slice(0,30)+"..."}</Text>
            </View>
        </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    movieContainer :{ 
        width : "30%",
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
        alignItems : "center",
        borderBottom : 0,
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
        backgroundColor : 'black',
    },
    searchIcon : {
        height : 40,
        width : 40,
        margin : 5,
        borderRadius : 10,
    },
    button : {
        borderRadius : 10,
        position : "absolute",
        top : 10,
        left : 10,
        overflow : "hidden",
    },

})


