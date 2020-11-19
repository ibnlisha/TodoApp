const express = require('express'),
          app = express(), path = require('path'),
     mongoose = require('mongoose'),
       routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use("/api/todos", routes);
app.use(express.static(__dirname+"/views"));
app.use(express.static(__dirname+"/public"));

app.get('/', (req, res) => {
    res.sendFile("/home.html", {root: __dirname+"/views"});
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});