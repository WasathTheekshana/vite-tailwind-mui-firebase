import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA5dvLg4V6wK9ElRBrttJyeEnheq7r__Zw",
    authDomain: "yarn-project-70c6e.firebaseapp.com",
    projectId: "yarn-project-70c6e",
    storageBucket: "yarn-project-70c6e.appspot.com",
    messagingSenderId: "808722770482",
    appId: "1:808722770482:web:07b6aac2951f6a2fbc6a2b",
    measurementId: "G-ZFBWK9G82J"
  };

  const app  = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

