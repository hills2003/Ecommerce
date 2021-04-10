import React from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/storage";
import "firebase/database";

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBRXU_CxKhYCDwdN5UlQDWBkEDa9vggM8E",
  authDomain: "lewek-b57c3.firebaseapp.com",
  projectId: "lewek-b57c3",
  storageBucket: "lewek-b57c3.appspot.com",
  messagingSenderId: "661612329725",
  appId: "1:661612329725:web:b4205de10ded3ad3d2dc94"
  };


const app = firebase.initializeApp(config);
export const auth = app.auth();
export const storage = app.storage();
export const database = app.database();
export {  app as default};
