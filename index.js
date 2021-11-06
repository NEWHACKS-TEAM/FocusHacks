// Import packages
const express = require('express');

// Initiate the express server
const app = express();
const port = 8080;



app.listen(port, () => {
    console.log(`Listening at PORT ${port}`);
  })