var express = require('express');
   mongoose= require('mongoose');
     bodyPaerser= require('body-parser');

var db;
if(process.env.ENV=='Test')
    db = mongoose.connect('mongodb://localhost:27017/nodejs-express-web-apps_test');
else{

    db= mongoose.connect('mongodb://localhost:27017/nodejs-express-web-apps');
}


//var db= mongoose.connect('mongodb://localhost/bookAPI');
var Book= require('./models/bookModel');

var app = express();

 var port=process.env.PORT || 3000;
app.use(bodyPaerser.urlencoded({extended:true}));
app.use(bodyPaerser.json());
bookRouter =require('./Routes/bookRoutes')(Book);


app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', function(req, res){
  res.send('welcome to my API!');
});

app.listen(port, function(){
  console.log('Gulp is running my app on PORT: ' + port);
});
module.exports=app;