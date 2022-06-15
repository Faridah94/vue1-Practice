
// Your web app's Firebase configuration
import * as firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyBovEaH6PmV-GuI74o12Mv-pJyoUb9tURA',
  authDomain: 'mooc-12c43.firebaseapp.com',
  databaseURL: 'https://mooc-12c43.firebaseio.com',
  projectId: 'mooc-12c43',
  storageBucket: 'mooc-12c43.appspot.com',
  messagingSenderId: '192855310114',
  appId: '1:192855310114:web:80a3f1f65818a702bdef7b',
  measurementId: 'G-2K5XQV15N9'
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
