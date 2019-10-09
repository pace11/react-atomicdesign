import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAYHdo5BpHan3Hw--kZKkY3MmPrtkEMrb8",
    authDomain: "pace-notes.firebaseapp.com",
    databaseURL: "https://pace-notes.firebaseio.com",
    projectId: "pace-notes",
    storageBucket: "",
    messagingSenderId: "690970126412",
    appId: "1:690970126412:web:77f8b2f8db67c00ac4ece9",
    measurementId: "G-B7RSBBLGEE"
};
firebase.initializeApp(firebaseConfig);

export default firebase