// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyO2W9kiEaSGsWM9JDiozQyt7FFymB9wc",
    authDomain: "my-auth-app-c0433.firebaseapp.com",
    projectId: "my-auth-app-c0433",
    storageBucket: "my-auth-app-c0433.appspot.com",
    messagingSenderId: "749231077211",
    appId: "1:749231077211:web:7dfca89c083d0419cfcc7e",
    measurementId: "G-M52KZBH93D"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };