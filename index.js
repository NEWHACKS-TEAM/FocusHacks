// Import packages
const { initializeApp } = require("firebase/app")
const express = require('express');
const path = require('path');
const fs = require("fs");
const {sendEmailWithTwilio} = require("./sendGrid")

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const jsonOfApiKey = fs.readFileSync("firebaseApiKey.json");
const firebaseConfig = JSON.parse(jsonOfApiKey)

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize the Firestore database
const db = firebase.firestore();

// Initiate the express server
const app = express();
const port = 8080;

// Trigger email service in Twilio
// app.post("/email", async(req,res) => {
//     // declare your username and email
//     // const username = "xxx" <--- please change to your name and uncomment this line
//     // const email = "xxx"    <--- please change to your email and uncomment this line
//     sendEmailWithTwilio(username, email);
// })

app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, () => {
    console.log(`Listening at PORT ${port}`);
})

