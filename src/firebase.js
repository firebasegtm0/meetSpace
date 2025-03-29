import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA-098X7b7Tw7rokCcq-St4J6PcLEzrAgs",
  authDomain: "setupapp-4d616.firebaseapp.com",
  projectId: "setupapp-4d616",
  storageBucket: "setupapp-4d616.firebasestorage.app",
  messagingSenderId: "288934416181",
  appId: "1:288934416181:web:d0ee9b7c0ea1d2b05a467c",
  measurementId: "G-JHER8BPP30",
  databaseURL: "https://setupapp-4d616-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



export { app, analytics, auth, db, storage };


