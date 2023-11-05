// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfnETwEcwX68YpVtYa9enHRjkbILb_emY",
  authDomain: "the-diner-project.firebaseapp.com",
  projectId: "the-diner-project",
  storageBucket: "the-diner-project.appspot.com",
  messagingSenderId: "738058178917",
  appId: "1:738058178917:web:e7765a1739b0ce6f90118c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
