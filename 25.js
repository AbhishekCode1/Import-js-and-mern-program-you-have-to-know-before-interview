var MongoClient = require('mongodb').MongoClient;
//var url ="mongodb://127.0.0.1:27017/mydb";
//var  url = "mongodb://localhost:27017/mydb";
 var  url = "mongodb://localhost:127.0.0.1:27017/mydb";


MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("Database created!");
    db.close();
});