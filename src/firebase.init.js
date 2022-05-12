// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaNgMMhPc4Nb6OkUpcqOCiQ1FG0u2uWZ4",
  authDomain: "doctors-portal-c4226.firebaseapp.com",
  projectId: "doctors-portal-c4226",
  storageBucket: "doctors-portal-c4226.appspot.com",
  messagingSenderId: "33337200597",
  appId: "1:33337200597:web:3242590da2b8920caab75c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
