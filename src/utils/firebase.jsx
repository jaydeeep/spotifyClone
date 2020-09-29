import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzvxEJSZm4rKVeWVsOIxyzIx6_ftyCND8",
    authDomain: "clack-7cdea.firebaseapp.com",
    databaseURL: "https://clack-7cdea.firebaseio.com",
    projectId: "clack-7cdea",
    storageBucket: "clack-7cdea.appspot.com",
    messagingSenderId: "456896525136",
    appId: "1:456896525136:web:89356eb3958f5e4a8c7255",
    measurementId: "G-5F2C6G1GGZ"
  };
 const firebaseApp=firebase.initializeApp(firebaseConfig);
 const db=firebaseApp.firestore();
 const auth=firebase.auth();
 const provider=new firebase.auth.GoogleAuthProvider();

 export default db;
 export {auth,provider};
