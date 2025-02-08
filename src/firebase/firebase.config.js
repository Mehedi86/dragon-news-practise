// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiv5GMfGAjIwh2AW3cBYvribo05qarFIc",
  authDomain: "dragon-news-practise.firebaseapp.com",
  projectId: "dragon-news-practise",
  storageBucket: "dragon-news-practise.firebasestorage.app",
  messagingSenderId: "188452382254",
  appId: "1:188452382254:web:dc8ab74a44fa8ba3c861bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;