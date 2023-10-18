import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Pressable, ScrollView , Dimensions , Modal} from 'react-native';
import {useState} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import  WatchListMoviesContextProvider  from "./store/context/watchListMovies-context.js";

import BottomOption from './components/bottomOption.js';
import TopBar from "./components/topBar.js"
import HomeScreen from './screens/homeScreen.js';
import TrendingPage from './screens/trendingScreen.js';
import WatchListPage from './screens/watchListPage.js';
import SearchScreen from './components/search.js';
import { clearAllData } from './components/dataControl.js';

export default function App() {
  
  var [pageNo , setPageNo] = useState(1);
  var [searchVisibilty , setSearchVisibility] = useState(false)

  return (
    <WatchListMoviesContextProvider>
    <Modal visible={searchVisibilty} animationType="slide" transparent={false}>
      <SearchScreen setSearchVisibility={setSearchVisibility} />
    </Modal>
    <StatusBar style="light" />
    <View className="container" style={styles.container}>
          <TopBar setSearchVisibility={setSearchVisibility}/>
          <View style={styles.screens}>
            {(pageNo === 1)?<HomeScreen/>:(pageNo === 2)?<TrendingPage/>:<WatchListPage/>}
          </View>
            <View style={styles.bottomBar}>
              <BottomOption thisPage={1} image={require("./assets/Home.png")} text="Home" setPageHook={setPageNo}/>
              <BottomOption thisPage={2} image={require("./assets/Trending.png")} text="Trending" setPageHook={setPageNo}/>
              <BottomOption thisPage={3} image={require("./assets/WatchList.png")} text="WatchList" setPageHook={setPageNo}/>
          </View>
          
    </View>
    </WatchListMoviesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    backgroundColor: 'black',
    width : "100%",
    height : "100%",
  },
  screens: {
      display : "flex",
      width : "100%",
      height : "78%",
      justifyContent : "space-around",
      alignItems : "center",
  },
  bottomBar : {
    height : "8%",
    width : "95%",
    backgroundColor : "grey",
    margin : 10,
    borderRadius : 10,
    display : "flex",
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
    gap : 5
  }
  ,bottomIcons : {
    height : "60%",
    aspectRatio : 1/1 
  },
  bottomText : {
    color : "white",
    fontSize : 10,
    margin : 2,
    textAlign : "center"
  },

});
