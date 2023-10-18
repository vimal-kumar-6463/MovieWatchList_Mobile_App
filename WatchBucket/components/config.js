
import firebase from 'firebase/app';
import 'firebase/database'; // Import the Firebase Realtime Database module

console.log("firebase : "+firebase)

const firebaseConfig = {
  apiKey: "AIzaSyAzLfTC3xhQsSvAaNl08D3Mv7g_yrlAo8M",
  authDomain: "https://watchbucket-8a753-default-rtdb.firebaseio.com",
  databaseURL:"https://console.firebase.google.com/project/watchbucket-8a753/database/watchbucket-8a753-default-rtdb/data/~2F",
  projectId: "watchbucket-8a753",
  storageBucket: "watchbucket-8a753.appspot.com",
  messagingSenderId: "38993871983",
  appId: "1:38993871983:android:39529de0efe034f4fff99a"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default firebase;