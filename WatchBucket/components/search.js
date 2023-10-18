import {View , Text , StyleSheet , Image , TextInput , Pressable , ScrollView} from "react-native";
import {useState , useEffect} from 'react';
import Movie from "./movie";

function SearchScreen(props) {
    
    const [searchName , setSearchName] = useState("");
    const [searchedMovies , setSearchedMovies] = useState([]);

    function updateSearch(event) {
        setSearchName(event.nativeEvent.text);
    }

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/search/movie?query="+searchName.replace(" ","+")+"&api_key=f246cf94cc80b0dec2d0fb9e17517dc7")
        .then(data => data.json())
        .then(movies => setSearchedMovies(movies.results))
        .catch(err => console.log(err))
    })
    
    function closeSearchScreen(){
        props.setSearchVisibility(false)
    }

    return (
        <View style={styles.searchLayout}> 
            <View style={styles.wraper}>
                <View style={styles.button}>
                    <Pressable onPress={closeSearchScreen} android_ripple={{color : "grey"}}>
                        <Image style={styles.searchIcon} source={require('../assets/Arrow.png')}/>
                    </Pressable>
                </View>
                <Text style={styles.title}>Search</Text>  
            </View>
            
            <View style={styles.searchBar}>
                <TextInput style={styles.textInput} onChange={updateSearch} placeholder="Game of Thrones , Naruto ..." placeholderTextColor="#526D82" value={searchName}/>
                <View style={styles.button}><Pressable android_ripple={{color : "grey"}}>
                    <Image style={styles.searchIcon} source={require("../assets/Search.png")}/>
                </Pressable></View>
            </View>
            <ScrollView style={styles.displayArea} >
                <View style={styles.contents}>
                    {searchedMovies.map(item => <Movie key={item.id} id={item.id} name={item.original_title} dets={item} image={item.poster_path} score={item.vote_average} 
                    description={item.overview} details={item}/>)}
                </View>
            </ScrollView>
    
        </View>
    )
}


const styles = StyleSheet.create({
    searchLayout : {
        width : "100%",
        height : "100%",
        backgroundColor : "black",
        display : 'flex',
        justifyContent : "center",
        alignItems : "center",
    },
    wraper : {
        diplay : "flex",
        flexDirection : "row",
        width : "100%",
        margin : 10
    },
    title : {
        width : "90%",
        color : 'white',
        fontSize : 24,
        fontWeight : "bold",
        textAlign : "left",
        margin : 5
    },
    searchBar : {
        backgroundColor : "#27374D",
        height : 50,
        width : "90%",
        margin : 5,
        diplay : "flex",
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 7.5,
        overflow : "hidden"
    },
    displayArea : {
        flex : 1,
        width : "95%",
        margin : 25,
    },
    textInput : {
        flex : 1,
        width : "80%",
        height : "80%",
        color : "white",
        padding : 10,
        marginLeft : 10,
        backgroundColor : "#27374D"
    },
    searchIcon : {
        height : 40,
        width : 40,
        margin : 5,
        borderRadius : 10,
    },
    button : {
        borderRadius : 10,
        overflow : "hidden",
    },
    contents : {
        flex : 1,
        backgroundcolor : "green",
        height : "100%",
        width : "100%",
        display : "flex",
        flexDirection : 'row',
        justifyContent : "center",
        alignItems : "center",
        flexWrap : "wrap"
    }
    
})


export default SearchScreen;