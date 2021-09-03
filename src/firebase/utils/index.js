// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyCDTN8fZUlW68cFiR3o8Umu7gdXdGw8HvY",
  authDomain: "e-commerce-536ef.firebaseapp.com",
  projectId: "e-commerce-536ef",
  storageBucket: "e-commerce-536ef.appspot.com",
  messagingSenderId: "147481062291",
  appId: "1:147481062291:web:be34de8a324d919b299666",
  measurementId: "G-6LCFEDTZP0",
};

// Initialize Firebase
const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth();

export const fbAuth = { auth, }

export {
    db, auth
};
// export const createUser = createUserWithEmailAndPassword(auth,email,password).then(userCredential => {
//     console.log(userCredential);
// });
