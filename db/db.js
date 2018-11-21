var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/API";

function createDB() {
    MongoClient.connect(url)
        .then(conn =>  this.connection = conn.db("API"))
        .catch(err => console.log(err));
    // MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
    //     });
    // });
}

module.exports = function(){ return  createDB;}