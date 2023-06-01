// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOTjqN3FG-8LatDIKE90_1odfvSgAbct4",
  authDomain: "healthcheck-9b53c.firebaseapp.com",
  databaseURL: "https://healthcheck-9b53c.firebaseio.com",
  projectId: "healthcheck-9b53c",
  storageBucket: "healthcheck-9b53c.appspot.com",
  messagingSenderId: "145750587383",
  appId: "1:145750587383:web:d41eabf922e6b4f6c920f2",
  measurementId: "G-6LRLB2FS0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export default getFirestore();
