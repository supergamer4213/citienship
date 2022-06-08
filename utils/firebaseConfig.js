// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6L4SNMv_5Z0gJG6VyMTlqoXssFi0zLAo",
  authDomain: "fir-144ab.firebaseapp.com",
  projectId: "fir-144ab",
  storageBucket: "fir-144ab.appspot.com",
  messagingSenderId: "366249820411",
  appId: "1:366249820411:web:25a1921591441a64df705e",
  measurementId: "G-4C46QWKVFG"
};


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app)
  
  export {storage, db}

