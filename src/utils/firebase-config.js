import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrU7qx0cDRYPpU8CoQ9UItm60sKWkvVtM",
  authDomain: "netflix-clone-79739.firebaseapp.com",
  projectId: "netflix-clone-79739",
  storageBucket: "netflix-clone-79739.appspot.com",
  messagingSenderId: "535896724472",
  appId: "1:535896724472:web:7448b3125d497eac813c0d",
  measurementId: "G-CVKCN2FNF4",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
