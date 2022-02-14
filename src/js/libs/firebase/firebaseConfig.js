// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkeO81IHg7Ydoq_siGvFpXaUrqtskNp0g",
    authDomain: "estys-picks.firebaseapp.com",
    databaseURL: "https://estys-picks-default-rtdb.firebaseio.com",
    projectId: "estys-picks",
    storageBucket: "estys-picks.appspot.com",
    messagingSenderId: "444884710280",
    appId: "1:444884710280:web:a9d9323ade12c0d2a5c03d"
  };
 

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const storage = getStorage(app)

// export the service objects
export {db, storage}