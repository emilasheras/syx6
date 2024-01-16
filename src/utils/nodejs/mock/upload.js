//! This file is only for testing purposes, it is not part of the app
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const API_KEY = "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY";
const AUTH_DOMAIN = "syx6-90fdd.firebaseapp.com";
const PROJECT_ID = "syx6-90fdd";
const STORAGE_BUCKET = "syx6-90fdd.appspot.com";
const MESSAGING_SENDER_ID = "930833462856";
const APP_ID = "1:930833462856:web:6d13e2c3abf0ab291dca7d";

// ############################################################
// Initialize Firebase
// ############################################################

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// import the local json file containing the mock data
import MOCK_DATA from './gallery-image-data.json' assert { type: 'json'};

// ############################################################
// Upload the mock data to the firebase database
// ############################################################
MOCK_DATA.forEach(async (item) => {
    await addDoc(collection(db, "assets"), item);
    console.log(`Uploaded ${item.name} to the database`);
});

