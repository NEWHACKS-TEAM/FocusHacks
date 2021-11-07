// Import packages
const { initializeApp } = require("firebase/app")
const express = require('express');
const path = require('path');
const fs = require("fs");
const {sendEmailWithTwilio, sendWarningEmailWithTwilio} = require("./sendGrid")
require('dotenv').config({ path: 'sendgrid.env' })

// Initiate the express server
const app = express();
const port = 8080;

// Trigger email service in Twilio
app.post("/email", async(req,res) => {
    // declare your username and email <--- please change to your name and uncomment this line
    const username = process.env.USERNAME
    const email = process.env.EMAIL
    sendEmailWithTwilio(username, email);
    res.json({success:true});
})

app.post("/warning", async(req,res) => {
    // declare your username and email <--- please change to your name and uncomment this line
    const username = process.env.USERNAME
    sendWarningEmailWithTwilio(username);    
    res.json({success:true});
})

app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, () => {
    console.log(`Listening at PORT ${port}`);
})

