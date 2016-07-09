var express = require("express");
var app = express();

app.use(express.static('public'));

//starting the server
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started"); 
});
