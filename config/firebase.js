import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { getDatabase } from 'firebase/database';

// import Constants from 'expo-constants';
// Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyD6cOtunvx-E26ecIsx5Zs3Wgu1euYGk7s",
  authDomain: "betochchatapp.firebaseapp.com",
  projectId: "betochchatapp",
  storageBucket: "betochchatapp.appspot.com",
  messagingSenderId: "923563576884",
  appId: "1:923563576884:web:24f07cb6c6e48c57ac0461"
};
// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getDatabase();
//export const database = getFirestore();
