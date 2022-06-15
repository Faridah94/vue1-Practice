import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAwy1e55kEfHZPtmMkVdKNrBx5lgmr23rA",
    authDomain: "udemy-geo-faridah.firebaseapp.com",
    databaseURL: "https://udemy-geo-faridah.firebaseio.com",
    projectId: "udemy-geo-faridah",
    storageBucket: "udemy-geo-faridah.appspot.com",
    messagingSenderId: "141159618466",
    appId: "1:141159618466:web:00e4f2f18f80451ac8c4fb",
    measurementId: "G-6Y4FYDCR9C"
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebaseApp.firestore()
