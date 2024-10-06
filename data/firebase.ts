// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ4wEs4fAccDYAS1-r1Uof90yJmkUDHhc",
  authDomain: "aquaguard-5ec7d.firebaseapp.com",
  databaseURL: "https://aquaguard-5ec7d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "aquaguard-5ec7d",
  storageBucket: "aquaguard-5ec7d.appspot.com",
  messagingSenderId: "121792445246",
  appId: "1:121792445246:web:6281f777052cd3093e0a6f",
  measurementId: "G-7E7861MPPJ",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const dataBase = getDatabase()
