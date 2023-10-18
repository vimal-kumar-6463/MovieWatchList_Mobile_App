import {View , Text ,Image, StyleSheet , Pressable} from "react-native"



export default function BottomOption (props) {
    
  function setPage() {
    props.setPageHook(props.thisPage);
}

    return (
      <View style={styles.BottomOptions}>
        <Pressable style={styles.button} android_ripple={{color : "#EEE9DA"}} onPress={setPage}>
                <Image style={styles.bottomIcons} source={props.image}/>
                <Text style={styles.bottomText}>{props.text}</Text>    
        </Pressable>
      </View>

    )
}

const styles = StyleSheet.create({
    BottomOptions : {
        height : "85%",
        aspectRatio : 2/1,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 10,
        overflow : "hidden",
    
      }
      ,bottomIcons : {
        height : "70%",
        aspectRatio : 1/1 
      },
      bottomText : {
        color : "white",
        fontSize : 10,
        margin : 2,
        textAlign : "center",
        fontWeight : "bold"
      },
      button : {
        width : "100%",
        height : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        padding : 5,
      }
    })
