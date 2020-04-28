const User = require('../model/user');
const sql = require('../databases/mysql');
const redis = require('redis');
const client = redis.createClient();


module.exports.mysqlToMongodb = (timeStamp) => {
    sql.query(`select * from students WHERE timeStamp > ${timeStamp}`, async (err, result) => {
        if(err) throw err;
        console.log("New data :- ", result);
        result.forEach(item => {
            const data = new User(item)
            data.save()
            client.set("timeStamp", item.timeStamp);    
            console.log("data Saved ..!!");        
        });
    });
}