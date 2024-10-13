// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

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

export const database =
  app.name && typeof window !== "undefined" ? getDatabase(app) : null
