import Firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC0WwL_wEsq24gXMwJarcpRHR20Zv90Z4k",
    authDomain: "vue-firebase-9ef3c.firebaseapp.com",
    databaseURL: "https://vue-firebase-9ef3c.firebaseio.com",
    projectId: "vue-firebase-9ef3c",
    storageBucket: "vue-firebase-9ef3c.appspot.com",
    messagingSenderId: "68581840088",
    appId: "1:68581840088:web:4ce876135192b3821bb3ad",
    measurementId: "G-N6T8VDC2GB"
  };
  

  let app = Firebase.initializeApp(firebaseConfig);
  let db = app.database();
  let articlesRef = db.ref('articles');
  
  export default articlesRef;