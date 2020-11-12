import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCd2tkQVI_ahTQlFtcpZA_2kBvY5OwPQxM",
  authDomain: "guessing-game-demo.firebaseapp.com",
  databaseURL: "https://guessing-game-demo.firebaseio.com",
  projectId: "guessing-game-demo",
  storageBucket: "guessing-game-demo.appspot.com",
  messagingSenderId: "335175187821",
  appId: "1:335175187821:web:aa310ea03560497813ae64",
});

const db = firebaseApp.firestore();

export { db };
