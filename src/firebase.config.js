// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_ShxCnbg51B_6m4bgEDDer5VxJACK9k",
  authDomain: "hekto-k.firebaseapp.com",
  projectId: "hekto-k",
  storageBucket: "hekto-k.appspot.com",
  messagingSenderId: "1027954270661",
  appId: "1:1027954270661:web:a5b88d19e6f02e3ca42bac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}
export default firebaseConfig