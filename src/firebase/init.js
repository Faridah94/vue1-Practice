import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAKJWvCzBHNiDwkNZqZWO8zEdDbEwJEKRI',
  authDomain: 'udemy-faridah-chat.firebaseapp.com',
  databaseURL: 'https://udemy-faridah-chat.firebaseio.com',
  projectId: 'udemy-faridah-chat',
  storageBucket: 'udemy-faridah-chat.appspot.com',
  messagingSenderId: '135186418899',
  appId: '1:135186418899:web:0a437caa834a5387455826',
  measurementId: 'G-DBLBD6CNEX'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebaseApp.firestore()
