import firebase from'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyDrn16ULQCa_4mszWJX9t2Rou0kMOO0-50",
    authDomain: "tets4-411d9.firebaseapp.com",
    databaseURL: "https://tets4-411d9.firebaseio.com",
    projectId: "tets4-411d9",
    storageBucket: "tets4-411d9.appspot.com",
    messagingSenderId: "145745898027",
    appId: "1:145745898027:web:a0bb2405e3191b376d186e"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()
  export const dbMenuAdd = db.collection('menuItems')