import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9TgVTR-oB0wijO6zcko1f8fpeAqEcUXc",
  authDomain: "twitter-clone-e1e34.firebaseapp.com",
  projectId: "twitter-clone-e1e34",
  storageBucket: "twitter-clone-e1e34.appspot.com",
  messagingSenderId: "351973419467",
  appId: "1:351973419467:web:9090bc0f8466c00b9f2e4e",
  measurementId: "G-3F04SYX2MD",
};

const firebaseApp = firebase.initalizeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
