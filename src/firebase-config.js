import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEhi7UZMXYMb-3fpnv48Szwj6cY1JtdpQ",
    authDomain: "fight-covid19-g.firebaseapp.com",
    databaseURL: "https://fight-covid19-g.firebaseio.com",
    projectId: "fight-covid19-g",
    storageBucket: "fight-covid19-g.appspot.com",
    messagingSenderId: "289457284574",
    appId: "1:289457284574:web:fb8f08e0a1bf76d415a94f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); 
const auth = firebase.auth();
export { db, firebase, auth };