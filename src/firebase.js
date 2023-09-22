// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF5_dZWri94tp0-av2pjhIQTK4U9rAq-A",
  authDomain: "crud-mi-pagina.firebaseapp.com",
  projectId: "crud-mi-pagina",
  storageBucket: "crud-mi-pagina.appspot.com",
  messagingSenderId: "908421312",
  appId: "1:908421312:web:f942db1b440c6511eaa525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)