import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect } from 'react';


const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All data deleted successfully');
  } catch (error) {
    console.error('Error deleting all data:', error);
  }
};

// Storing data
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data saved successfully with id : '+ key);
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

// Retrieving data
const retrieveData = async (watchList , setWatchList) => {
    try {
        const allKeys = await AsyncStorage.getAllKeys();
        const allData = await AsyncStorage.multiGet(allKeys);
    
        // `allData` will be an array of arrays, each containing [key, value] pairs
        // You can process this data as needed
        console.log('All Data:', allData);
        const movies = allData.map(i => i[0])
        console.log("stored ids : ",movies)
        var movieData = []
        
        setWatchList(movieData);

      } catch (error) {
        console.error('Error retrieving all data:', error);
      }

};


const deleteData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Key-value pair deleted successfully:', key);
    } catch (error) {
      console.error('Error deleting key-value pair:', error);
    }
  };



export {storeData , retrieveData , deleteData , clearAllData}