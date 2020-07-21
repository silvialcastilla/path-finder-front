import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCaLZcKuPH0QmbR7zwVOT90PVjAW1NVVyk",
    authDomain: "mappi-thebridge.firebaseapp.com",
    databaseURL: "https://mappi-thebridge.firebaseio.com",
    projectId: "mappi-thebridge",
    storageBucket: "mappi-thebridge.appspot.com",
    messagingSenderId: "415155437668",
    appId: "1:415155437668:web:0b7657b6b4781bb8c65f71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}