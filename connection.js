const mongoose = require('mongoose');

const url = "mongodb+srv://ayush1210:allsmall2004@mern.ddk0v.mongodb.net/mydatabase01?retryWrites=true&w=majority&appName=MERN"

// connects to the database


// asynchronous - returns a promise 
mongoose.connect(url)
.then((result) => {
    console.log("Connected to database");
    
})
.catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;