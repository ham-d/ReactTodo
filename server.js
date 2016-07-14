var express = require("express");
var app = express();

app.use(express.static('public'));

//starting the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.IP, function(){
   console.log("Server started on port: " + PORT); 
});