import {apps, initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { getDatabase } from 'firebase/database';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxytbfjQ_scf5DwUtqIHr2fdn0NTs6flo",
  authDomain: "chatbetochapp.firebaseapp.com",
  projectId: "chatbetochapp",
  storageBucket: "chatbetochapp.appspot.com",
  messagingSenderId: "517330165011",
  appId: "1:517330165011:web:efbe5dc2f3b27d07430ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const auth = getAuth();
export const database = getDatabase();
//export const database = getFirestore();



