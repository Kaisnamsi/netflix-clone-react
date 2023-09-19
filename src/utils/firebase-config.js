import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCB-etM397HIPECbX8AgZk5GxEaGKdNxmc",
  authDomain: "netflix-app-de8a8.firebaseapp.com",
  projectId: "netflix-app-de8a8",
  storageBucket: "netflix-app-de8a8.appspot.com",
  messagingSenderId: "472712210703",
  appId: "1:472712210703:web:e7d591f348e4343655b67a"
};



const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
