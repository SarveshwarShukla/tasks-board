import firebase from 'firebase';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCOy3uaPPE9yfsOYwNSrCs7-QWb009yI-4",
    authDomain: "tasks-list-4fbd1.firebaseapp.com",
    projectId: "tasks-list-4fbd1",
    storageBucket: "tasks-list-4fbd1.appspot.com",
    messagingSenderId: "1094589201686",
    appId: "1:1094589201686:web:55597c86ba5ab4099ba437"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;