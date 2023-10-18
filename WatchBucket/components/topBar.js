import {StyleSheet , View , Text , Image , Pressable} from "react-native"



export default function TopBar(props) {
    
    function openSearchScreen(){
        props.setSearchVisibility(true);
    }

    return (
        <View style={styles.topBar}>
            <Image style={styles.icon} source={require("../assets/popcorn.png")}/>
            <View style={styles.leftBox}>
                <View style={styles.button} ><Pressable onPress={openSearchScreen} android_ripple={{color : "grey"}}><Image style={styles.icon} source={require("../assets/Search.png")}/></Pressable></View>
                {/* <View style={styles.button} ><Pressable android_ripple={{color : "grey"}}><Image style={styles.icon} source={require("../assets/Menu.png")}/></Pressable></View> */}
            </View>
      </View>
    )
}


const styles = StyleSheet.create({
    topBar : {
        height : "7.5%",
        maxHeight : 75,
        width : "95%",
        margin : 10,
        backgroundColor : 'black',
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "flex-end",
        margin : 5,
        marginTop : 25,
        borderRadius : 10,
      },
      icon : {
        height : 45,
        width : 45,
        margin : 7.5,
      },
      leftBox : {
        flexDirection : "row",
      },
      button : {
        borderRadius : 10,
        overflow : "hidden"
      }
})