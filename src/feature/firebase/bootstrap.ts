// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE } from "./config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: FIREBASE.APIKEY,
  authDomain: FIREBASE.AUTHDOMAIN,
  projectId: FIREBASE.PROJECTID,
  storageBucket: FIREBASE.STORAGEBUCKET,
  messagingSenderId: FIREBASE.MESSAGINGSENDERID,
  appId: FIREBASE.APPID,
  measurementId: FIREBASE.MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const analytics = getAnalytics(app);
