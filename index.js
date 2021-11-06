// Import packages
const { initializeApp } = require("firebase/app")
// import { initializeApp } from "firebase/app";
const express = require('express');
const fs = require("fs");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const jsonOfApiKey = fs.readFileSync("apiKey.json");
const firebaseConfig = JSON.parse(jsonOfApiKey)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the Firestore database
const db = firebase.firestore();

// Initiate the express server
const app = express();
const port = 8080;

// Trigger email service in Twilio


// Cron schedule

app.listen(port, () => {
    console.log(`Listening at PORT ${port}`);
})

