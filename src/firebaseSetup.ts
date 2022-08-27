import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMtLyyjE3WUFJgXFJEbl7tipWoFI3_2h4",
  authDomain: "chat-react-6c14c.firebaseapp.com",
  projectId: "chat-react-6c14c",
  storageBucket: "chat-react-6c14c.appspot.com",
  messagingSenderId: "880192405133",
  appId: "1:880192405133:web:9f666f74a8a4b5c99decc4",
  measurementId: "G-EZ0BD7YVZ8",
};

firebase.initializeApp(firebaseConfig);
// export const auth: firebase.auth.Auth = firebase.auth();
// export const firestore: firebase.firestore.Firestore = firebase.firestore();
export const auth: any = firebase.auth();
export const firestore: any = firebase.firestore();
