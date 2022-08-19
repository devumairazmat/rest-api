const express = require('express');
const app = express()

// Routes 
app.get(`/`,(req,res) => {
     res.send("Welcome to The Node Team Hy Bro! Hurry");
});

// Listen To Server
app.listen(3000);
