import {Text ,StyleSheet, View , ImageBackground , Modal , Pressable , Image} from "react-native";
import {useState , useEffect} from 'react';
import MovieLi from "./movieLi";

export default function Poster(props){

    
    const [modalVisibility , setModalVisibility] = useState(false);
    const [isWatchList , setIsWatchList] = useState(false);

    function openModal () {
        setModalVisibility(true);
        console.log("poster pressed");
    }
    
    function closeModal() {
        setModalVisibility(false);
        console.log("modal closed");
    }

    return (
    <>
    <Modal visible={modalVisibility} transparent={true} animationType="slide">
            <ImageBackground style={styles.modalLayout} source={{uri : "https://image.tmdb.org/t/p/w500"+props.image}} 
                             imageStyle={{opacity:0.2}} >
                <View style={styles.button}>
                    <Pressable android_ripple={{color : "grey"}} onPress={closeModal}>
                        <Image style={styles.searchIcon} source={require('../assets/Arrow.png')}/>
                    </Pressable>
                </View>
                <MovieLi key={props.id} id={props.id} name={props.name} score={props.score} episodes={2} description={props.description} image={props.image}
                         isWatchList={isWatchList} setIsWatchList={setIsWatchList} details={props.details} />
            </ImageBackground>
    </Modal>
    <ImageBackground className="posterContainer" source={{uri : "https://image.tmdb.org/t/p/original"+props.posterMovie.backdrop_path}} style={styles.posterContainer} key="1">
        <Pressable className="posterPopUp" style={styles.posterPopUp} onPress={openModal}  >
                    <View className="posterDet" style={styles.posterDet}>
                        <View style={styles.wrap}>
                            <Text style={styles.label}>{props.posterMovie.original_title}</Text>
                        </View>
                        
                    </View>     
        </Pressable>
    </ImageBackground>
    </>    

    )
}


const styles = StyleSheet.create({
    posterContainer : {
        borderRadius : 10,
        flex : 1,
        width : "100%"
    },
    posterPopUp : {
        flex : 1,
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "flex-start",
        width : "100%",
        height : "100%",
        zIndex : 1,
        margin : 5,
        marginLeft : 10,
        padding : 10,
        borderRadius : 20,
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
    pressable : {
        flex : 1,
        display : "flex",
        justifyContent : "flex-start",
        alignItems : "flex-start"
    },
    posterDet : {
        flex : 8 ,
    },

    label : {
        width : "100%",
        textAlign : "left",
        fontWeight : "bold",
        fontSize : 17.5,
        color : "white",
        padding : 5,
    },
    wrap : {
        width : "70%",
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