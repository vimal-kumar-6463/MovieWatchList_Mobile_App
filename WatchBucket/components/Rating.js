import { StyleSheet , Text , View , Image } from "react-native";


export default function Rating(props) {
    
    
    return (
        <View style={styles.ratingBox}> 
            <Image style={styles.ratingImage} source={require("../assets/ratingIcon.png")}/>
            <Text style={styles.ratingScore}>{props.score}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    ratingBox : {
        opacity : 0.6,
        height : "10%",
        aspectRatio : 2/1,
        backgroundColor : "white",
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center",
        borderRadius : 2,
        margin : 5,
    },
    ratingImage : {
        width : "35%",
        height : "70%",
        opacity : 1,

    },
    ratingScore : {
        opacity : 1,
        fontSize : 10,
        marginRight : 2,
    }

})