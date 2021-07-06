import firebase from 'firebase/app'
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
  apiKey: "AIzaSyD3dT2rg2J1IFOPGItKvKNHdsUJmO3xNPM",
  authDomain: "chat-app-28620.firebaseapp.com",
  projectId: "chat-app-28620",
  storageBucket: "chat-app-28620.appspot.com",
  messagingSenderId: "111029928750",
  appId: "1:111029928750:web:f909da1b0b2991c4c770bf",
  measurementId: "G-MM11HNHNRE",
}).auth();
