import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs1HBizDGr0sD6nhXV1jXce038OhYAQwc",
  authDomain: "knuffelbus.firebaseapp.com",
  projectId: "knuffelbus",
  storageBucket: "knuffelbus.appspot.com",
  messagingSenderId: "592223707892",
  appId: "1:592223707892:web:c403bbc842a69ef849b4a1",
  measurementId: "G-J7Z2N23XLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);