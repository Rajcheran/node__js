const mongodb = require('mongodb')
const mongoclient = mongodb.MongoClient;


const mongoconnect = (callback) => {
    mongoclient.connect('mongodb+srv://rajashekarcse45:Atlas%4010@cluster0.sscgl.mongodb.net/')
        .then(client => {
            console.log('connected');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });

 }

module.exports=mongoconnect;