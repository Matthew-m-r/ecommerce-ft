// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6B179vuyplg55-eiwWEezO2i6T3PHhBk",
  authDomain: "e-2fb1d.firebaseapp.com",
  projectId: "e-2fb1d",
  storageBucket: "e-2fb1d.appspot.com",
  messagingSenderId: "581625934333",
  appId: "1:581625934333:web:35c4d074f562c036d06994",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
