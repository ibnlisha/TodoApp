const mongoose = require('mongoose');

//connecting the database
mongoose.connect('mongodb://localhost:27017/todoDB', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Database connected");
}).catch( (err) => {
    console.log("Database was unable to connect due to erro: ", err);
});

module.exports.Todo = require('./todo');